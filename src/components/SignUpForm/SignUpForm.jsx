import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import authOperations from 'redux/auth/auth-operations';

import s from './SignUpForm.module.css';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (password.length < 7) {
      toast.error('Password must be 7 characters at least');
      return;
    }
    const credentials = { name, email, password };
    dispatch(authOperations.signup(credentials));
    reset();
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h1 className={s.title}>Registration</h1>
      <ul className={s.list}>
        <li className={s.item}>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="password"
            value={name}
            onChange={handleNameChange}
            className={s.input}
            required
          />
        </li>
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
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
