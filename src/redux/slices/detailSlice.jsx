import { createSlice } from '@reduxjs/toolkit'
import { cinemaApi } from '../../api/cinemaApi';

const initialState = {
	movieDetail: {},
}

const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {
    getMovieDetailREDU: (state, { payload }) => {
        state.movieDetail = payload;
    },
  }
});

export const {getMovieDetailREDU} = detailSlice.actions

export default detailSlice.reducer

// ========================MIDLEWARE===========================

//getMovieDetailMID
export const getMovieDetailMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await cinemaApi.getMovieShowtime(requestData);
			console.log("getMovieDetailMID", { data, status });
			dispatch(getMovieDetailREDU(data.content));
		} catch (error) {
			console.log(error);
		}
	};
};
