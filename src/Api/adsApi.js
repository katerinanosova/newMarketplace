import { getAccessTokenLocal } from "../helpers/token";
import { updateToken } from "./tokenApi";
export const host = 'http://127.0.0.1:8090'
  
export const uploadImage = async ({advID, formData}) => {
    const access = getAccessTokenLocal()
    return fetch(`${host}/ads/${advID}/image`, {
      method: "POST",
      headers: {
        Authorization: `bearer ${access}`,
      },
      body: formData,
    }).then((response) => {
      if (response.status === 201) {
        return response.json();
      }
      if (response.status === 401) {
        updateToken();
        return uploadImage({advID, formData});
      }
      throw new Error("Неизвестная ошибка, попробуйте позже");
    });
  };
  // 'content-type': 'multipart/form-data',
  // 'content-type': 'application/json',

