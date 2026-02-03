import { createContext } from "react";

export const AuthContext = createContext(null);


export const getUser = () => {
  try {
    const user = localStorage.getItem("user");
    if (!user) return null;
    return JSON.parse(user);
  } catch {
    localStorage.removeItem("user");
    return null;
  }
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};