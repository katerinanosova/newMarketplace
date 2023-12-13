import { singIn } from "../Api/userApi";
import { saveTokenUserAfterSignIn } from "../Store/Slices/userSlice";

export const handleEmail = (setEmail, event) => {
    setEmail(event.target.value);
};
export const handlePassword = (setPassword, event) => {
    setPassword(event.target.value);
};
export const handleRepeatPassword = (setRepeatPassword, event) => {
    setRepeatPassword(event.target.value);
};
export const handleName = (setName, event) => {
    setName(event.target.value);
};
export const handleSurname = (setSurname, event) => {
    setSurname(event.target.value)
};
export const handleCity = (setCity, event) => {
    setCity(event.target.value)
};
export const handleSignIn = async (email, password, dispatch) => {
    const data = await singIn(email, password);
    dispatch(saveTokenUserAfterSignIn({data}))
  }