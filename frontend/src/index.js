import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Auth0Provider } from "@auth0/auth0-react";
const config = require('./config.js');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // remember to add audience if you want to use role based authentication. a example config.js file content is as follows:
  // module.exports.port = 'http://localhost:3000';
  // module.exports.auth0token = 'mogkPPyR4baixA7xxxxxxxxx';
  // module.exports.domain = 'dev-aweewawe.us.auth0.com';
  // module.exports.audience = 'http://quickstarts/api'

  <React.StrictMode>
    <Auth0Provider
    domain={config.domain}
    clientId = {config.auth0token}
    audience={config.audience}
    redirectUri={config.port}>
            <App />

    </Auth0Provider>

  </React.StrictMode>


);

