const SellerDashboard = () => {
  return (
    <div className="dashboard">
      
      <div className="card-container">
      <div className="card-grid">
        <div className="card seller">
          <h3>My Products</h3>
          <p>56</p>
        </div>

        <div className="card seller">
          <h3>Orders</h3>
          <p>312</p>
        </div>

        <div className="card seller">
          <h3>Earnings</h3>
          <p>$12,480</p>
        </div>

        <div className="card seller">
          <h3>Pending Shipments</h3>
          <p>18</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
