// import { useEffect } from "react";
// import { useGetMeQuery } from "../Store/RTKQuery/getMe";
// import { getAccessTokenLocal } from "../helpers/token";
// import { profileUserData, saveUserLocal } from "../helpers/user";
// import { updateToken } from "../Api/tokenApi";

// export function useGetMyProfile(fall) {
//     const access = getAccessTokenLocal()
//     const {data =[], isError, error, isSuccess, refetch} = useGetMeQuery(access);
//     const asyncUpgate = async () => {
//         await updateToken()
//         await refetch()
//         return
//       }
//     useEffect(() => {
//         if(isSuccess) {
//           const response = data
//           saveUserLocal(response.email, response.name, response.id)
//           profileUserData(data, setUserName, setSurname, setCity, setPhone, setAvatar)
//         }
//         if(isError && error.status === 401) {
//           asyncUpgate()
//           return
//         }
//       }, [isSuccess, isError])
//           return {fall, data}
// }
//   const {fall, data} = useGetMyProfile('123')
//   console.log(fall, data);