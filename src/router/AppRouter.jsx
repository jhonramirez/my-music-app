import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../components";
import { useCheckAuth } from "../hooks";
import { MusicRoutes } from "./";

export const AppRouter = () => {
  useCheckAuth();
  const authenticated = sessionStorage.getItem("token");

  return (
    <>
      <Routes>
        {authenticated ? (
          <Route path="/*" element={<MusicRoutes />} />
        ) : (
          <Route path="login" element={<LoginPage />} />
        )}
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
