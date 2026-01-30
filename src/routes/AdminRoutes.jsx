import { Routes, Route } from "react-router-dom";
import RoleGuard from "../guards/RoleGuard";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";

const AdminRoutes = () => (
  <RoleGuard role="ADMIN">
    <AdminLayout>
      <Routes>
        <Route index element={<AdminDashboard />} />
      </Routes>
    </AdminLayout>
  </RoleGuard>
);

export default AdminRoutes;
