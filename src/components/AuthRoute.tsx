import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/storeHooks";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const { isAuth } = useAppSelector((state) => state.auth);
  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
export default AuthRoute;
