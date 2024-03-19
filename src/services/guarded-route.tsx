import { Navigate } from 'react-router-dom';

export const ProtectedRoute =  ({ auth, children }: any) => {
    if ( !auth && window.location.pathname != "/login") {
        return <Navigate to="/login" replace />;
    }
    return children;
};