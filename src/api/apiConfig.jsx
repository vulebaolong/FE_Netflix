import axios from "axios";
import { BASE_URL, MANHOM, TOKEN_CYBERSOFT } from "../contants/apiContants";

// Thiết lập URL cơ sở
axios.defaults.baseURL = BASE_URL;

// Add a request interceptor
axios.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		console.log(config);
		// Kết hợp URL cơ sở và phần đường dẫn cụ thể
		config.url = `${axios.defaults.baseURL}${config.url}`;
		config.headers.TokenCybersoft = TOKEN_CYBERSOFT;

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	},
);

// Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		console.log(error);
		return Promise.reject(error);
	},
);
