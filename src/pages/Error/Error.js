import React from 'react';
import useStyle from "./style";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const Error = () => {
    const classes=useStyle()
    return (
        <section className={classes.root}>
            <h1 className={classes.errorTitle}>404</h1>
            <p className={classes.errorInfo}>sorry, the page you tried cannot be found</p>
            <Button variant={'contained'}><Link style={{color:'#fff'}} to={'/'}>Back To Home</Link></Button>
        </section>
    );
};

export default Error;