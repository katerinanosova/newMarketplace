import { getAccessTokenLocal } from "../helpers/token";
import { updateToken } from "./tokenApi";
import { host } from "./userApi";
  
export const uploadImage = async ({advID, image}) => {
    const access = getAccessTokenLocal()
    return fetch(`${host}/ads/${advID}/image`, {
      method: "POST",
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `bearer ${access}`,
      },
      body: image,
    }).then((response) => {
      if (response.status === 201) {
        return response.json();
      }
      if (response.status === 401) {
        updateToken();
        return uploadImage(advID, image);
      }
      throw new Error("Неизвестная ошибка, попробуйте позже");
    });
  };
