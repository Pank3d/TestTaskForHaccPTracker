import { Navigate, Outlet } from 'react-router-dom';
import { cookieService } from '@shared/lib';

export const ProtectedRoute = () => {
  const token = cookieService.getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
