import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import s from './App.module.css';
import routes from 'utils/routes';
import { authHeader } from 'api/contactsApi';
import Loader from './Loader';
import SharedLayout from './SharedLayout';
import Home from 'views/HomeView/HomeView';

const SignUpFormView = lazy(() =>
  import('views/SignUpFormView/SignUpFormView')
);
const LogInFormView = lazy(() => import('views/LogInFormView/LogInFormView'));
const PhoneBookView = lazy(() => import('views/PhonebookView/PhonebookView'));

const { home, signup, login, contacts } = routes;

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.token);
  const isRefreshing = useSelector(authSelectors.isRefreshing);
  const isSigningUp = useSelector(authSelectors.isSigningUp);
  const isLoggingIn = useSelector(authSelectors.isLoggingIn);
  const isLoggingOut = useSelector(authSelectors.isLoggingOut);

  useEffect(() => {
    if (token) {
      authHeader.set(token);
      dispatch(authOperations.current());
    }
  }, [dispatch, token]);

  return (
    <div className={s.container}>
      <div className={s.app}>
        {isRefreshing || isSigningUp || isLoggingIn || isLoggingOut ? (
          <Loader />
        ) : (
          <Routes>
            <Route
              path={home}
              element={
                <PublicRoute>
                  <SharedLayout />
                </PublicRoute>
              }
            >
              <Route
                index
                element={
                  <PublicRoute>
                    <Home />
                  </PublicRoute>
                }
              />
              <Route
                path={contacts}
                element={
                  <PrivateRoute>
                    <PhoneBookView />
                  </PrivateRoute>
                }
              />
              <Route
                path={signup}
                element={
                  <PublicRoute restricted>
                    <SignUpFormView />
                  </PublicRoute>
                }
              />
              <Route
                path={login}
                element={
                  <PublicRoute restricted>
                    <LogInFormView />
                  </PublicRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PublicRoute>
                    <Home />
                  </PublicRoute>
                }
              ></Route>
            </Route>
          </Routes>
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
