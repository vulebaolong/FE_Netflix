import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	playingBanner: true,
	endedBanner: false
};

const bannerHomeSlice = createSlice({
	name: "bannerHomeSlice",
	initialState,
	reducers: {
		setPlayingBannerREDU: (state, { payload }) => {
			state.playingBanner = payload;
		},
		setEndedBannerREDU: (state, { payload }) => {
			state.endedBanner = payload;
		},
	},
});

export const {setPlayingBannerREDU, setEndedBannerREDU} = bannerHomeSlice.actions;

export default bannerHomeSlice.reducer;
