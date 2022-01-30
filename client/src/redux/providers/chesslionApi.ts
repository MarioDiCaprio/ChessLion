import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_ADDRESS } from '../../settings';
import { PublicAccountData } from '../models/account';
import { LoginRequest, LoginResponse } from '../models/login';
import { RegisterResponse, RegisterRequest } from '../models/register';


export const chesslionApi = createApi({
    reducerPath: 'chesslionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: SERVER_ADDRESS
    }),
    endpoints: (builder) => ({
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (registerRequest) => ({
                url: '/registration',
                params: registerRequest
            })
        }),

        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (loginRequest) => ({
                url: '/login',
                params: loginRequest
            })
        }),

        publicAccountData: builder.query<PublicAccountData, string | null>({
            query: (username) => ({
                url: '/publicUserInfo',
                params: { username }
            })
        }),
    })
});

export const {
    useLoginMutation,
    useRegisterMutation,
    usePublicAccountDataQuery,
} = chesslionApi;
