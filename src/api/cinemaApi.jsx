import axios from "axios";
import { MANHOM } from "../contants/apiContants";

export const cinemaApi = {
	getCinemaSystem: () => {
		return axios.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MANHOM}`);
	},
	getMovieShowtime: (idMovie) => {
		return axios.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`);
	},
	getInfoCinemaSystem: () => {
		return axios.get(`/QuanLyRap/LayThongTinHeThongRap`);
	},
	getInfoCinemaToSystem: (maHeThongRap) => {
		return axios.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
	},
};
