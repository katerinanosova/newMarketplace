import { saveTokenUserAfterSignIn } from "../Store/Slices/userSlice";

export const getAccessTokenLocal = () => {
    const token = localStorage.getItem('access');
    return token ? token : null
}
export const getRefreshTokenLocal = () => {
    const token = localStorage.getItem('refresh');
    return token ? token : null
}
export const getTypeTokenLocal = () => {
    const token = localStorage.getItem('type');
    return token ? token : null
}

export const saveTokenUserLocal = (access, refresh, type) => {
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    localStorage.setItem("type", type);
}

export const handleRefreshToken = async (getNewToken, dispatch) => {
      const response = await getNewToken()
      console.log(response);
      dispatch(saveTokenUserAfterSignIn(response))
      return
}