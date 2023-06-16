import axios from "axios";

export const save = (url, payload) => {
    return axios.post(url, payload);
}

export const destroy = (url, payload) => {
    return axios.post(url, payload);
}
