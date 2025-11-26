import axios from "axios";
import { toast } from "react-toastify";
import { cookieService } from "@shared/lib/cookies";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = cookieService.getToken();
    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorData = error.response?.data;

    if (errorData) {
      toast.error(JSON.stringify(errorData));
    }

    if (error.response?.status === 401) {
      cookieService.removeToken();
    }

    return Promise.reject(error);
  }
);
