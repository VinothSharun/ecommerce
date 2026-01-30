import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { AuthContext } from "./app/auth";
import { getUser } from "./app/auth";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AppRoutes />
    </AuthContext.Provider>
  );
}

export default App;
