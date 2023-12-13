import { createSlice } from "@reduxjs/toolkit";
import { saveTokenUserLocal, saveUserLocal } from "../../helpers/user";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        nameUser: null,
        id: null,
        token: null,
        accessToken: null,
        refreshToken: null,
        typeToken: null
    },
    reducers: {
        saveUserAfterReg(state, action) {
            state.email = action.payload.data.email;
            state.nameUser = action.payload.data.name;
            state.id = action.payload.data.id;
            saveUserLocal(state.email, state.nameUser, state.id)  
        },
        saveTokenUserAfterSignIn(state, action) {
            state.accessToken = action.payload.data.access_token;
            state.refreshToken = action.payload.data.refresh_token;
            state.typeToken = action.payload.data.token_type;
            const accessToken =  state.accessToken;
            const refreshToken =  state.refreshToken;
            const typeToken =  state.typeToken;
            saveTokenUserLocal(accessToken, refreshToken, typeToken)  
        }
    }
})

export const {saveUserAfterReg, saveTokenUserAfterSignIn} = userSlice.actions

export default userSlice.reducer