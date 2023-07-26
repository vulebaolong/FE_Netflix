import { createSlice } from "@reduxjs/toolkit";
import { commentApi } from "../../api/commentApi";
import { error, success } from "../../App";

const initialState = {
	listComment: [],
};

const commentSlice = createSlice({
	name: "commentSlice",
	initialState,
	reducers: {
		getListComment: (state, { payload }) => {
            console.log(payload);
			state.listComment = payload;
		},
	},
});

export const { getListComment } = commentSlice.actions;

export default commentSlice.reducer;

// ============== MIDLEWARE =============================
//getAllCommentMID
export const getAllCommentMID = () => {
	return async (dispatch) => {
		try {
			const { data, status } = await commentApi.getAllComment();
			console.log("getAllCommentMID", { data, status });
			dispatch(getListComment(data));
		} catch (err) {
			console.log(err);
		}
	};
};

//postCommentMID
export const postCommentMID = (requestData) => {
	return async (dispatch) => {
		try {
			const { data, status } = await commentApi.postComment(requestData);
			console.log("postCommentMID", { data, status });
			dispatch(getAllCommentMID());
			return {
				type: success, // import success
				mes: "Đăng bình luận thành công",
			};
		} catch (err) {
			console.log(err);
			return {
				type: error, // import success
				mes: "Đăng bình luận thất bại",
			};
		}
	};
};
