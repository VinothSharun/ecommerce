import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../services/product.service";
import { getSellers } from "../../services/seller.service";


const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sellerFilter, setSellerFilter] = useState("");
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchSellers();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getProducts();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Failed to fetch products.");
    }
    setLoading(false);
  };

  const fetchSellers = async () => {
    try {
      const data = await getSellers();
      setSellers(Array.isArray(data) ? data : []);
    } catch {}
  };

  // Get unique seller IDs for filter dropdown, map to names
  const sellerIdNameMap = {};
  sellers.forEach(s => { sellerIdNameMap[s.id] = s.name; });
  const sellerIds = Array.from(new Set(products.map(p => p.seller_id)));

  // Filter and search logic
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesSeller = sellerFilter ? product.seller_id === Number(sellerFilter) : true;
    return matchesSearch && matchesSeller;
  });

  return (
    <div className="product-list-container">
      <div className="product-list-header-row">
        <h2 className="user-list-header">Products List</h2>
      </div>
      <div className="product-list-controls">
        <input
          className="product-search-input"
          type="text"
          placeholder="Search by product name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="product-seller-filter"
          value={sellerFilter}
          onChange={e => setSellerFilter(e.target.value)}
        >
          <option value="">All Sellers</option>
          {sellerIds.map(id => (
            <option key={id} value={id}>{sellerIdNameMap[id] || `Seller ${id}`}</option>
          ))}
        </select>
        <span className="product-count">Total: {filteredProducts.length}</span>
      </div>
      <div className="user-list-section">
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="addSeller-error">{error}</p>
        ) : filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <table className="seller-list-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>ID</th>
                <th>Seller ID</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, idx) => (
                <tr key={product.id || idx}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.id}</td>
                  <td>{product.seller_id}</td>
                  <td>{product.description}</td>
                  <td>
                    <button
                      className="delete-seller-btn"
                      onClick={async () => {
                        if (window.confirm(`Delete product ${product.name}?`)) {
                          try {
                            await deleteProduct(product.id);
                            // Remove from UI
                            setProducts(prev => prev.filter(p => p.id !== product.id));
                          } catch (err) {
                            alert("Failed to delete product.");
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
    </div>
  );
};

export default ViewProducts;
