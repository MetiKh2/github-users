import React from 'react';
import useStyle from "./style";
import loginImg from '../../images/login-img.20a90984.svg'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
const Login = () => {
    const {isAuthenticated,logout,user,isLoading,loginWithRedirect}
        =useAuth0()
    const classes=useStyle()
    return (
        <section className={classes.root}>
            <img src={loginImg} width={'350'} height={'350'}/>
            <h1 className={classes.loginTitle}>GitHub User</h1>
            <Button onClick={loginWithRedirect} variant={'contained'}>Login / Signup</Button>

        </section>
    );
};

export default Login;