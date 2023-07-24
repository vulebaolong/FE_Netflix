import axios from "axios";
import { MANHOM } from "../contants/apiContants";

export const movieApi = {
	getListMoive: () => {
		return axios.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${MANHOM}`);
	},
};
