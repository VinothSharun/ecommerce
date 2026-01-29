import { logout } from "../app/auth";

const AdminLayout = ({ children }) => (
  <div>
    <h2>Admin Panel</h2>
    <button onClick={logout}>Logout</button>
    {children}
  </div>
);

export default AdminLayout;
