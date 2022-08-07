import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const userEmail = useSelector(authSelectors.userEmail);
  const dispatch = useDispatch();
  return (
    <div className={s.menu}>
      <p className={s.email}>{userEmail}</p>
      <button
        className={s.logout}
        onClick={() => dispatch(authOperations.logout())}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
