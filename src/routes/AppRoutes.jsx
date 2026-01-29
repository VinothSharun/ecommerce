import { Routes, Route } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import AdminRoutes from "./AdminRoutes";
import SellerRoutes from "./SellerRoutes";
import UserRoutes from "./UserRoutes";
import Login from "../pages/Login";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route element={<AuthGuard />}>
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/seller/*" element={<SellerRoutes />} />
      <Route path="/*" element={<UserRoutes />} />
    </Route>
  </Routes>
);

export default AppRoutes;
