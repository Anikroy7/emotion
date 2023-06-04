/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const apislice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_LOCAL_URL
    }),
    reducerPath:'apiSlice',
    endpoints : (builder)=> ({})
})


export default apislice;
