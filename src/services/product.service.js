// Update only the stock of a product
export const updateStock = async (productId, stock) => {
  const token = localStorage.getItem("token");
  const response = await api.patch(`/api/v1/products/${productId}/stock`, { stock }, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return response.data;
};
export const getMyProducts = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/api/v1/products/my-products", {
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return response.data;
};
export const addProduct = async (product) => {
  const token = localStorage.getItem("token");
  const response = await api.post(
    "/api/v1/products",
    product,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  );
  return response.data;
};
export const deleteProduct = async (productId) => {
  const token = localStorage.getItem("token");
  // Use the seller's delete endpoint as per screenshot
  const response = await api.delete(`/api/v1/products/${productId}`, {
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return response.data;
};

export const editProduct = async (productId, product) => {
  const token = localStorage.getItem("token");
  // Use PUT for editing as PATCH is not allowed (405 error)
  const response = await api.put(`/api/v1/products/${productId}`, product, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return response.data;
};
import api from "../app/api";

export const getProducts = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/api/v1/admin/products", {
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return response.data;
};
