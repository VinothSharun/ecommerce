import { useContext } from "react";
import { AuthContext } from "../app/auth";

export const useAuth = () => useContext(AuthContext);
