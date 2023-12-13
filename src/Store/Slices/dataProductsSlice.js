import { createSlice } from "@reduxjs/toolkit";
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: null
    },
    reducers: {
        saveProducts(state, action) {
            state.products = action.payload.data;
            console.log(state.products);
        }
    }
})

export const {saveProducts} = productsSlice.actions

export default productsSlice.reducer