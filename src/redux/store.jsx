import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlices";
import notiSlices from "./slices/notiSlices";
import movieSlice from "./slices/movieSlice";
import cinemaSlice from "./slices/cinemaSlice";
import modalMovieSlice from "./slices/modalMovieSlice";
import bannerHomeSlice from "./slices/bannerHomeSlice";
import drawerSlice from "./slices/drawerSlice";
import detailSlice from "./slices/detailSlice";
import ticketSlice from "./slices/ticketSlice";
export const store = configureStore({
	reducer: {
		userSlices,
		notiSlices,
		movieSlice,
		cinemaSlice,
		modalMovieSlice,
		bannerHomeSlice,
		drawerSlice,
		detailSlice,
		ticketSlice
	},
});

