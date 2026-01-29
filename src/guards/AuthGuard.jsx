import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../app/auth";

const AuthGuard = () => {
  const user = getUser();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
