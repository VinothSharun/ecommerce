import { Outlet, Navigate } from "react-router-dom";
import RoleGuard from "../guards/RoleGuard";
import SellerLayout from "../layouts/SellerLayout";
import SellerDashboard from "../pages/seller/SellerDashboard";

const SellerRoutes = () => (
  <RoleGuard role="SELLER">
    <SellerLayout>
      <Outlet />
    </SellerLayout>
  </RoleGuard>
);

export const sellerRouteElements = [
  { path: "", element: <SellerDashboard /> },
];

export default SellerRoutes;
