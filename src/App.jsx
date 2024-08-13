import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'material-react-toastify/dist/ReactToastify.css'

import LoginForm from './pages/LoginForm'
import React from 'react'
import {useCookies} from 'react-cookie'
import Layout from './pages/Layout'
import Profile from './pages/Profile'
import RegisterForm from './pages/RegisterForm'
import router from "./routes/router";
import {RouterProvider} from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
    const [cookies] = useCookies(['access_token', 'refresh_token'])
    return (
        <Layout>
            <RouterProvider router={router}/>
        </Layout>
    )
}

export default App
