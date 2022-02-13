import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { DOMAIN, CLIENTID, AUTH0_AUDIENCE } from '../constants';

const Auth0ProviderWithHistory = ({ children }) => {

  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENTID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={AUTH0_AUDIENCE}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;