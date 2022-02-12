import { Outlet, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function ProtectedRoutes() {

  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return isAuthenticated ? <Outlet/> : loginWithRedirect()
}

export default ProtectedRoutes;
