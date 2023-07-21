import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	openHeaderMobile: false,
};

const drawerSlice = createSlice({
	name: "drawerSlice",
	initialState,
	reducers: {
		setOpenHeaderMobile: (state, { payload }) => {
			state.openHeaderMobile = payload;
		},
	},
});

export const {setOpenHeaderMobile} = drawerSlice.actions;

export default drawerSlice.reducer;
