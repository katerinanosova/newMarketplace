
import { saveUserAfterReg } from "../Store/Slices/userSlice";
import { getTokenLocal, saveTokenLocal } from "../helpers/token";
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

  export async function getUser() {
    const token = localStorage.getItem('token');
    const response = await fetch(`${host}/user`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `${token.token_type} ${token.access_token}`,
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      return  data;
    } else if (response.status === 401) {
      console.log("need new token");
      // updateToken();
      // <Link to="login" />;
      // return getUser(getTokenFromLocalStorage());
    }
    throw new Error("Нет авторизации");
  }

  export const updateToken = async () => {
    try {
      const token = getTokenLocal();
      const data = await getNewToken(token);
      console.log(data);
      // saveTokenLocal(data);
    } catch (error) {
      throw new Error(`Ошибка при обновлении токена:`);
    }
  };


  export const getNewToken = async (token) => {
    return fetch(`${host}/auth/login`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        access_token: token.access_token,
        refresh_token: token.refresh_token,
      }),
    }).then((response) => {
      if (response.status === 201) {
        return response.json();
      }
      if (response.status === 401) {
        throw new Error("Токен устарел");
      }
  
      throw new Error("Неизвестная ошибка, попробуйте позже");
    });
  };