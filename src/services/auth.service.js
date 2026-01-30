export const login = async (email, password) => {
  // fake users
  const users = [
    { email: "admin@gmail.com", password: "admin123", role: "ADMIN" },
    { email: "seller@gmail.com", password: "seller123", role: "SELLER" },
    { email: "user@gmail.com", password: "user123", role: "USER" },
  ];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // simulate API delay
  return new Promise((resolve) =>
    setTimeout(() => resolve(user), 500)
  );
};
