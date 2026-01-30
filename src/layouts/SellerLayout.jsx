import {handleLogout} from "../pages/Logout";

const SellerLayout = ({ children }) => (
  <div>
    <h2>Seller Panel</h2>
    <button onClick={handleLogout}>Logout</button>
    {children}
  </div>
);
export default SellerLayout;
