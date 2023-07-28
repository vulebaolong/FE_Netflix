import axios from "axios";
import { BASE_URL, MANHOM, TOKEN_CYBERSOFT } from "../contants/apiContants";
import { lcStorage } from "./../helpers/localStorage";
import { USER_LOGIN } from "./../contants/userContants";
import { store } from "./../redux/store";
import { setIsLoading } from "../redux/slices/loadingSlice";
import { wait } from "../helpers/awaitHelper";

// Thiết lập URL cơ sở
axios.defaults.baseURL = BASE_URL;

//chúng ta sử dụng biến requestCount để đếm số api đang được gọi. 
//Khi có api mới được gọi, chúng ta tăng biến đếm, và khi api hoàn tất, chúng ta giảm biến đếm. 
//Sau đó, chúng ta kiểm tra nếu requestCount bằng 0 (tức là không còn api nào đang được gọi), thì ta tắt loading.

// Khởi tạo biến đếm để đếm số api đã hoàn tất
let requestCount = 0;

// Hàm để bật loading
const showLoading = () => {
	// Nếu requestCount bằng 0 (không có api nào đang được gọi), thì bật loading
	if (requestCount === 0) {
		// Code để bật loading ở đây (ví dụ: show loading overlay)
		store.dispatch(setIsLoading(true));
		console.log("showLoading");
	}

	// Tăng biến đếm khi có api mới được gọi
	requestCount++;
};

// Hàm để tắt loading
const hideLoading = async (response) => {
	// Giảm biến đếm khi api hoàn tất
	requestCount--;
	console.log("requestCount", requestCount);
	// Nếu requestCount bằng 0 (tất cả các api đã hoàn tất), thì tắt loading
	if (requestCount === 0) {
		// Code để tắt loading ở đây (ví dụ: hide loading overlay)
		await wait(500);
		console.log("đầy",response);
		if (response?.config.url === `${response?.config.baseURL}/QuanLyNguoiDung/DangNhap?maNhom=${MANHOM}`) {
			console.log("bỏ qua hideLoading");
			return
		}
		console.log("hideLoading");
		store.dispatch(setIsLoading(false));
		console.log("hideLoading");
	}
};

// Add a request interceptor GỬI ĐI
axios.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		// console.log(config);
		// Kết hợp URL cơ sở và phần đường dẫn cụ thể
		config.url = `${axios.defaults.baseURL}${config.url}`;
		config.headers.TokenCybersoft = TOKEN_CYBERSOFT;
		config.headers.Authorization = `Bearer ${lcStorage.get(USER_LOGIN)?.accessToken}`;
		console.log("API đi");
		showLoading();
		return config;
	},
	function (error) {
		// Do something with request error
		hideLoading();
		return Promise.reject(error);
	},
);

// Add a response interceptor GỬI VỀ
axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		console.log("API về", response);
		hideLoading(response);
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		hideLoading();
		console.log(error);
		return Promise.reject(error);
	},
);

// =========== comment API =================
export const commentHttp = axios.create();
// Add a request interceptor
commentHttp.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		console.log(config);
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	},
);

// Add a response interceptor
commentHttp.interceptors.response.use(
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
