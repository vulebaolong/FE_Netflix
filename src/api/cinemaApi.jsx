import axios from "axios";

export const cinemaApi = {
	getCinemaSystem: () => {
		return axios.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap`);
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
