import { NavLink } from "react-router-dom";
import { handleLogout } from "../../pages/Logout";
import { getUser } from "../../app/auth";

// Sidebar config
export const adminMenuItems = [
  { label: "Dashboard", path: "/admin" },
  { label: "Profile", path: "/profile" },
  { label: "Sellers", path: "/admin/add-seller" },
  { label: "Products", path: "/admin/products" },
  { label: "Users", path: "/admin/users" },
];

export const sellerMenuItems = [
  { label: "Dashboard", path: "/seller" },
  { label: "Profile", path: "/profile" },
  { label: "My Products", path: "/seller/products" },
  { label: "Orders", path: "/seller/orders" },
];

export const Sidebar = () => {
  const user = getUser();

  let menuItems = [];
  if (user?.role === "ADMIN") menuItems = adminMenuItems;
  else if (user?.role === "SELLER") menuItems = sellerMenuItems;
  else menuItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/profile" },
    { label: "Orders", path: "/user/orders" },
  ];

  return (
    <div className="sidebar">
      {menuItems.map(({ label, path }) => (
        <NavLink
          key={label}
          to={path}
          end
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          {label}
        </NavLink>
      ))}
      <p className="logout-btn" onClick={handleLogout}>
        Logout
      </p>
    </div>
  );
};
