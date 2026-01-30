import {handleLogout} from "../pages/Logout";


const AdminLayout = ({children}) => {

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={handleLogout}>Logout</button>
      {children}
    </div>
  );
};

export default AdminLayout;


