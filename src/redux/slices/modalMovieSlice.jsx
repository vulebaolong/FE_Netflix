import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalMovieActive: {},
	locationMovieEl: null
};

const modalMovieSlice = createSlice({
	name: "modalMovieSlice",
	initialState,
	reducers: {
		setModalMovieActiveREDU: (state, { payload }) => {
			state.modalMovieActive = payload;
		},
		setLocationMovieEl: (state, {payload}) => {
			state.locationMovieEl = payload;
		},
	},
});

export const { setLocationMovieEl, setModalMovieActiveREDU } = modalMovieSlice.actions;

export default modalMovieSlice.reducer;
