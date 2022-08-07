import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  sendSignupCredentialsQuery,
  sendLoginCredentialsQuery,
  sendLogoutQuery,
  getCurrentUserQuery,
} from '../../api/contactsApi';

export const signup = createAsyncThunk('auth/signup', async credentials => {
  try {
    const { data } = await sendSignupCredentialsQuery(credentials);
    return data;
  } catch (error) {
    console.error('Sign Up Error: ', error);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await sendLoginCredentialsQuery(credentials);
    return data;
  } catch (error) {
    console.error('Log In Error: ', error);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await sendLogoutQuery();
  } catch (error) {
    console.error('Log Out Error: ', error);
  }
});

export const current = createAsyncThunk('auth/current', async () => {
  try {
    const { data } = await getCurrentUserQuery();
    return data;
  } catch (error) {
    console.error('Refresh Error', error);
  }
});

const authOperations = { signup, login, logout, current };
export default authOperations;
