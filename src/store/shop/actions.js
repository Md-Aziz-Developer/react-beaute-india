import notification from 'utilities/notification'
import * as requestFromServer from './cruds'
import { ShopSlices } from './slices'

const { actions } = ShopSlices

export const save = (url, payload) => dispatch => {
    dispatch(actions.startCall())

    return requestFromServer.save(url, payload).then(response => {
        dispatch(actions.endCall())

        const info = response?.data?.data
        const token = response?.data?.data?.token
        dispatch(actions.save({ token, info }))

        return response.data
    }).catch(error => {
        dispatch(actions.endCall())
        const message = error?.response?.data?.message || error.message
        notification('error', message)
    })
}


export const destroy = (url, config) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(actions.destroy({}))
        return resolve(true)
    })
    // dispatch(actions.startCall())

    // return requestFromServer.destroy(url, config).then(response => {
    //     dispatch(actions.endCall())

    //     return response.data
    // }).catch(error => {
    //     dispatch(actions.endCall())
    //     const message = error?.response?.data?.message || error.message
    //     notification('error', message)
    // })
}

