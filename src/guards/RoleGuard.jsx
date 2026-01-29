import { Navigate } from "react-router-dom";
import { getUser } from "../app/auth";

const RoleGuard = ({ role, children }) => {
  const user = getUser();
  return user?.role === role ? children : <Navigate to="/login" />;
};

export default RoleGuard;
