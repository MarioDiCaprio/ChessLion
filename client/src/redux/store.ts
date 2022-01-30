import { configureStore } from "@reduxjs/toolkit";
import { chesslionApi } from "./providers/chesslionApi";
import loginCredentials from "./slices/loginCredentials";


const store = configureStore({
    reducer: {
        loginCredentials: loginCredentials,
        [chesslionApi.reducerPath]: chesslionApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(chesslionApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
