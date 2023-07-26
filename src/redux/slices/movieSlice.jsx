import { createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../../api/movieApi";

const initialState = {
	listMovie: [],
	editMovie: {},
};

const movieSlice = createSlice({
	name: "movieSlice",
	initialState,
	reducers: {
		getListMovieREDU: (state, { payload }) => {
			state.listMovie = payload;
		},
		getEditMovieREDU: (state, { payload }) => {
			state.editMovie = payload;
		},
	},
});

export const { getListMovieREDU, getEditMovieREDU } = movieSlice.actions;

export default movieSlice.reducer;

// =========================MIDLEWARE============================
//getListMovieMID
export const getListMovieMID = () => {
	return async (dispatch) => {
		try {
			const { data, status } = await movieApi.getListMoive();
			console.log("getListMovieMID", { data, status });
			dispatch(getListMovieREDU(data.content));
		} catch (error) {
			console.log(error);
		}
	};
};

//getOneMovie
export const getOneMovie = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await movieApi.getOneMovie(requestData);
			console.log("getOneMovie", { data, status });
			dispatch(getEditMovieREDU(data.content));
		} catch (error) {
			console.log(error);
		}
	};
};

//deleteMovieMID
export const deleteMovieMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await movieApi.deleteMovie(requestData);
			console.log("deleteMovieMID", { data, status });

			// cập nhật lại
			dispatch(getListMovieMID());
		} catch (error) {
			console.log(error);
		}
	};
};
