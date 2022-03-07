import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GithubProvider} from "./context/Context";
import {Auth0Provider} from "@auth0/auth0-react";
//dev-1twy4v4x.us.auth0.com
//khUhx4dR1fx7pUGfsO5I2uFezTVQxljD
ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider redirectUri={window.location.origin} domain={'dev-1twy4v4x.us.auth0.com'}  clientId={'khUhx4dR1fx7pUGfsO5I2uFezTVQxljD'}>
      <GithubProvider>
        <BrowserRouter>
           <App />
        </BrowserRouter>
      </GithubProvider>
      </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

