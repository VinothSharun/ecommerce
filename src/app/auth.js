export const getUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  return JSON.parse(atob(token.split(".")[1]));
};

export const loginMock = (role) => {
  // fake JWT for testing
  const payload = btoa(JSON.stringify({ role }));
  const token = `x.${payload}.y`;
  localStorage.setItem("token", token);
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
