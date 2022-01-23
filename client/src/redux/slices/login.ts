import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface LoginState {
    username?: string;
    password?: string;
}

const initialState: LoginState = {
    username: undefined,
    password: undefined,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginData: (state, data: PayloadAction<LoginState>) => {
            state.username = data.payload.username;
            state.password = data.payload.password;
        },
    }
});

export const { setLoginData } = loginSlice.actions;

export default loginSlice.reducer;
