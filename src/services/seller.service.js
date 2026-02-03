export const deleteSeller = async (sellerId) => {
  const token = localStorage.getItem("token");
  const response = await api.delete(`/api/v1/admin/seller/${sellerId}`, {
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return response.data;
};
import api from "../app/api";


export const addSeller = async (seller) => {
  // Get token from localStorage (as in your curl example)
  const token = localStorage.getItem("token");
  const response = await api.post(
    "/api/v1/admin/seller",
    seller,
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

export const getSellers = async () => {
  const response = await api.get("/api/v1/admin/sellers");
  return response.data;
};
