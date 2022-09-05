import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth';
import { MusicRoutes } from '../music';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>} />
                <Route path="/*" element={
                    <PrivateRoute>
                        <MusicRoutes />
                    </PrivateRoute>} />
            </Routes>
        </>
    )
}
