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
            console.log(data.email);
            state.email = action.payload.data.email;
            state.nameUser = action.payload.data.name;
            state.id = action.payload.data.id;
            saveUserLocal(email, nameUser, id)  
        }
    }
})

export const {saveUserAfterReg} = userSlice.actions

export default userSlice.reducer