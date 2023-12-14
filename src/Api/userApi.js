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

  export async function singIn(
    email,
    password,
  ) {
    const response = await fetch(`${host}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.status === 422) {
      throw new Error("Проверьте вводимые данные");
    } else if (response.status === 500) {
      throw new Error("Сервер нихт арбайтен");
    }
    const data = await response.json();
    return data;
  }

  export async function getUser(dispatch) {
    console.log('done');
    const accesstoken = getAccessTokenLocal();
    const refreshtoken = getRefreshTokenLocal();
    const type = getTypeTokenLocal();
    const response = await fetch(`${host}/user`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `${type} ${accesstoken}`,
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      return  data;
    } else if (response.status === 401) {
      await getNewToken(dispatch);
      return
    }
    throw new Error("Нет авторизации");
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