// tài khoản mocapi: longbaolevu@gmail.com
// https://mockapi.io/projects/64c0e518fa35860bae9f975a

import { commentHttp } from "./apiConfig";

export const commentApi = {
	getAllComment: () => {
		return commentHttp.get(`https://64c0e518fa35860bae9f9759.mockapi.io/comment`);
	},
	postComment: (data) => {
		return commentHttp.post(`https://64c0e518fa35860bae9f9759.mockapi.io/comment`, data);
	},
};
