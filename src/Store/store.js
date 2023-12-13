import { configureStore } from "@reduxjs/toolkit";
import { ads } from './RTKQuery/getAds'
import userReducer from "./Slices/userSlice";
import  productsReducer  from "./Slices/dataProductsSlice";
export const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer,
        [ads.reducerPath]: ads.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(ads.middleware)
})
