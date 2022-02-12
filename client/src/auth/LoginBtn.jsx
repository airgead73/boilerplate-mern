import { useAuth0 } from '@auth0/auth0-react';

function LoginBtn() {

  const { loginWithRedirect} = useAuth0();

  return <button onClick={() => loginWithRedirect()}>login</button>
  
}

export default LoginBtn;
