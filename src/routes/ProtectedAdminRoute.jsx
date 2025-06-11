import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({children}) => {
  const admin = JSON.parse(localStorage.getItem("ecommerce-token"));
    if (admin.user.email === "ajay@gmail.com") {
        return children;
    } else{
         return  <Navigate  to={'/login'} />
    }
}

export default ProtectedAdminRoute