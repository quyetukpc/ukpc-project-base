import { appConfig } from "@configs";
import axios from "axios";

const DEFAULT_TIMEOUT = 5 * 60 * 1000;

export const AZURE_ID = "azure.idToken";

const axiosInstant = axios.create({
	baseURL: appConfig.gateway.serviceUrl,
	timeout: DEFAULT_TIMEOUT,
	headers: {
		"Content-Type": "application/json",
		// Authorization: 'Bearer ' + sessionStorage.getItem(AZURE_ID),
	},
});

axiosInstant.interceptors.request.use(
	(config) => config,
	(error) => Promise.reject(error)
);

// axiosInstant.interceptors.response.use(
//     (response) => {
//         if (response.status === 401) {
//             // Clear local storage, redirect back to login
//             window.location.href = '/logout';
//         }
//         return response;
//     },
//     (error) => {
//         pushError(error?.response?.data?.message || error.message || 'Server error!');
//         return Promise.reject(error);
//     }
// );

export default axiosInstant;
