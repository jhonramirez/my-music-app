import { AuthProvider } from "./auth";
import { AppRouter } from './router/AppRouter';

export const MymusicApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
