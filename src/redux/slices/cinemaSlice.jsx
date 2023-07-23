import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { cinemaApi } from "../../api/cinemaApi";

const initialState = {
	cinemaSystem: [],
};

const cinemaSlice = createSlice({
	name: "cinemaSlice",
	initialState,
	reducers: {
		getCinemaSystemREDU: (state, { payload }) => {
			state.cinemaSystem = payload;
		},
	},
});

export const { getCinemaSystemREDU } = cinemaSlice.actions;

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

