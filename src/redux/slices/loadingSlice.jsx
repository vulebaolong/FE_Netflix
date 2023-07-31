import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
};

const loadingSlice = createSlice({
	name: "loadingSlice",
	initialState,
	reducers: {
		setIsLoadingREDU: (state, {payload}) => {
			state.isLoading = payload;
		},
	},
});

export const {setIsLoadingREDU} = loadingSlice.actions;

export default loadingSlice.reducer;
