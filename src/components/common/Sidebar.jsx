import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../pages/Logout";
import { getUser } from "../../app/auth";

// Sidebar config
export const adminMenuItems = [
  { label: "Dashboard", path: "/dashboard" },
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
  const navigate = useNavigate();
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
    <div>
      {menuItems.map(({ label, path }) => (
        <p
          key={label}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(path)}
        >
          {label}
        </p>
      ))}
      <p className="logout-btn" onClick={handleLogout}>
        Logout
      </p>
    </div>
  );
};
