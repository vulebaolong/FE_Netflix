import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: "",
};

const startWithMailSlice = createSlice({
	name: "startWithMailSlice",
	initialState,
	reducers: {
		setEmailREDU: (state, { payload }) => {
			state.email = payload;
		},
	},
});

export const { setEmailREDU } = startWithMailSlice.actions;

export default startWithMailSlice.reducer;
