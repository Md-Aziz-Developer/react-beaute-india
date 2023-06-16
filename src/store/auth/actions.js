import * as requestFromServer from './cruds'
import { AuthSlices } from './slices'

const { actions } = AuthSlices

export const socialAuth = (url, payload) => dispatch => {
    dispatch(actions.startCall())

    return requestFromServer.socialAuth(url, payload).then(response => {
        dispatch(actions.endCall())
        if (response.status !== 200) {
            dispatch(actions.catchError({ message: response.data.message }))
        }

        dispatch(actions.login({ accessToken: response.data.token, user: response.data.user }))
        return response.data
    }).catch(error => {
        const message = error?.response?.data?.message || error.message
        dispatch(actions.catchError({ message }))
    })
}

export const login = (url, payload) => dispatch => {
    dispatch(actions.startCall())

    return requestFromServer.login(url, payload).then(response => {
        dispatch(actions.endCall())

        dispatch(actions.login({ accessToken: response.data.data.token, user: response.data.data.user }))
        return response.data
    }).catch(error => {
        const message = error?.response?.data?.message || error.message
        dispatch(actions.catchError({ message }))
    })
}

export const register = (url, payload) => dispatch => {
    dispatch(actions.startCall())

    return requestFromServer.register(url, payload).then(response => {
        dispatch(actions.endCall())
        if (response.status !== 200) {
            dispatch(actions.catchError({ message: response.data.message }))
        }

        return response.data
    }).catch(error => {
        const message = error.response ? error.response.data.message : error.message
        dispatch(actions.catchError({ message }))
    })
}


export const logout = (url, config) => dispatch => {
    dispatch(actions.startCall())
    dispatch(actions.logout())
    return requestFromServer.logout(url, config).then(response => {
        dispatch(actions.endCall())


        dispatch(actions.logout())
        return response.data
    }).catch(error => {
        dispatch(actions.logout())
        const message = error.response ? error.response.data.message : error.message
        dispatch(actions.catchError({ message }))
    })
}

export const getUser = (url, config) => dispatch => {
    dispatch(actions.startCall())

    return requestFromServer.getUser(url, config).then(response => {
        dispatch(actions.endCall())
        if (response.status !== 200) {
            dispatch(actions.catchError({ message: response.data.data.message }))
        }

        dispatch(actions.getUser({ user: response.data.data }))
        return response.data
    }).catch(error => {
        if (error.response && error.response.status === 401) {
            dispatch(actions.logout())
        }
        const message = error.response ? error.response.data.message : error.message
        dispatch(actions.catchError({ message }))
    })
}

export const setRedirectUrl = (url) => dispatch => {
    dispatch(actions.setRedirectUrl({ redirectUrl: url }))
}
