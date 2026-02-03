export const blockUser = async (userId) => {
  const token = localStorage.getItem("token");
  const response = await api.put(
    `/api/v1/admin/users/${userId}/block`,
    {},
    {
      headers: {
        Accept: "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  );
  return response.data;
};
export const unblockUser = async (userId) => {
  const token = localStorage.getItem("token");
  const response = await api.put(
    `/api/v1/admin/users/${userId}/unblock`,
    {},
    {
      headers: {
        Accept: "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  );
  return response.data;
};
import api from "../app/api";

export const getUsers = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/api/v1/admin/users", {
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return response.data;
};
