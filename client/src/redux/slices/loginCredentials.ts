import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginRequest } from "../models/login";


const cache = localStorage.getItem('loginCredentials');

let initialState: LoginRequest = {
    username: null,
    password: null,
}

if (cache !== null) {
    initialState = JSON.parse(cache);
}

const loginCredentialsSlice = createSlice({
    name: 'loginCredentials',
    initialState,
    reducers: {
        setLoginCredentials: (_state, data: PayloadAction<LoginRequest>) => {
            let tmp = {
                username: data.payload.username,
                password: data.payload.password
            }
            localStorage.setItem('loginCredentials', JSON.stringify(tmp))
            return tmp;
        }
    }
})

export const { setLoginCredentials } = loginCredentialsSlice.actions;

export default loginCredentialsSlice.reducer;
