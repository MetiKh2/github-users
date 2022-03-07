import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {Navigate} from "react-router";

function PrivateRoute({ children }) {
    const {isAuthenticated,user,isLoading}
        =useAuth0()
    console.log({isAuthenticated,user,isLoading})
    const isUser=isAuthenticated&&user
    return isUser ? children : <Navigate to="/login" />;
}

export default PrivateRoute;