import axios from "axios";
import { MANHOM } from "../contants/apiContants";

export const userApi = {
	login: (data) => {
		return axios.post(`/QuanLyNguoiDung/DangNhap?maNhom=${MANHOM}`, data);
	},
	getListMoive: () => {
		return axios.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${MANHOM}`);
	},
};
