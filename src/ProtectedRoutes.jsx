import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/reg" }) => {

    const access = window.localStorage.getItem('access');

    if (!access) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />
}