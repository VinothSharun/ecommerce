import {handleLogout} from "../pages/Logout";

const UserLayout = ({ children }) => (
  <div>
    <h2>User Panel</h2>
    <button onClick={handleLogout}>Logout</button>
    {children}
  </div>
);

export default UserLayout;
