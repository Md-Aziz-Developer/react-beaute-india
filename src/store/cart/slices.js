import { createSlice } from '@reduxjs/toolkit';
// import { array } from '../../helpers';
import array from 'utilities/array';

const initialCoupon = { type: null, value: 0, code: null, max_amount: 0, min_amount: 0, discount_amount: 0 }
const initialState = {
    totalQuantity: 0,
    data: [],
    coupon: initialCoupon,
    subTotal: 0,
    discount: 0,
    shipping_charge: 0,
    total: 0,
}

export const CartSlices = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            const items = state.data;
            if (array.check(items, action.payload.id)) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].id == action.payload.id) {
                        items[i].quantity = items[i].quantity + 1;
                    }
                }
            } else {
                items.push(action.payload)
            }
            state.totalQuantity = state.totalQuantity + action.payload.quantity
            state.subTotal = Number(parseFloat(state.subTotal + action.payload.price).toFixed(2))
            state.total = Number(parseFloat(state.total + action.payload.price).toFixed(2))
        },

        update: (state, action) => {
            const items = state.data
            if (array.check(items, action.payload.id)) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].id == action.payload.id) {
                        items[i].quantity = action.payload.quantity;
                    }
                }
            }
            updateMeta(items, state)
        },

        delete: (state, action) => {
            const items = state.data;
            if (array.check(items, action.payload.id)) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].id == action.payload.id) {
                        items.splice(i, 1);
                    }
                }
            }
            updateMeta(items, state)
        },

        clear: (state, action) => {
            state.totalQuantity = 0
            state.data = []
            state.coupon = initialCoupon
            state.subTotal = 0
            state.discount = 0
            state.shipping_charge = 0
            state.total = 0
        },

        applyDiscount: (state, action) => {
            state.discount = action.payload.discount_amount
            state.coupon = action.payload
        },

        removeDiscount: (state, action) => {
            state.coupon = initialCoupon
            state.discount = 0
        }
    }
});

const updateMeta = (items, state) => {
    let getTotalQuantity = 0;
    for (let i = 0; i < items.length; i++) {
        getTotalQuantity = getTotalQuantity + items[i].quantity;
    }
    var getSubTotal = 0;
    for (let i = 0; i < items.length; i++) {
        getSubTotal = getSubTotal + (items[i].price * items[i].quantity);
    }
    var getTotal = 0;
    for (let i = 0; i < items.length; i++) {
        getTotal = getTotal + (items[i].price * items[i].quantity);
    }
    state.totalQuantity = getTotalQuantity;
    state.subTotal = getSubTotal;
    state.total = getTotal;
}
