import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import routes from 'utils/routes';

const Navbar = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.elem}>
          <NavLink to={routes.home} className={s.link}>
            Home &#127968;
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={s.elem}>
            <NavLink to={`/${routes.contacts}`} className={s.link}>
              Contacts &#128214;
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li className={s.elem}>
            <NavLink to={`/${routes.signup}`} className={s.link}>
              Sign Up
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li className={s.elem}>
            <NavLink to={`/${routes.login}`} className={s.link}>
              Log In
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
