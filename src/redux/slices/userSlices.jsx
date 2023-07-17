import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { userApi } from "../../api/userApi";
import { openMess } from "./notiSlices";
import { navigate } from "../../App";
import { wait } from "../../helpers/awaitHelper";

const initialState = {
	userLogin: null,
};

const userSlices = createSlice({
	name: "userSlices",
	initialState,
	reducers: {
		loginREDU: (state, { payload }) => {
			state.userLogin = payload;
		},
	},
});

export const { loginREDU, openMesREDU } = userSlices.actions;

export default userSlices.reducer;

// =========================MIDLEWARE============================

//loginMID
export const loginMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await axios.post(userApi.login, requestData);
			console.log("loginMID", { data, status });
			dispatch(loginREDU(data.content));
			dispatch(openMess({ type: "success", mes: "Đăng nhập thành công" }));
			await wait(1000);
			navigate("/home");
		} catch (error) {
			console.log(error);
			dispatch(openMess({ type: "error", mes: "Đăng nhập không thành công" }));
		}
	};
};
