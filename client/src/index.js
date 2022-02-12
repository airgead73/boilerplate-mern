import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/Auth0-provider-with-history';
import './index.scss';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <App/>  
      </Auth0ProviderWithHistory>
    </Router>      
  </React.StrictMode>,
  document.getElementById('root')
)