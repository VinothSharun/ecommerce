import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/common/Sidebar";

const SellerLayout = () => {
  return (
  <div className="layout">
    <div className="panel">
      <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="content" style={{ flex: 1 }}>
          <Outlet />  
        </div>
    </div>
  </div>
);
}
export default SellerLayout;
