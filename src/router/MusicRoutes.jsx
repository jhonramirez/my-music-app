import { Navigate, Routes, Route } from "react-router-dom";
import { FavoritesPage, Header, HomePage } from "../components";
import "./MusicRoutes.scss"
export const MusicRoutes = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </>
  );
};
