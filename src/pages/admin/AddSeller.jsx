import { useState, useEffect } from "react";
import { addSeller, getSellers, deleteSeller } from "../../services/seller.service";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  password: ""
};


const AddSeller = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSellers();
  }, []);

  const fetchSellers = async () => {
    setLoading(true);
    try {
      const data = await getSellers();
      setSellers(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Failed to fetch sellers.");
    }
    setLoading(false);
  };

  const openModal = () => {
    setModalOpen(true);
    setError("");
    setSuccess("");
    setForm(initialForm);
  };
  const closeModal = () => setModalOpen(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.name || !form.email || !form.phone || !form.password) {
      setError("All fields are required.");
      return;
    }
    try {
      await addSeller(form);
      setSuccess("Seller added successfully!");
      setForm(initialForm);
      fetchSellers();
      setTimeout(closeModal, 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add seller.");
    }
  };

  return (
    <div className="addSeller-container">
      <div className="addSeller-header-btn-row">
        <h2 className="addSeller-header">Added Sellers</h2>
        <button className="addSeller-btn" onClick={openModal}>Add Seller</button>
      </div>
      <div className="seller-list-section">
        {/* <h3 className="seller-list-title">Added Sellers</h3> */}
        {loading ? (
          <p>Loading sellers...</p>
        ) : sellers.length === 0 ? (
          <p>No sellers found.</p>
        ) : (
          <table className="seller-list-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, idx) => (
                <tr key={seller.id || idx}>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>{seller.phone}</td>
                  <td>
                    <button
                      className="delete-seller-btn"
                      onClick={async () => {
                        if (window.confirm(`Delete seller ${seller.name}?`)) {
                          try {
                            await deleteSeller(seller.id);
                            fetchSellers();
                          } catch (err) {
                            alert("Failed to delete seller.");
                          }
                        }
                      }}
                    >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <form className="addSeller-card" onSubmit={handleSubmit}>
              <h3>Add New Seller</h3>
              {error && <p className="addSeller-error">{error}</p>}
              {success && <p className="addSeller-success">{success}</p>}
              <input
                type="text"
                name="name"
                placeholder="Seller Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              <button type="submit">Add Seller</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddSeller;