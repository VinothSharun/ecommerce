const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="card-grid">
        <div className="card admin">
          <h3>Total Users</h3>
          <p>1,245</p>
        </div>

        <div className="card admin">
          <h3>Total Sellers</h3>
          <p>320</p>
        </div>

        <div className="card admin">
          <h3>Total Orders</h3>
          <p>8,432</p>
        </div>

        <div className="card admin">
          <h3>Revenue</h3>
          <p>$92,450</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
