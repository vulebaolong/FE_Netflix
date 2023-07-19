import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalMovieActive: {},
	playingModalMovie: false,
	playAgain: false,
};

const modalMovieSlice = createSlice({
	name: "modalMovieSlice",
	initialState,
	reducers: {
		setModalMovieActive: (state, { payload }) => {
			state.modalMovieActive = payload;
		},
		setPlayingModalMovie: (state, { payload }) => {
			state.playingModalMovie = payload;
		},
		playAgain: (state) => {
			state.playAgain = !state.playAgain ;
		},
	},
});

export const { setModalMovieActive, setPlayingModalMovie, playAgain } = modalMovieSlice.actions;

export default modalMovieSlice.reducer;
