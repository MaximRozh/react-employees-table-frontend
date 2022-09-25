import jwtDecode from "jwt-decode";

export const isValidToken = (token: string | null) => {
  if (typeof token !== "string") return;
  const decoded = jwtDecode(token) as any;
  const timeToExpire = decoded.exp * 1000 - Date.now();
  return timeToExpire >= 0;
};
