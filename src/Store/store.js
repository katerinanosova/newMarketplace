import { configureStore } from "@reduxjs/toolkit";
import { ads } from './RTKQuery/getAds'
import userReducer from "./Slices/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [ads.reducerPath]: ads.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(ads.middleware)
})
