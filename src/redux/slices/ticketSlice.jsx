import { createSlice } from "@reduxjs/toolkit";
import { ticketApi } from "./../../api/ticketApi";

const initialState = {
	thongTinPhim: {},
	danhSachGhe: {},
    danhSachGheDangChon: [],
	danhSachGheNguoiKhacChon: [{ maGhe: 69962 }, { maGhe: 69963 }],
	thanhToan: "0",
    isDatVe: false,
};

const ticketSlice = createSlice({
	name: "ticketSlice",
	initialState,
	reducers: {
		layDanhSachPhongVeREDU: (state, { payload }) => {
			state.danhSachGhe = payload.danhSachGhe;
			state.thongTinPhim = payload.thongTinPhim;
		},
		gheDangChonREDU: (state, { payload }) => {
            const ghe = payload;
            // nếu ghế đã được đặt thì return
            if (ghe.daDat) return;
            const index = state.danhSachGheDangChon.findIndex(
                (itemSelect) => itemSelect.maGhe === ghe.maGhe
            );
            if (index !== -1) {
                state.danhSachGheDangChon = state.danhSachGheDangChon.filter(
                    (item) => item.maGhe !== payload.maGhe
                );
            }
            if (index === -1) {
                state.danhSachGheDangChon.push(ghe);
            }
        },
	},
});

export const { layDanhSachPhongVeREDU, gheDangChonREDU } = ticketSlice.actions;

export default ticketSlice.reducer;

// =========================MIDLEWARE============================

// layDanhSachPhongVeMID
export const layDanhSachPhongVeMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await ticketApi.layChiTietPhongVe(requestData);
			console.log("layDanhSachPhongVeMID", { data, status });

			dispatch(layDanhSachPhongVeREDU(data.content));
		} catch (error) {
			console.log(error);
		}
	};
};
