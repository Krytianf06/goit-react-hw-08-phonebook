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
        <h1 className={s.title}>Phonebook &#128214;</h1>
        {isLoggedIn && (
          <p className={s.user}>
            <span className={s.userName}>{userName}</span>
          </p>
        )}
        <p className={s.greeting}>Welcome to the GoIT online phone book</p>
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

        <h1 className={s.text}> Add, Filter, Delete your personal contacts</h1>
        
      </div>
    </main>
  );
};

export default Home;
