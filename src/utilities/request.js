import axios from "axios"

const all = async (url) => {
    return axios.get(url).then(res => res.data)
}

const post = async (url, data) => {
    return axios.post(url, data).then(res => res.data)
}

const store = async (url, data) => {
    return axios.post(url, data).then(res => res.data)
}

const update = async (url, data) => {
    return axios.put(url, data).then(res => res.data)
}

const show = async (url) => {
    return axios.get(url).then(res => res.data)
}

const destroy = async (url) => {
    return axios.delete(url).then(res => res.data)
}

const request = {
    all, post, store, update, show, destroy
}

export default request