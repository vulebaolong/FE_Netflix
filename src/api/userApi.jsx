import axios from "axios";
import { MANHOM } from "../contants/apiContants";

export const userApi = {
	login: (data) => {
		return axios.post(`/QuanLyNguoiDung/DangNhap?maNhom=${MANHOM}`, data);
	},
	register: (data) => {
		return axios.post(`/QuanLyNguoiDung/DangKy?maNhom=${MANHOM}`, data);
	},
	getInfoAccount: () => {
		return axios.post(`/QuanLyNguoiDung/ThongTinTaiKhoan?maNhom=${MANHOM}`);
	},
	updateAccount: (data) => {
		return axios.put(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data);
	},
};


