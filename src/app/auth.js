import { createContext } from "react";

export const AuthContext = createContext(null);


export const getUser = () => {
  try {
    const user = localStorage.getItem("user");
    if (!user) return null;
    return JSON.parse(user);
  } catch (error) {
    console.error("Invalid user in localStorage", error);
    localStorage.removeItem("user");
    return null;
  }
};
export const logout = () => {
  localStorage.removeItem("user");
};