import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";
import { error, navigate, success } from "../../App";
import { wait } from "../../helpers/awaitHelper";
import { lcStorage } from "../../helpers/localStorage";
import { USER_LOGIN } from "../../contants/userContants";

const initialState = {
	userLogin: lcStorage.get(USER_LOGIN),
	numAvatar: Math.floor(Math.random() * 70) + 1,
	infoTicket: [],
	infoAccount: {},
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
		setInfoAccount: (state, { payload }) => {
			state.infoAccount = payload;
		},
		setInfoAfterRegister: (state, { payload }) => {
			state.infoAfterRegister.taiKhoan = payload.taiKhoan;
			state.infoAfterRegister.matKhau = payload.matKhau;
		},
	},
});

export const { setInfoAccount, setInfoAfterRegister, setInfoTicket, loginREDU, openMesREDU, resetUserREDU } = userSlices.actions;

export default userSlices.reducer;

// =========================MIDLEWARE============================

//loginMID
export const loginMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await userApi.login(requestData);

			console.log("loginMID", { data, status });

			//lưu userLogin
			dispatch(loginREDU(data.content));

			//lưu localStorage
			lcStorage.set(USER_LOGIN, data.content);

			dispatch(setInfoAfterRegister({ taiKhoan: "", matKhau: "" }));


			await wait(1000);

			navigate("/home");

			return {
				type: success, // import success
				mes: "Đăng nhập thành công",
			};
		} catch (err) {

			return {
				type: error, // import error
				mes: "Đăng nhập thất bại",
			};
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

			dispatch(setInfoAfterRegister(data.content));
		} catch (error) {
			console.log(error);
		}
	};
};

//getInfoAccountMID
export const getInfoAccountMID = () => {
	return async (dispatch) => {
		try {
			const { data, status } = await userApi.getInfoAccount();
			console.log("getInfoAccountMID", { data, status });
			dispatch(setInfoTicket(data.content.thongTinDatVe));
			dispatch(setInfoAccount(data.content));
		} catch (error) {
			console.log(error);
		}
	};
};

//updateAccountMID
export const updateAccountMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await userApi.updateAccount(requestData);
			console.log("updateAccountMID", { data, status });

			// set lại key maLoaiNguoiDung = KhachHang nếu không call Api lần 2 sẽ lỗi
			if (data.content.maLoaiNguoiDung === "Khách hàng") {
				data.content.maLoaiNguoiDung = "KhachHang";
			}
			dispatch(setInfoAccount(data.content));

			// =======đăng nhập lại ========
			// đăng nhập lại để cập nhật userLogin và localStorage
			const requestDataLogin = {
				taiKhoan: data.content.taiKhoan,
                matKhau: data.content.matKhau,
			}
			const { data:dataLogin, status:statusLogin } = await userApi.login(requestDataLogin);

			console.log("loginMID", { dataLogin, statusLogin });

			//lưu userLogin
			dispatch(loginREDU(dataLogin.content));

			//lưu localStorage
			lcStorage.set(USER_LOGIN, dataLogin.content);

			dispatch(setInfoAfterRegister({ taiKhoan: "", matKhau: "" }));
			// =======đăng nhập lại ========

			return {
				type: success, // import success
				mes: "Đổi thông tin tài khoản thành công",
			};
		} catch (err) {
			return {
				type: error, // import error
				mes: "Đổi thông tin tài khoản thất bại",
			};
		}
	};
};
