import React from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import AdminAddProduct from '../adminDashboard/AdminAddProduct';
const ProtectedRoute3 = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    let location = useLocation();
    return isAuthenticated==="true" ?
        <AdminAddProduct />
        : <Navigate to="/error" state={{ from: location }} />;
}
export default ProtectedRoute3;