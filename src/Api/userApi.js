
import { saveTokenUserAfterSignIn } from "../Store/Slices/userSlice";
import { getAccessTokenLocal, getRefreshTokenLocal, getTypeTokenLocal } from "../helpers/token";
export const host = "http://127.0.0.1:8090";

  export const registerUser = async ( 
    email,
    password,
    name,
    role,
    surname,
    city,) => {
    
    const response = await fetch(`${host}/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        role: role,
        city: city,
        surname: surname,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    } else if (response.status === 500) {
      throw new Error("Сервер нихт арбайтен");
    }
    const data = await response.json();
    return data;
  }

  export const getNewToken = async (dispatch) => {
      const accesstoken = getAccessTokenLocal();
      const refreshtoken = getRefreshTokenLocal();
      const type = getTypeTokenLocal();
      await fetch(`http://localhost:8090/auth/login`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `${type} ${accesstoken}`,
      },
      body: JSON.stringify({
        access_token: accesstoken,
        refresh_token: refreshtoken,
      }),
    }).then(res => res.json())
      .then(res => {
        const data = res;
        dispatch(saveTokenUserAfterSignIn({data}))})
        .then(getUser(dispatch))
    .catch(
      console.error
      )
  };