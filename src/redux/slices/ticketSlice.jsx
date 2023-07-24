import { createSlice } from "@reduxjs/toolkit";
import { ticketApi } from "./../../api/ticketApi";

const initialState = {
	thongTinPhim: {},
	danhSachGhe: {},
    danhSachPhongVe: {},
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
		selectedThanhToanREDU: (state, { payload }) => {
            state.thanhToan = payload;
        },
		setDatVeREDU: (state, { payload }) => {
            state.isDatVe = payload;
        },
	},
});

export const {setDatVeREDU, layDanhSachPhongVeREDU, gheDangChonREDU, selectedThanhToanREDU } = ticketSlice.actions;

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

// datVeMID
export const datVeMID = (requestData) => {
    return async (dispatch) => {
        try {
            console.log(requestData);
            const { data, status } = await ticketApi.datVe(requestData);
            console.log("datVeMID", { data, status });

            await dispatch(layDanhSachPhongVeMID(requestData.maLichChieu));
            // await dispatch(setDatVeREDU(true));
            // dispatch(showHideModalDatVeREDU("show"));
        } catch (error) {
            console.log(error);
        }
    };
};

