import axios from "axios";
import { getToken, removeToken } from "./auth";

const BASE_URL = "http://127.0.0.1:8088";

const API = axios.create({
	baseURL: BASE_URL,
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

// 添加请求拦截器
API.interceptors.request.use((config) => {
	const { url } = config;
	// console.log(config);
	if (!url.startsWith("/user/login") && !url.startsWith("/user/register")) {
		// 添加请求头
		config.headers.Authorization = getToken();
	}
	return config;
});

// 添加响应拦截器
API.interceptors.response.use((response) => {
	// console.log(response);
	const { status } = response.data;
	if (status === 400) {
		// 移除token
		removeToken();
	}
	return response;
});
export { API, BASE_URL };
