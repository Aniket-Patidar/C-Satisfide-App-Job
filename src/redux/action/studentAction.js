import axios from 'axios';
import { setAllJobs, setApplication, setError, setLoading, setPage, setStudent } from '../sclices/studentSclice';
import { getToken, config, setToken, clearToken } from '../../constants/handelToken'
const basePath = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/user`


export const loginStudent = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/student/signin`, { ...userData });
        setToken(data.token);
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
        dispatch(setStudent(data.student))
    } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(error?.response?.data?.message || "registerStudent failed"));
    }
}

export const currentStudent = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const token = getToken()
        if (!token) {
            return;
        }
        const { data } = await axios.post(`${basePath}/student`, null, config());
        dispatch(setStudent(data.student));
    } catch (error) {
        dispatch(setError(error?.response?.data?.message || "Failed to get current user"));
    } finally {
        dispatch(setLoading(false));
    }
};

export const logoutStudent = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const data = await axios.get(`${basePath}/student/signout`, config());
        dispatch(setLoading(false));
        dispatch(setStudent(null))
        clearToken()
    } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(error?.response?.data?.message || "registerStudent failed"));
    }
}

export const updateStudent = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/student/update`, userData, config());
        dispatch(currentStudent());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
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
                'authorization': getToken()
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
        const { data } = await axios.post(`${basePath}/student/send-mail`, email, config());
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
        const { data } = await axios.post(`${basePath}/student/forget-link/${id}`, { password }, config());
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
        const { data } = await axios.post(`${basePath}/student/AllJobs`, obj, config());
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

export const applicationSend = (dets) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/student/apply`, dets, config());
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
        const { data } = await axios.get(`${basePath}/student/applications`, config());
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
                'authorization': getToken()
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