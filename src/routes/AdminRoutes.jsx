import { Routes, Route } from "react-router-dom";
import RoleGuard from "../guards/RoleGuard";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";

const AdminRoutes = () => (
  <RoleGuard role="ADMIN">
    <AdminLayout>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </AdminLayout>
  </RoleGuard>
);

export default AdminRoutes;
