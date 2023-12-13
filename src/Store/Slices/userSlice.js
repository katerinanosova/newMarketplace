import { createSlice } from "@reduxjs/toolkit";
import { saveUserLocal } from "../../helpers/user";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        nameUser: null,
        id: null,
        token: null
    },
    reducers: {
        saveUserAfterReg(state, action) {
            console.log(action.payload.data.email);
            state.email = action.payload.data.email;
            state.nameUser = action.payload.data.name;
            state.id = action.payload.data.id;
            saveUserLocal(state.email, state.nameUser, state.id)  
        }
    }
})

export const {saveUserAfterReg} = userSlice.actions

export default userSlice.reducer