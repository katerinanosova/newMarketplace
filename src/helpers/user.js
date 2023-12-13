import { deleteTokenLocal } from "./token";

export const saveUserLocal = (email, nameUser, id) => {
    localStorage.setItem('email', email);
    localStorage.setItem('name', nameUser);
    localStorage.setItem('id', id);
}

export const deleteUserLocal = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    localStorage.removeItem('id');
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('tokenType');
    if(localStorage.getItem('avatar')){
        localStorage.removeItem('avatar')
    }
    if(localStorage.getItem('token')){
        deleteTokenLocal()
    }
}

export const saveTokenUserLocal = (accessToken, refreshToken, typeToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('tokenType', typeToken);
    console.log('done');
}