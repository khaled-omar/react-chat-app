import RegisterForm from "../pages/RegisterForm";
import LoginForm from "../pages/LoginForm";
import ForgetPassword from "../pages/ForgetPassword";
import React from "react";

export const authRoutes = [
    {
        path: "/register",
        element: <RegisterForm/>,
    },
    {
        path: "/login",
        element: <LoginForm/>,
    },
    {
        path: "/forgot-password",
        element: <ForgetPassword/>,
    }
]