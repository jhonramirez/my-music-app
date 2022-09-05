import { Navigate, Routes, Route } from 'react-router-dom';
import { FavoritesPage, HomePage } from '../pages';
import { Navbar } from '../../ui';

export const MusicRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="favorites" element={<FavoritesPage />} />

                    <Route path="/" element={<Navigate to="/home" />} />
                </Routes>
            </div>
        </>
    )
}
