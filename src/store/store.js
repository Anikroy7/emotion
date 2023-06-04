import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import apislice from "../features/auth/api/apiSlice";

const store = configureStore({
    reducer:{
       auth: authSlice,
       [apislice.reducerPath]: apislice.reducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(apislice.middleware), 
});


export default store;