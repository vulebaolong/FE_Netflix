import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";
import { openMess } from "./notiSlices";
import { navigate } from "../../App";
import { wait } from "../../helpers/awaitHelper";
import { lcStorage } from "../../helpers/localStorage";
import { USER_LOGIN } from "../../contants/userContants";

const initialState = {
	userLogin: lcStorage.get(USER_LOGIN),
	numAvatar: Math.floor(Math.random() * 70) + 1,
	infoTicket: [],
	infoAfterRegister: {
		taiKhoan: "",
		matKhau: "",
	},
};

const userSlices = createSlice({
	name: "userSlices",
	initialState,
	reducers: {
		resetUserREDU: () => {
			return initialState;
		},
		loginREDU: (state, { payload }) => {
			state.userLogin = payload;
		},
		setInfoTicket: (state, { payload }) => {
			state.infoTicket = payload;
		},
		setInfoAfterRegister: (state, { payload }) => {
			state.infoAfterRegister.taiKhoan = payload.taiKhoan;
			state.infoAfterRegister.matKhau = payload.matKhau;
		},
	},
});

export const {setInfoAfterRegister, setInfoTicket, loginREDU, openMesREDU, resetUserREDU } = userSlices.actions;

export default userSlices.reducer;

// =========================MIDLEWARE============================

//loginMID
export const loginMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await userApi.login(requestData);

			console.log("loginMID", { data, status });

			dispatch(loginREDU(data.content));

			dispatch(openMess({ type: "success", mes: "Đăng nhập thành công" }));

			await wait(1000);

			navigate("/home");

			lcStorage.set(USER_LOGIN, data.content);
		} catch (error) {
			console.log(error);
			dispatch(openMess({ type: "error", mes: "Đăng nhập không thành công" }));
		}
	};
};

//registerMID
export const registerMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await userApi.register(requestData);

			console.log("registerMID", { data, status });

			navigate("/login");

			dispatch(setInfoAfterRegister(data.content))
		} catch (error) {
			console.log(error);
		}
	};
};

//getInfoAccountMID
export const getInfoAccountMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await userApi.getInfoAccount(requestData);
			console.log("getInfoAccountMID", { data, status });
			dispatch(setInfoTicket(data.content.thongTinDatVe));
		} catch (error) {
			console.log(error);
		}
	};
};
