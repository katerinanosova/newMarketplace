import { configureStore } from "@reduxjs/toolkit";
import { ads } from '../API/getAds'

export const store = configureStore({
    reducer: {
        [ads.reducerPath]: ads.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ads.middleware)
})