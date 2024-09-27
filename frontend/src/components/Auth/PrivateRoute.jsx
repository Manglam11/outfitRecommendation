// components/Auth/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth(); // Get user info from AuthContext

    if (!user) {
        // If the user is not logged in, redirect them to the login page
        return <Navigate to="/login" />;
    }

    // If user is logged in, render the child component (e.g., WeatherCard)
    return children;
};

export default PrivateRoute;
