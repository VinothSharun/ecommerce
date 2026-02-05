import { Routes, Route } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddSeller from "../pages/admin/AddSeller";
import ViewUser from "../pages/admin/ViewUser";
import ViewProducts from "../pages/admin/ViewProducts";
import SellerRoutes from "./SellerRoutes";
import SellerProducts from "../pages/seller/SellerProducts";
import SellerDashboard from "../pages/seller/SellerDashboard";
import UserRoutes from "./UserRoutes";
import Login from "../pages/Login";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route element={<AuthGuard />}>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="add-seller" element={<AddSeller />}/>
        <Route path="users" element={<ViewUser />} />
        <Route path="products" element={<ViewProducts />} />
      </Route>
      <Route path="/seller" element={<SellerRoutes />}>
        <Route index element={<SellerDashboard />} />
        <Route path="products" element={<SellerProducts />} />
      </Route>
      <Route path="/*" element={<UserRoutes />} />
    </Route>
  </Routes>
);

export default AppRoutes;
