import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import UserDashboard from "../pages/user/UserDashboard";

const UserRoutes = () => (
  <UserLayout>
    <Routes>
      <Route index element={<UserDashboard />} />
    </Routes>
  </UserLayout>
);

export default UserRoutes;
