import axios from "axios";

export const socialAuth = (url, payload) => {
    return axios.post(url, payload);
}

export const login = (url, payload) => {
    return axios.post(url, payload);
}

export const register = (url, payload) => {
    return axios.post(url, payload);
}

export const logout = (url, config) => {
    return axios.get(url);
}

export const getUser = (url, config) => {
    return axios.post(url)
}