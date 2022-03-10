import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token=window.localStorage.getItem('Token value: ')


  return token ? <Outlet /> : <Navigate to="/unauth_page" />
};
export default ProtectedRoutes