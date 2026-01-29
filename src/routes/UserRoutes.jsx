import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/Home";

const UserRoutes = () => (
  <UserLayout>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </UserLayout>
);

export default UserRoutes;
