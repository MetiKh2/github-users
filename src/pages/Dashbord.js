import React, {useContext} from 'react';
import Info from "../components/Info";
import User from "../components/User";
import Repos from "../components/Repos";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import {GitHubContext} from "../context/Context";
import Loading from "../components/Loading";

const Dashbord = () => {
    const {loading}=useContext(GitHubContext)
    if(loading){
        return (
            <>
                <Navbar/>
                <Search/>
                <Loading/>
            </>
        );
    }
    return (
        <>
            <Navbar/>
            <Search/>
            <Info/>
            <User/>
            <Repos/>
        </>
    );
};

export default Dashbord;