import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
};

const loadingSlice = createSlice({
	name: "loadingSlice",
	initialState,
	reducers: {
		setIsLoading: (state, {payload}) => {
			state.isLoading = payload;
		},
	},
});

export const {setIsLoading} = loadingSlice.actions;

export default loadingSlice.reducer;
