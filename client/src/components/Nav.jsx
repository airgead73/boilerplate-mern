import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function PublicNav() {
  return (
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/about">about</Link></li>
    </ul>
  )
}

function MainNav() {
  return (
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/about">about</Link></li>      
      <li><Link to="/dashboard">dashboard</Link></li>
      <li><Link to="/profile">profile</Link></li>
    </ul>
  )
}

function Nav() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <MainNav/> : <PublicNav/>;

}

export default Nav;
