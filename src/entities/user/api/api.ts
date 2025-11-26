import { useMutation, useQuery } from "@tanstack/react-query";
import { authApi, type LoginRequest } from "@shared/api";
import { cookieService } from "@shared/lib";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      return await authApi.login(credentials);
    },
    onSuccess: (data) => {
      cookieService.setToken(data.access);
      cookieService.setCookie("refresh_token", data.refresh);
    },
  });
};

export const useCurrentUser = () => {
  const token = cookieService.getToken();

  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      return await authApi.getMe();
    },
    enabled: !!token,
  });
};

export const useRefreshTokenMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const refreshToken = cookieService.getCookie("refresh_token");
      if (!refreshToken) {
        throw new Error("No refresh token");
      }
      return await authApi.refresh(refreshToken);
    },
    onSuccess: (data) => {
      cookieService.setToken(data.access);
    },
  });
};
