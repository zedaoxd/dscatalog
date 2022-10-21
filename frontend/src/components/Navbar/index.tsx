import './styles.css';
import 'bootstrap/js/src/collapse.js';

import { Link, NavLink } from 'react-router-dom';
import { getTokenData, isAuthenticated, removeAuthData, TokenData } from 'utils/requests';
import { useEffect, useState } from 'react';
import history from 'utils/history';

type AuthData = {
  authenticated: boolean,
  tokenData?: TokenData,
}

export default function Navbar() {

  const [authData, setAuthData] = useState<AuthData>({
    authenticated: false
  });

  useEffect(() => {
    if (isAuthenticated()){
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false,
    });
    history.replace('/');
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>DS Catalog</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">
                CATÁLOGO
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName="active">
                ADMIN
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
            {
              authData.authenticated ? 
              <>
                <span>{authData.tokenData?.user_name}</span>
                <a href='#logout' onClick={handleLogoutClick}>LOGOUT</a>
              </>
              :
              <Link to='/admin/auth/login'>LOGIN</Link>
            }
        </div>

      </div>
    </nav>
  );
}
