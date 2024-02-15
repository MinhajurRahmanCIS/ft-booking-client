import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <>Loading</>
    };
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;