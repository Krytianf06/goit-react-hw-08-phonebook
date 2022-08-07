import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import s from './LogInForm.module.css';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const credentials = { email, password };
    dispatch(authOperations.login(credentials));
    reset();
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h1 className={s.title}>Authorization</h1>
      <ul className={s.list}>
        <li className={s.item}>
          <label htmlFor="email" className={s.label}>
            Email &#128387;
          </label>
          <input
            type="email"
            id="email"
            name="password"
            value={email}
            onChange={handleEmailChange}
            className={s.input}
            required
          />
        </li>
        <li className={s.item}>
          <label htmlFor="password" className={s.label}>
            Password &#128273;
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className={s.input}
            required
          />
        </li>
      </ul>
      <button type="submit" className={s.button}>
        Log In
      </button>
    </form>
  );
};

export default LogInForm;
