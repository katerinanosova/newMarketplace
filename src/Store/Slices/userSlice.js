import { createSlice } from "@reduxjs/toolkit";
import { saveUserLocal } from "../../helpers/user";
import { saveTokenUserLocal } from "../../helpers/token";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        nameUser: null,
        id: null,
        accessToken: null,
        refreshToken: null,
        typeToken: null,
    },
    reducers: {
        saveUserAfterReg(state, action) {
            state.email = action.payload.data.email;
            state.nameUser = action.payload.data.name;
            state.id = action.payload.data.id;
            saveUserLocal(state.email, state.nameUser, state.id)  
        },
        saveTokenUserAfterSignIn(state, action) {
            console.log(action.payload.data);
            state.accessToken = action.payload.data.access_token;
            state.refreshToken = action.payload.data.refresh_token;
            state.typeToken = action.payload.data.token_type
            const access = state.accessToken;
            const refresh = state.refreshToken;
            const type = state.typeToken;
            saveTokenUserLocal(access, refresh, type)
        }
    }
})

export const {saveUserAfterReg, saveTokenUserAfterSignIn} = userSlice.actions
export default userSlice.reducer