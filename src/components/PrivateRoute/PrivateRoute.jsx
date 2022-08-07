import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import routes from 'utils/routes';

export const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(authSelectors.isLoggedIn);
  if (!isLogged) {
    return <Navigate to={routes.home} />;
  }
  return children;
};
