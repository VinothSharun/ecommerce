import api from "../app/api";

export const login = async (email, password) => {
  const response = await api.post(
    "/api/v1/auth/login",
    `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    }
  );

  const { access_token, role } = response.data;

  const user = { role };

  localStorage.setItem("token", access_token);
  localStorage.setItem("user", JSON.stringify(user));

  return user;
};

export const logoutApi = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
