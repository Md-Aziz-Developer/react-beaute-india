import axios from "axios";
import * as ReduxStore from "..";

const authInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + ReduxStore.default.getState().auth.accessToken
    }
});

export const all = (url) => {
    return authInstance.get(url);
}

export const find = (url, id) => {
    return authInstance.get(`${url}/${id}`);
}

export const store = (url, payload) => {
    return authInstance.post(url, payload);
}

export const update = (url, id, payload) => {
    return authInstance.put(`${url}/${id}`, payload);
}

export const destroy = (url, id) => {
    return authInstance.delete(`${url}/${id}`);
}