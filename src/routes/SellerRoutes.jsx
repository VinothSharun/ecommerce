import { Routes, Route } from "react-router-dom";
import RoleGuard from "../guards/RoleGuard";
import SellerLayout from "../layouts/SellerLayout";
import SellerDashboard from "../pages/seller/SellerDashboard";

const SellerRoutes = () => (
  <RoleGuard role="SELLER">
    <SellerLayout>
      <Routes>
        <Route index element={<SellerDashboard />} />
      </Routes>
    </SellerLayout>
  </RoleGuard>
);

export default SellerRoutes;
