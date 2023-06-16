import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    info: null,
    token: null,
}

export const ShopSlices = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {
        startCall: (state, action) => {
            state.loading = true
        },
        endCall: (state, action) => {
            state.loading = false
        },
        save: (state, action) => {
            state.loading = false;
            state.info = action.payload.info;
            state.token = action.payload.token;
        },
        destroy: (state, action) => {
            state.loading = false;
            state.info = null;
            state.token = null;
        },
    }
});