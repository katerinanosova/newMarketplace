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
    const accesstoken = getAccessTokenLocal();
    const refreshtoken = getRefreshTokenLocal();
    console.log(accesstoken);
    console.log(refreshtoken);
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
      console.log(data);
      return  data;
    } else if (response.status === 401) {
      await updateToken(dispatch);
      getUser(dispatch)
    }
    throw new Error("Нет авторизации");
  }

  export const updateToken = async (dispatch) => {
    try {
      const data = await getNewToken();
      dispatch(saveTokenUserAfterSignIn({data}))
    } catch (error) {
      throw new Error(`Ошибка при обновлении токена`);
    }
  };

  export const getNewToken = async () => {
      const accesstoken = getAccessTokenLocal();
      const refreshtoken = getRefreshTokenLocal();
      console.log(accesstoken);
      console.log(refreshtoken);
      fetch(`${host}/auth/login`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        access_token: accesstoken,
        refresh_token: refreshtoken,
      }),
    }).then((response) => {
      console.log(response);
      if (response.status === 201) {
        return response.json();
      }
      if (response.status === 401) {
        throw new Error("Токен устарел");
      }
      throw new Error("Неизвестная ошибка, попробуйте позже");
    });
  };