import {Route, Routes} from 'react-router-dom'
import Dashbord from "./pages/Dashbord";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import PrivateRoute from "./pages/PrivateRoute";
import AuthWrapper from "./pages/AuthWrapper";
function App() {
    const {isAuthenticated,user}
        =useAuth0()
  return (
      <>
          <AuthWrapper>
       <Routes>
           <Route path={'/'} element={<PrivateRoute><Dashbord/></PrivateRoute>}></Route>
           <Route path={'/login'} element={<Login/>}></Route>
           <Route path={'*'} element={<Error/>}></Route>
       </Routes>
          </AuthWrapper>
      </>
  );
}

export default App;
