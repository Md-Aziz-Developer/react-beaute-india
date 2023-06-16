import { CartSlices } from './slices';

const { actions } = CartSlices;

export const add = (payload) => dispatch => {
    dispatch(actions.add(payload))
}

export const update = (id, quantity) => dispatch => {
    dispatch(actions.update({ id, quantity }))
}

export const remove = (id) => dispatch => {
    dispatch(actions.delete({ id }))
}

export const clear = () => dispatch => {
    dispatch(actions.clear())
}

export const applyDiscount = (payload) => dispatch => {
    dispatch(actions.applyDiscount(payload))
}

export const removeDiscount = () => dispatch => {
    dispatch(actions.removeDiscount())
}