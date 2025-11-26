import { apiClient } from "../axios";
import type {
  LoginRequest,
  LoginResponse,
  RefreshRequest,
  RefreshResponse,
  User,
} from "./auth.types";

const AUTH_ENDPOINTS = {
  LOGIN: "/auth/jwt/create/",
  REFRESH: "/auth/jwt/refresh/",
  ME: "/v1/users/me/",
} as const;

export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const { data } = await apiClient.post<LoginResponse>(
      AUTH_ENDPOINTS.LOGIN,
      credentials
    );
    return data;
  },

  refresh: async (refreshToken: string): Promise<RefreshResponse> => {
    const { data } = await apiClient.post<RefreshResponse>(
      AUTH_ENDPOINTS.REFRESH,
      {
        refresh: refreshToken,
      } as RefreshRequest
    );
    return data;
  },

  getMe: async (): Promise<User> => {
    const { data } = await apiClient.get<{ data: User }>(AUTH_ENDPOINTS.ME);
    return data.data;
  },
};
