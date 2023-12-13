export const saveTokenLocal = (token) => {
    localStorage.setItem('token', token)
};

export const deleteTokenLocal = () => {
    localStorage.removeItem('token')
};

export const getTokenLocal = () => {
    const token = localStorage.getItem('token');
    return token ? token : null
}