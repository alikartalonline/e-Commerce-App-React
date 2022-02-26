import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute( { children }) {

    const {loggedIn} = useAuth();

  return (
    loggedIn ? children : <Navigate to="/signup" />
  )
}

export default ProtectedRoute