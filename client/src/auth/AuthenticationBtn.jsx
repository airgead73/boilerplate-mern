import { useAuth0 } from '@auth0/auth0-react';
import { LoginBtn } from '.';
import { LogoutBtn } from '.';

function AuthenticationBtn() {

  const { isAuthenticated } = useAuth0();

  if(isAuthenticated) {
    return <LogoutBtn/>
  } else {
    return <LoginBtn/>
  }

}

export default AuthenticationBtn;
