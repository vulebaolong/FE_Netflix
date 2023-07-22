import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { cinemaApi } from "../../api/cinemaApi";

const initialState = {
	cinemaSystem: [],
	movieShowtime: {},
};

const cinemaSlice = createSlice({
	name: "cinemaSlice",
	initialState,
	reducers: {
		getCinemaSystemREDU: (state, { payload }) => {
			state.cinemaSystem = payload;
		},
		getMovieShowtimeREDU: (state, { payload }) => {
			state.movieShowtime = payload;
		},
	},
});

export const { getCinemaSystemREDU, getMovieShowtimeREDU } = cinemaSlice.actions;

export default cinemaSlice.reducer;

// ========================MIDLEWARE===========================
//getCinemaSystemMID
export const getCinemaSystemMID = () => {
	return async (dispatch) => {
		try {
			const { data, status } = await cinemaApi.getCinemaSystem();
			console.log("getCinemaSystemMID", { data, status });
			dispatch(getCinemaSystemREDU(data.content));
		} catch (error) {
			console.log(error);
		}
	};
};

//getMovieShowtimeMID
export const getMovieShowtimeMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await cinemaApi.getMovieShowtime(requestData);
			console.log("getMovieShowtimeMID", { data, status });
			dispatch(getMovieShowtimeREDU(data.content));
		} catch (error) {
			console.log(error);
		}
	};
};
