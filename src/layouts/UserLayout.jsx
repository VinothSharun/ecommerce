import { logout } from "../app/auth";

const UserLayout = ({ children }) => (
  <div>
    <h2>User Panel</h2>
    <button onClick={logout}>Logout</button>
    {children}
  </div>
);

export default UserLayout;
