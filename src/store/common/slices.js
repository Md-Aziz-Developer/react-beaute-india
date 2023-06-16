import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: false,
    status: null,
    loading: false,
    data: [],
    links: [],
}

export const CommonSlices = createSlice({
    name: "common",
    initialState: initialState,
    reducers: {
        startCall: (state, action) => {
            state.error = false;
            state.loading = true;
            state.status = null;
        },
        endCall: (state, action) => {
            state.error = false;
            state.loading = false;
        },
        catchError: (state, action) => {
            state.error = true;
            state.loading = false;
            state.status = action.payload.status;
        },
        setData: (state, action) => {
            state.error = false;
            state.loading = false;
            state.data = action.payload.data;
            state.links = action.payload.links;
            state.status = null;
        },
    }
});