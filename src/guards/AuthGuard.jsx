import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../app/auth";

const AuthGuard = () => {
  const user = getUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
