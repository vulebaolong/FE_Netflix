import axios from "axios";

export const userApi = {
	login: (data) => {
		return axios.post(`/QuanLyNguoiDung/DangNhap`, data);
	},
	register: (data) => {
		return axios.post(`/QuanLyNguoiDung/DangKy`, data);
	},
	getInfoAccount: () => {
		return axios.get(`/QuanLyNguoiDung/ThongTinTaiKhoan`);
	},
	getInfoTicket: () => {
		return axios.get(`/QuanLyNguoiDung/ThongTinDatVe`);
	},
	updateAccount: (data) => {
		return axios.put(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data);
	},
	updatePassword: (data) => {
		return axios.put(`/QuanLyNguoiDung/CapNhatMatKhau`, data);
	},
};


