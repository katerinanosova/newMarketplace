
import { saveUserAfterReg } from "../Store/Slices/userSlice";

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
    const response = await fetch(`${host}/auth/register`, {
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
    console.log(data);
    return data;
  }