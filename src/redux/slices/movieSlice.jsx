import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";
import axios from "axios";

const initialState = {
	listMovie: [],
	list: [
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
		{
			img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
		},
	]
};

const movieSlice = createSlice({
	name: "movieSlice",
	initialState,
	reducers: {
		getListMovieREDU: (state, { payload }) => {
			state.listMovie = payload;
		},
	},
});

export const { getListMovieREDU } = movieSlice.actions;

export default movieSlice.reducer;

// =========================MIDLEWARE============================
//getListMovieMID
export const getListMovieMID = () => {
	return async (dispatch) => {
		try {
			const { data, status } = await axios.get(userApi.getListMoive);
			console.log("getListMovieMID", { data, status });
			dispatch(getListMovieREDU(data.content));
		} catch (error) {
			console.log(error);
		}
	};
};
