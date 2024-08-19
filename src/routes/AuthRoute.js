import {useAuthContext} from "../contexts/AuthContext";
import {Navigate, Outlet} from "react-router-dom";
import React from "react";

export const AuthRoute = ({children}) => {
    const {isAuthenticated} = useAuthContext();
    if (isAuthenticated()) {
        return <Navigate to='/' replace />;
    }

    return <>{children}</>;
};