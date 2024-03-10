import axios from 'axios';
import { setJobs, setLoading, setError, setJob } from '../sclice/JobSclice';
import { getToken, config, setToken, clearToken } from '../../constants/handelToken'
import AsyncStorage from "@react-native-async-storage/async-storage";

// const basePath = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/employer`

const basePath = "http://[2401:4900:1ca2:c4fc:f0dc:25dd:5376:10b1]:8080/employer";

export const createJobs = (userData) => async (dispatch) => {
    try {

        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/job/create`, { ...userData }, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(setLoading(false));
        dispatch(setJobs(data.student))
     
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "createJob failed"));
    }
}

export const allJobs = (filters = {}) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/job/readall`, filters, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(setLoading(false));
        dispatch(setJobs(data.jobs));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "allJobs failed"));
    }
};

export const getJobById = (id, body = {}) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/job/readsingle/${id}`, body, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(setLoading(false));
        dispatch(setJob(data.job))
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "createJob failed"));
    }
}