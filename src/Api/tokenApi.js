import { getAccessTokenLocal, getRefreshTokenLocal, saveTokenUserLocal } from "../helpers/token";
export const host = "http://127.0.0.1:8090";
export const updateToken = async () => {
    try {
      const access = await getAccessTokenLocal();
      const refresh = await getRefreshTokenLocal()
      await getToken(access, refresh);
      return
    } catch (error) {
      throw new Error(`Ошибка при обновлении токена:`);
    }
  };

export const getToken = async (access, refresh) => {
        fetch(`${host}/auth/login`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        access_token: access,
        refresh_token: refresh,
      }),
    })
    .then(response => response.json())
    .then(response => saveTokenUserLocal(response))
  };





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