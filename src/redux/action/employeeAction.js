import axios from 'axios';
import { setEmployee, setLoading, setError, setAllApplications } from '../sclice/employeeSclice';
import { getToken, setToken, clearToken } from '../../constants/handelToken'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEmployeeLoggedIn } from '../../constants/auth';

/* TODO */
// const basePath = `"http://localhost:8080/employer`
const basePath = "http://[2401:4900:1ca3:420e:c45d:2cc5:c87c:6463]:8080/employer";


async function config() {
    return {
        headers: {
            'authorization': await AsyncStorage.getItem('token')
        },
        withCredentials: true
    }
}


export const currentEmployee = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/current`, null, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(setEmployee(data.employer));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.log(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}

export const loginEmployee = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/signin`, { ...userData });
        dispatch(setLoading(false));
        await AsyncStorage.setItem('token', data.token);
        dispatch(currentEmployee())
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "login failed"));
    }
}

export const registerEmployee = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/signup`, { ...userData });
        dispatch(setLoading(false));
        /* TODO */
        token = data.token
        setToken(data.token)
        dispatch(currentEmployee())

    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "register failed"));
    }
}

export const updateEmployee = (details) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/update`, details, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(setEmployee());
        dispatch(currentEmployee())
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}


export const logoutEmployee = (userData) => async (dispatch) => {
    return;
    try {
        dispatch(setLoading(true));
        const data = await axios.get(`${basePath}/signout`, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(setLoading(false));
        dispatch(setEmployee(null))
        await AsyncStorage.removeItem('token');
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "Register failed"));
    }
}




/*TODO  */
export const avatarEmployee = (fileData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const formData = new FormData();
        formData.append('organisationlogo', fileData);
        const { data } = await axios.post(`${basePath}/employeravatar`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': await AsyncStorage.getItem('token')
            },
        });
        // dispatch(currentEmployee());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.log(error, "error");
        dispatch(setError(error?.response?.data?.message || "failed to upload logo"));
    }
}

/* TODO */
export const allApplications = (filters = {}) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/allApplications`, filters, config());
        dispatch(setAllApplications(data.applications));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "Request failed"));
    }
};



export const updateStatus = (requestData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await axios.post(`${basePath}/job/applicationstatus`, requestData, config());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "Update status failed"));
    }
};

export const sendMail = (email) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/send-mail`, email, config());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}

export const resetPassword = (password, id) => async (dispatch) => {
    if (!id) return;
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/forget-link/${id}`, { password }, config());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}
