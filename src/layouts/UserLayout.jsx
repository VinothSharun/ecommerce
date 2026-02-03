import {handleLogout} from "../pages/Logout";

const UserLayout = ({ children }) => (
  <div className="layout">
    <div className="panel">
      <h1 className="header user">User Panel</h1>
    </div>
    {children}
  </div>
);
export default UserLayout;
