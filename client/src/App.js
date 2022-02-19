import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';
import { AuthenticationBtn } from './auth';
import { DOMAIN, CLIENTID, URL_SERVER, URL_STORE } from './constants';
// pages
import {
  Home,
  About,
  Dashboard,
  Goals,
  PageNotFound,
  Products,
  Profile
} from './pages';

// components
import {
  Nav
} from './components';
import ProtectedRoutes from './auth/ProtectedRoutes';

function App() {   

  console.log({
    domain: DOMAIN,
    id: CLIENTID,
    server: URL_SERVER,
    store: URL_STORE
  })

  const {
    isLoading,
    error
  } = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>oops... {error.message}</div>
  }

  return (
    <div>
      <h1>Library App</h1>
      <AuthenticationBtn/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/goals" element={<Goals/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/products" element={<Products/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  )

}

export default App;

