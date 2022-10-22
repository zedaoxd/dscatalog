import { Redirect, Route } from 'react-router-dom';
import { hasAnyRoles, isAuthenticated, Role } from 'utils/auth';

type Props = {
  children: React.ReactNode;
  path: string;
  roles?: Role[];
};

const PrivateRoute = ({ children, path, roles = [] }: Props) => {
  return (
    <Route
      path={path}
      render={({location}) =>

        !isAuthenticated() ? (
          <Redirect 
            to={{
              pathname: "/admin/auth/login",
              state: { from: location }
            }} 
          />
        ) : !hasAnyRoles(roles) ? (
          <Redirect 
            to={{
              pathname: "/forbidden",
              state: { from: location },
            }} 
          />
          // <Redirect to="/admin/products" />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

export default PrivateRoute;
