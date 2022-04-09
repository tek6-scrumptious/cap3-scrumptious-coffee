import React from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import AdminProductView from '../adminDashboard/AdminProductView';
const ProtectedRoute2 = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    let location = useLocation();
    return isAuthenticated==="true" ?
        <AdminProductView />
        : <Navigate to="/error" state={{ from: location }} />;
}
export default ProtectedRoute2;