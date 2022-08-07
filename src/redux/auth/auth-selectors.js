export const auth = state => state.auth;
export const user = state => state.auth.user;
export const userName = state => state.auth.user.name;
export const userEmail = state => state.auth.user.email;
export const token = state => state.auth.token;
export const isLoggedIn = state => state.auth.isLoggedIn;
export const isRefreshing = state => state.auth.isRefreshing;
export const isSigningUp = state => state.auth.isSigningUp;
export const isLoggingIn = state => state.auth.isLoggingIn;
export const isLoggingOut = state => state.auth.isLoggingOut;

const authSelectors = {
  auth,
  user,
  token,
  isLoggedIn,
  isRefreshing,
  userName,
  userEmail,
  isSigningUp,
  isLoggingIn,
  isLoggingOut,
};
export default authSelectors;
