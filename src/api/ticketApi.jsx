import axios from "axios";

export const ticketApi = {
	layChiTietPhongVe: (data) => {
		return axios.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${data}`);
	},
	datVe: (data) => {
		return axios.post(`/QuanLyDatVe/DatVe`, data);
	},
};
