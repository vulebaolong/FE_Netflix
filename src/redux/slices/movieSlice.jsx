import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";
import axios from "axios";

const initialState = {
	listMovie: [],
};

const movieSlice = createSlice({
	name: "movieSlice",
	initialState,
	reducers: {
		getListMovieREDU: (state, { payload }) => {
			state.listMovie = payload;
		},
	},
});

export const { getListMovieREDU } = movieSlice.actions;

export default movieSlice.reducer;

// =========================MIDLEWARE============================
//getListMovieMID
export const getListMovieMID = () => {
	return async (dispatch) => {
		try {
			const { data, status } = await userApi.getListMoive();
			console.log("getListMovieMID", { data, status });
			dispatch(getListMovieREDU(data.content));
		} catch (error) {
			console.log(error);
		}
	};
};
