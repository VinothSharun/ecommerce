if (user.role === "ADMIN") navigate("/admin");
else if (user.role === "SELLER") navigate("/seller");
else navigate("/");