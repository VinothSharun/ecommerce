import { logout } from "../app/auth";

const SellerLayout = ({ children }) => (
  <div>
    <h2>Seller Panel</h2>
    <button onClick={logout}>Logout</button>
    {children}
  </div>
);
export default SellerLayout;
