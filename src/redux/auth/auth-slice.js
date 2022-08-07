import { createSlice } from '@reduxjs/toolkit';

import authOperations from './auth-operations';
import { authHeader } from 'api/contactsApi';

const initialState = {
  user: { email: null, name: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isSigningUp: false,
  isLoggingIn: false,
  isLoggingOut: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signup.pending]: state => {
      state.isSigningUp = true;
    },
    [authOperations.signup.fulfilled]: (state, action) => {
      state.isSigningUp = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      authHeader.set(state.token);
    },
    [authOperations.signup.rejected]: state => {
      state.isSigningUp = false;
    },

    [authOperations.login.pending]: state => {
      state.isLoggingIn = true;
    },
    [authOperations.login.fulfilled]: (state, action) => {
      state.isLoggingIn = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      authHeader.set(state.token);
    },
    [authOperations.login.rejected]: (state, action) => {
      state.isLoggingIn = false;
    },

    [authOperations.logout.pending]: state => {
      state.isLoggingOut = true;
    },
    [authOperations.logout.fulfilled]: state => {
      state.isLoggingOut = false;
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
      authHeader.unset();
    },
    [authOperations.logout.rejected]: state => {
      state.isLoggingOut = false;
    },

    [authOperations.current.pending]: state => {
      state.isRefreshing = true;
    },
    [authOperations.current.fulfilled]: (state, action) => {
      state.isRefreshing = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [authOperations.current.rejected]: state => {
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
