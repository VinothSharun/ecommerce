import { ShoppingCart, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";

const UserLayout = ({ children }) => (
  <div className="layout">
    <div className="panel-user">
      <div className="navbar">
      <div className="header-user">
        <h1>Navbar</h1>
        </div>
      <input className="product-search-input-user" placeholder="Search by product name..." type="text" value="" />
        <div className="logo-container">
          <ShoppingCart className="logo-icon" size={30} color="#ffffff" />
          <Heart className="wishlist-icon" size={30} color="#ffffff" />
          <div className="profile-icon"></div>
        </div>
    </div>
    <div className="subnav-menu">
      <div className="subnav-container">
          <div className="subnav-content">
              <div className="subnav-links">
                  <span>
                      <NavLink to="/mobile" aria-current="page" className={({ isActive }) => isActive ? "active" : ""}>Mobile</NavLink>
                  </span>
                  <span>
                      <NavLink to="/appliances" className={({ isActive }) => isActive ? "active" : ""}>Appliances</NavLink>
                  </span>
                  <span>
                      <NavLink to="/furnitures" className={({ isActive }) => isActive ? "active" : ""}>Furnitures</NavLink>
                  </span>
                  <span>
                      <NavLink to="/grocery" className={({ isActive }) => isActive ? "active" : ""}>Grocery</NavLink>
                  </span>
              </div>
          </div>
      </div>
  </div>
    </div>
    {children}
  </div>
);
export default UserLayout;
