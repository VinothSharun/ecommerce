import { Routes, Route } from "react-router-dom";
import RoleGuard from "../guards/RoleGuard";
import SellerLayout from "../layouts/SellerLayout";
import Dashboard from "../pages/seller/Dashboard";

const SellerRoutes = () => (
  <RoleGuard role="SELLER">
    <SellerLayout>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </SellerLayout>
  </RoleGuard>
);

export default SellerRoutes;
