import { USER_LOGIN } from "../contants/userContants";
import { store } from "./../redux/store";

export const checkUser = () => {
	const userFromLocalStorage = JSON.parse(localStorage.getItem(USER_LOGIN));
	const userFromRedux = store.getState().userSlices.userLogin
	return userFromLocalStorage && userFromRedux;
};
