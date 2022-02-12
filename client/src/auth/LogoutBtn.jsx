import { useAuth0 } from '@auth0/auth0-react';

function LogoutBtn() {

  const { logout } = useAuth0();

  return <button onClick={() => logout({ returnTo: window.location.origin })}>logout</button>
  
}

export default LogoutBtn;