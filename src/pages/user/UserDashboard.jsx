import TrueWireless from "../../assets/img/TrueWireless.png";
import Mobile from "../../assets/img/Mobile.png";
import MobileCase from "../../assets/img/MobileCase.png";
import BluetoothSpeakers from "../../assets/img/BluetoothSpeakers.png";

const UserDashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Looking for these products?</h1>

      <div className="card-grid">
        <div className="card-grid-container">
          <div className="card user">
            <img src={TrueWireless} alt="True Wireless" />
          </div>
          <h3 className="product-name">True Wireless</h3>
        </div>

        <div className="card-grid-container">
          <div className="card user">
            <img src={Mobile} alt="Mobile" />
          </div>
          <h3 className="product-name">Mobile</h3>
        </div>

        <div className="card-grid-container">
          <div className="card user">
            <img src={MobileCase} alt="Mobile Case" />
          </div>
          <h3 className="product-name">Mobile Case</h3>
        </div>

        <div className="card-grid-container">
          <div className="card user">
            <img src={BluetoothSpeakers} alt="Bluetooth Speakers" />
          </div>
          <h3 className="product-name">Bluetooth Speakers</h3>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
