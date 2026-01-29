import { useNavigate } from "react-router-dom";
import { loginMock } from "../app/auth";

const Login = () => {
  const navigate = useNavigate();

  const login = (role) => {
    loginMock(role);
    if (role === "ADMIN") navigate("/admin");
    if (role === "SELLER") navigate("/seller");
    if (role === "USER") navigate("/");
  };

  return (
    <div>
      <h2>Login (Mock)</h2>
      <button onClick={() => login("ADMIN")}>Admin</button>
      <button onClick={() => login("SELLER")}>Seller</button>
      <button onClick={() => login("USER")}>User</button>
    </div>
  );
};

export default Login;
