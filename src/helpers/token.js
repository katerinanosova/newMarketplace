
export const getTokenLocal = () => {
    const token = localStorage.getItem('token');
    return token ? token : null
}

export const saveTokenUserLocal = (token) => {
    localStorage.setItem("token", token);
}