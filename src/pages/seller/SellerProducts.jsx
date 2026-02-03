import { useState, useEffect } from "react";
import { addProduct, getMyProducts, deleteProduct, editProduct, updateStock } from "../../services/product.service";

const initialForm = {
    name: "",
    description: "",
    price: "",
    stock: ""
};

const SellerProducts = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editId, setEditId] = useState(null);
    const [stockEditId, setStockEditId] = useState(null);
    const [stockValue, setStockValue] = useState("");
    const [stockError, setStockError] = useState("");
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const data = await getMyProducts();
            setProducts(Array.isArray(data) ? data : []);
        } catch {
            setProducts([]);
        }
        setLoading(false);
    };

    const openModal = (product = null) => {
        setModalOpen(true);
        setError("");
        setSuccess("");
        if (product) {
            setForm({
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock
            });
            setEditId(product.id);
        } else {
            setForm(initialForm);
            setEditId(null);
        }
    };
    const closeModal = () => {
        setModalOpen(false);
        setEditId(null);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        if (!form.name || !form.description || !form.price || !form.stock) {
            setError("All fields are required.");
            return;
        }
        try {
            if (editId) {
                await editProduct(editId, {
                    name: form.name,
                    description: form.description,
                    price: Number(form.price),
                    stock: Number(form.stock)
                });
                setSuccess("Product updated successfully!");
            } else {
                await addProduct({
                    name: form.name,
                    description: form.description,
                    price: Number(form.price),
                    stock: Number(form.stock)
                });
                setSuccess("Product added successfully!");
            }
            fetchProducts();
            setForm(initialForm);
            setTimeout(closeModal, 1200);
        } catch (err) {
            setError(err.response?.data?.message || (editId ? "Failed to update product." : "Failed to add product."));
        }
    };

    return (
        <div className="addSeller-container">
            <div className="addSeller-header-btn-row">
                <h2 className="addSeller-header">My Products</h2>
                <button className="addSeller-btn" onClick={openModal}>Add Product</button>
            </div>
            <div className="seller-list-section">
                {loading ? (
                    <p>Loading products...</p>
                ) : products.length === 0 ? (
                    <p>No products found.</p>
                ) : (
                    <table className="seller-list-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, idx) => (
                                <tr key={product.id || idx}>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        {stockEditId === product.id ? (
                                            <form
                                                style={{ display: "inline-flex", alignItems: "center" }}
                                                onSubmit={async (e) => {
                                                    e.preventDefault();
                                                    setStockError("");
                                                    try {
                                                        await updateStock(product.id, Number(stockValue));
                                                        setStockEditId(null);
                                                        fetchProducts();
                                                    } catch (err) {
                                                        setStockError("Failed to update stock.");
                                                    }
                                                }}
                                            >
                                                <input
                                                    type="number"
                                                    value={stockValue}
                                                    onChange={e => setStockValue(e.target.value)}
                                                    style={{ width: 60, marginRight: 4 }}
                                                    min="0"
                                                />
                                                <button type="submit" style={{ marginRight: 4 }}>Save</button>
                                                <button type="button" onClick={() => setStockEditId(null)}>Cancel</button>
                                            </form>
                                        ) : (
                                            <>
                                                {product.stock}
                                                <button
                                                    style={{ marginLeft: 8 }}
                                                    onClick={() => {
                                                        setStockEditId(product.id);
                                                        setStockValue(product.stock);
                                                        setStockError("");
                                                    }}
                                                >Edit Stock</button>
                                                {stockError && <span style={{ color: "red", marginLeft: 8 }}>{stockError}</span>}
                                            </>
                                        )}
                                    </td>
                                    <td className="action-btn">
                                        <button
                                            className="edit-product-btn"
                                            onClick={() => openModal(product)}
                                        >Edit</button>
                                        <button
                                            className="delete-seller-btn"
                                            onClick={async () => {
                                                if (window.confirm(`Delete product ${product.name}?`)) {
                                                    try {
                                                        await deleteProduct(product.id);
                                                        fetchProducts();
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
            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <form className="addSeller-card" onSubmit={handleSubmit}>
                            <h3>{editId ? "Edit Product" : "Add New Product"}</h3>
                            {error && <p className="addSeller-error">{error}</p>}
                            {success && <p className="addSeller-success">{success}</p>}
                            <input
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={form.description}
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={form.price}
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                name="stock"
                                placeholder="Stock"
                                value={form.stock}
                                onChange={handleChange}
                            />
                            <button type="submit">{editId ? "Update Product" : "Add Product"}</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SellerProducts;
