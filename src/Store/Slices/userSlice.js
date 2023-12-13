import { createSlice } from "@reduxjs/toolkit";
import { saveUserLocal } from "../../helpers/user";
import { saveTokenUserLocal } from "../../helpers/token";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        nameUser: null,
        id: null,
        token: [],
    },
    reducers: {
        saveUserAfterReg(state, action) {
            state.email = action.payload.data.email;
            state.nameUser = action.payload.data.name;
            state.id = action.payload.data.id;
            saveUserLocal(state.email, state.nameUser, state.id)  
        },
        saveTokenUserAfterSignIn(state, action) {
            state.token = action.payload.data;
            saveTokenUserLocal(token)  
        }
    }
})

export const {saveUserAfterReg, saveTokenUserAfterSignIn} = userSlice.actions

export default userSlice.reducer