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
    localStorage.removeItem('token')
    if(localStorage.getItem('avatar')){
        localStorage.removeItem('avatar')
    }
}
