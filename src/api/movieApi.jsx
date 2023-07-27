import axios from "axios";
import { MANHOM } from "../contants/apiContants";

export const movieApi = {
	getListMoive: () => {
		return axios.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${MANHOM}`);
	},
	getOneMovie: (data) => {
		return axios.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${data}`);
	},
	deleteMovie: (data) => {
		return axios.delete(`/QuanLyPhim/XoaPhim?MaPhim=${data}`);
	},
	updateMovie: (data) => {
		return axios.post(`/QuanLyPhim/CapNhatPhimUpload`, data);
	},
	addMovie: (data) => {
		return axios.post(`/QuanLyPhim/ThemPhimUploadHinh`, data);
	},
};

// edit movie: không thay đổi hình ảnh thì để null, còn thay đổi để: File (originFileObj) ThemPhimUploadHinh
