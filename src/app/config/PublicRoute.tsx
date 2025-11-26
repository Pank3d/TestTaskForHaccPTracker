import { Navigate, Outlet } from "react-router-dom";
import { cookieService } from "@shared/lib";

export const PublicRoute = () => {
  const token = cookieService.getToken();
  if (token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
