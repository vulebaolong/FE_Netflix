import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalMovieActive: {},
	locationMovieEl: null,
	isOpenModalMovie: false,
};

const modalMovieSlice = createSlice({
	name: "modalMovieSlice",
	initialState,
	reducers: {
		setModalMovieActiveREDU: (state, { payload }) => {
			state.modalMovieActive = payload;
		},
		setLocationMovieEl: (state, { payload }) => {
			state.locationMovieEl = payload;
		},
		setIsOpenModalMovieREDU: (state, { payload }) => {
			state.isOpenModalMovie = payload;
		},
	},
});

export const { setIsOpenModalMovieREDU, setLocationMovieEl, setModalMovieActiveREDU } = modalMovieSlice.actions;

export default modalMovieSlice.reducer;
