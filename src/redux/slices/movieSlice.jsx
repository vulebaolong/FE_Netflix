import { createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../../api/movieApi";
import { error, success } from "../../App";

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
			// console.log("getListMovieMID", data.result.data);
			dispatch(getListMovieREDU(data.result.data));
		} catch (error) {
			console.log(error);
		}
	};
};

//getOneMovieMID
export const getOneMovieMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await movieApi.getOneMovie(requestData);
			console.log("getOneMovieMID", { data, status });
			dispatch(getEditMovieREDU(data.result.data));
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

			return {
				type: success, // import success
				mes: "Xoá phim thành công",
			};
		} catch (err) {
			console.log(err);
			return {
				type: error, // import error
				mes: "Xoá phim thất bại",
			};
		}
	};
};

//updateMovieMID
export const updateMovieMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await movieApi.updateMovie(requestData);
			console.log("updateMovieMID", { data, status });

			// cập nhật lại
			dispatch(getOneMovieMID(data.result.data._id));

			return {
				type: success, // import success
				mes: "Cập nhật phim thành công",
			};
		} catch (err) {
			console.log(err);
			return {
				type: error, // import error
				mes: "Cập nhật phim thất bại",
			};
		}
	};
};

//addMovieMID
export const addMovieMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await movieApi.addMovie(requestData);
			console.log("addMovieMID", { data, status });

			return {
				type: success, // import success
				mes: "Thêm phim thành công",
			};
		} catch (err) {
			console.log(err);
			return {
				type: error, // import error
				mes: "Thêm phim thất bại",
			};
		}
	};
};
