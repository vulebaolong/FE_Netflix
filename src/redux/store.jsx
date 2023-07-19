import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlices";
import notiSlices from "./slices/notiSlices";
import movieSlice from "./slices/movieSlice";
import cinemaSlice from "./slices/cinemaSlice";
import modalMovieSlice from "./slices/modalMovieSlice";
export const store = configureStore({
	reducer: { userSlices, notiSlices, movieSlice, cinemaSlice, modalMovieSlice },
});
