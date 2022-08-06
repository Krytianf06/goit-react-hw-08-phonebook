import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import routes from 'utils/routes';
import s from './HomeView.module.css';

const { signup, login, contacts } = routes;

const Home = () => {
  const userName = useSelector(authSelectors.userName);
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return (
    <main className={s.view}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <p className={s.version}>4.0</p>
        {isLoggedIn && (
          <p className={s.user}>
            <span className={s.userName}>{userName}</span>
          </p>
        )}
        <p className={s.greeting}>Welcome to the Phonebook app!</p>
        {isLoggedIn && (
          <p className={s.manual}>
            Now you can continue on{' '}
            <Link to={`/${contacts}`} className={s.link}>
              Contacts
            </Link>{' '}
            Page
          </p>
        )}
        {!isLoggedIn && (
          <p className={s.manual}>
            To start you have to{' '}
            <Link to={`/${signup}`} className={s.link}>
              Sign Up
            </Link>{' '}
            or{' '}
            <Link to={`/${login}`} className={s.link}>
              Log In
            </Link>
          </p>
        )}
        {isLoggedIn ? (
          <p className={s.manual}>You are able to</p>
        ) : (
          <p className={s.manual}>Then you can:</p>
        )}

        <ul className={s.list}>
          <li className={s.elem}>
            <span className={s.text}>Add Your Contacts to the Phonebook!</span>
          </li>
          <li className={s.elem}>
            <span className={s.text}>
              Delete Your Contacts from the Phonebook!
            </span>
          </li>
          <li className={s.elem}>
            <span className={s.text}>
              Filter Your Contacts in the Phonebook!
            </span>
          </li>
          {/* <li className={s.elem}>
            <span className={s.text}>
              Change Your Contacts in the Phonebook!
            </span>
          </li> */}
        </ul>
      </div>
    </main>
  );
};

export default Home;
