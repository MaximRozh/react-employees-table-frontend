import jwtDecode, { JwtPayload } from "jwt-decode";

type customJwtPayload = JwtPayload & { exp: string };

export const isValidToken = (token: string | null) => {
  if (typeof token !== "string") return;
  const decoded = jwtDecode<customJwtPayload>(token || "");
  const timeToExpire = decoded.exp * 1000 - Date.now();
  return timeToExpire >= 0;
};
