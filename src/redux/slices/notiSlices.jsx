import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	type: "success",
	mes: "",
	isOpen: false,
};

const notiSlices = createSlice({
	name: "notiSlices",
	initialState,
	reducers: {
		openMess: (state, { payload }) => {
			state.type = payload.type;
			state.mes = payload.mes;
			state.isOpen = !state.isOpen;
		},
		resetNotiREDU: () => {
			return initialState;
		},
	},
});

export const { openMess, resetNotiREDU } = notiSlices.actions;

export default notiSlices.reducer;
