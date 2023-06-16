import { createSlice } from '@reduxjs/toolkit';
import notification from 'utilities/notification';

const initialState = {
    error: null,
    loading: false,
    redirectUrl: null,
    accessToken: null,
    user: null
}

export const AuthSlices = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        startCall: (state, action) => {
            state.error = null;
            state.loading = true;
        },
        endCall: (state, action) => {
            state.error = null;
            state.loading = false;
        },
        catchError: (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
            notification('error', action.payload.message)
        },
        login: (state, action) => {
            state.error = null;
            state.loading = false;
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        getUser: (state, action) => {
            state.error = null;
            state.loading = false;
            state.user = action.payload.user;
        },
        setRedirectUrl: (state, action) => {
            state.redirectUrl = action.payload.redirectUrl;
        },
        logout: (state, action) => {
            state.error = null;
            state.loading = false;
            state.accessToken = null;
            state.user = null;
        }
    }
});