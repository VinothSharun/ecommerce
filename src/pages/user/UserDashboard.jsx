const UserDashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">User Dashboard</h1>

      <div className="card-grid">
        <div className="card user">
          <h3>My Orders</h3>
          <p>24</p>
        </div>

        <div className="card user">
          <h3>Wishlist</h3>
          <p>8</p>
        </div>

        <div className="card user">
          <h3>Cart Items</h3>
          <p>3</p>
        </div>

        <div className="card user">
          <h3>Profile Status</h3>
          <p>Active</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
