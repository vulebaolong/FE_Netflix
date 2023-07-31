import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	openHeaderMobile: false,
};

const drawerSlice = createSlice({
	name: "drawerSlice",
	initialState,
	reducers: {
		setOpenHeaderMobileREDU: (state, { payload }) => {
			state.openHeaderMobile = payload;
		},
	},
});

export const {setOpenHeaderMobileREDU} = drawerSlice.actions;

export default drawerSlice.reducer;
