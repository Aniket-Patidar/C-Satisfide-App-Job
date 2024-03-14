import axios from 'axios';
import { setAllJobs, setApplication, setError, setLoading, setPage, setStudent } from '../sclice/studentSclice';
import { getToken, config, setToken, clearToken } from '../../constants/handelToken'
import AsyncStorage from "@react-native-async-storage/async-storage";

const basePath = "http://[2401:4900:1ca2:fb81:39f1:a8f1:4040:ee4b]:8080/user";


export const loginStudent = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/student/signin`, { ...userData });
        setToken(data.token);
        await AsyncStorage.setItem('token', data.token);
        dispatch(setStudent(data.student));
    } catch (error) {
        console.error("Login Error:", error);
        dispatch(setError(error?.response?.data?.message || "Login failed"));
    } finally {
        dispatch(setLoading(false));
    }
};

export const registerStudent = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/student/signup`, { ...userData });
        dispatch(setLoading(false));
        setToken(data.token);
        await AsyncStorage.setItem('token', data.token);
        dispatch(setStudent(data.student))
    } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(error?.response?.data?.message || "registerStudent failed"));
    }
}

export const updateStudent = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/student/update`, userData, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(currentStudent());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}

export const AllJobs = (obj = {}) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/student/AllJobs`, obj, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(setAllJobs(data.jobs))
        dispatch(setPage({
            totalPages: data.totalPages,
            currentPage: data.currentPage
        }))
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}

export const logoutStudent = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const data = await axios.get(`${basePath}/student/signout`, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(setLoading(false));
        dispatch(setStudent(null))
        clearToken()
    } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(error?.response?.data?.message || "registerStudent failed"));
    }
}

export const uploadResuma = (fileData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const formData = new FormData();
        formData.append('resume', fileData);
        const { data } = await axios.post(`${basePath}/student/resumaPdf`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': await AsyncStorage.getItem('token')

            },
        });
        dispatch(currentStudent());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}

export const sendMail = (email) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/student/send-mail`, email, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
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
        const { data } = await axios.post(`${basePath}/student/forget-link/${id}`, { password }, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}

export const applicationSend = (dets) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/student/apply`, dets, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(AllJobs())
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "send Application failed"));
    }
}

export const getApplication = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.get(`${basePath}/student/applications`, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(setApplication(data.applications));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get Application failed"));
    }
}

export const avatarStudent = (fileData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const formData = new FormData();
        formData.append('avatar', fileData);
        const res = await axios.post(`${basePath}/student/avatar`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': await AsyncStorage.getItem('token')
            },
        });
        dispatch(setLoading(false));
        dispatch(currentStudent());

    } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
        dispatch(setError(error?.response?.data?.message || "failed to upload a new avatar"));
    }
}

export const currentStudent = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const token = getToken()
        if (!token) {
            return;
        }
        const { data } = await axios.post(`${basePath}/student`, null, {
            headers: {
                'authorization': await AsyncStorage.getItem('token')
            },
            withCredentials: true
        });
        dispatch(setStudent(data.student));
    } catch (error) {
        dispatch(setError(error?.response?.data?.message || "Failed to get current user"));
    } finally {
        dispatch(setLoading(false));
    }
};
