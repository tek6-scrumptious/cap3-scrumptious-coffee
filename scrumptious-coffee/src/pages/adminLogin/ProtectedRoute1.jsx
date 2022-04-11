import React from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import AdminDashboard from '../adminDashboard/AdminDashboard';
const ProtectedRoute1 = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    let location = useLocation();
    return isAuthenticated==="true" ?
        <AdminDashboard />
        : <Navigate to="/error" state={{ from: location }} />;
}
export default ProtectedRoute1;