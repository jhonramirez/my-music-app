import { useEffect, useState } from "react";
import { getTokenURL } from "../services";

export const useCheckAuth = () => {
  const hast = getTokenURL();
  const _token = hast.access_token;
  const [authenticated, setAuthenticated] = useState(null);
  useEffect(() => {
    if (_token) {
      sessionStorage.setItem("token", _token);
      setAuthenticated(true);
    }
  }, [_token]);

  return authenticated;
};
