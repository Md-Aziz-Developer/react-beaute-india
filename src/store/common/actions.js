import Swal from 'sweetalert2'
import { getLinks } from '../../helpers'
import { handleUnauthorization } from '../../helpers/handleUnauthorization'
import * as requestFromServer from './cruds'
import { CommonSlices } from './slices'

const { actions } = CommonSlices

export const get = (url) => dispatch => {
    dispatch(actions.startCall())

    return requestFromServer.all(url).then(response => {
        dispatch(actions.endCall())
        if (response.status !== 200) {
            dispatch(actions.catchError({ message: response.data.message }))
        }

        return response.data
    }).catch(error => {
        handleUnauthorization(error)
        const message = error.response ? error.response.data.message : error.message
        dispatch(actions.catchError({ message }))
    })
}

export const all = (url) => dispatch => {
    dispatch(actions.startCall())

    return requestFromServer.all(url).then(response => {
        dispatch(actions.endCall())
        if (response.status !== 200) {
            dispatch(actions.catchError({ message: response.data.message }))
        }
        const fillData = { data: response.data.data }
        if (response.data.meta && response.data.meta.links) {
            fillData["links"] = getLinks(response.data.meta.links)
        }
        dispatch(actions.setData(fillData))
        // dispatch(actions.setData({ data: response.data.data }))
        return response.data
    }).catch(error => {
        handleUnauthorization(error)
        const message = error?.response?.data?.message ? error?.response?.data?.message : error.message
        dispatch(actions.catchError({ message }))
    })
}

export const store = (url, payload) => dispatch => {
    dispatch(actions.startCall())

    return requestFromServer.store(url, payload).then(response => {
        dispatch(actions.endCall())
        if (response.status !== 200) {
            dispatch(actions.catchError({ message: response.data.data.message }))
        }

        return response.data
    }).catch(error => {
        handleUnauthorization(error)
        const message = error.response ? error.response.data.message : error.message
        dispatch(actions.catchError({ message }))
    })
}

export const update = (url, id, payload) => dispatch => {
    dispatch(actions.startCall())

    return requestFromServer.update(url, id, payload).then(response => {
        dispatch(actions.endCall())
        if (response.status !== 200) {
            dispatch(actions.catchError({ message: response.data.data.message }))
        }

        return response.data
    }).catch(error => {
        handleUnauthorization(error)
        const message = error.response ? error.response.data.message : error.message
        dispatch(actions.catchError({ message }))
    })
}

export const destroy = (url, id) => dispatch => {

    return Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(actions.startCall())
            return requestFromServer.destroy(url, id).then(response => {
                dispatch(actions.endCall())
                if (response.status !== 200) {
                    dispatch(actions.catchError({ message: response.data.data.message }))
                }

                return response.data
            }).catch(error => {
                handleUnauthorization(error)
                const message = error.response ? error.response.data.message : error.message
                dispatch(actions.catchError({ message }))
            })
        }
    })
}

export const find = (url, id) => dispatch => {
    dispatch(actions.startCall())

    return requestFromServer.find(url, id).then(response => {
        dispatch(actions.endCall())
        if (response.status !== 200) {
            dispatch(actions.catchError({ message: response.data.data.message }))
        }

        return response.data
    }).catch(error => {
        const status = error.response && error.response.status
        const message = error.response ? error.response.data.message : error.message
        dispatch(actions.catchError({ status, message }))
        handleUnauthorization(error)
    })

}