import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	playingBanner: true,
};

const bannerHomeSlice = createSlice({
	name: "bannerHomeSlice",
	initialState,
	reducers: {
		setPlayingBannerREDU: (state, { payload }) => {
			state.playingBanner = payload;
		},
	},
});

export const {setPlayingBannerREDU} = bannerHomeSlice.actions;

export default bannerHomeSlice.reducer;
