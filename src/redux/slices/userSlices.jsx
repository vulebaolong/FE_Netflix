import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";
import { error, navigate, success } from "../../App";
import { wait } from "../../helpers/awaitHelper";
import { lcStorage } from "../../helpers/localStorage";
import { ACCESS_TOKEN, USER_LOGIN } from "../../contants/userContants";

const initialState = {
	userLogin: lcStorage.get(USER_LOGIN),
	numAvatar: Math.floor(Math.random() * 70) + 1,
	infoTicket: [],
	infoAccount: {},
	autoFieldLogin: {
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
		setInfoTicketREDU: (state, { payload }) => {
			state.infoTicket = payload;
		},
		setInfoAccountREDU: (state, { payload }) => {
			state.infoAccount = payload;
		},
		setAutoFieldLoginREDU: (state, { payload }) => {
			state.autoFieldLogin.taiKhoan = payload.taiKhoan;
			state.autoFieldLogin.matKhau = payload.matKhau;
		},
	},
});

export const { setInfoAccountREDU, setAutoFieldLoginREDU, setInfoTicketREDU, loginREDU, openMesREDU, resetUserREDU } = userSlices.actions;

export default userSlices.reducer;

// =========================MIDLEWARE============================

//loginMID
export const loginMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await userApi.login(requestData);

			console.log("loginMID", { data, status });

			//lưu userLogin
			dispatch(loginREDU(data.result.data));

			//lưu localStorage
			lcStorage.set(USER_LOGIN, data.result.data);

			lcStorage.set(ACCESS_TOKEN, data.result.data.accessToken);

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

			dispatch(setAutoFieldLoginREDU(data.result.data));
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
			// dispatch(setInfoTicketREDU(data.result.data.thongTinDatVe));
			dispatch(setInfoAccountREDU(data.result.data));
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

			// // set lại key maLoaiNguoiDung = KhachHang nếu không call Api lần 2 sẽ lỗi
			// if (data.result.data.maLoaiNguoiDung === "Khách hàng") {
			// 	data.result.data.maLoaiNguoiDung = "KhachHang";
			// }
			dispatch(setInfoAccountREDU(data.result.data));

			//lưu userLogin
			dispatch(loginREDU(data.result.data));

			//lưu localStorage
			lcStorage.set(USER_LOGIN, data.result.data);

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

//updateAccountMID
export const updatePasswordMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await userApi.updatePassword(requestData);
			console.log("updatePasswordMID", { data, status });

			return {
				type: success, // import success
				mes: "Đổi mật khẩu thành công",
			};
		} catch (err) {
			return {
				type: error, // import error
				mes: "Đổi mật khẩu thất bại",
			};
		}
	};
};

//getInfoTicketMID
export const getInfoTicketMID = () => {
	return async (dispatch) => {
		try {
			const { data, status } = await userApi.getInfoTicket();
			console.log("getInfoTicketMID", { data, status });
			dispatch(setInfoTicketREDU(data.result.data.thongTinDatVe));
		} catch (error) {
			console.log(error);
		}
	};
};
