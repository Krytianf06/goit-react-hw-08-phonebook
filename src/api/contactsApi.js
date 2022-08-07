import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const authHeader = {
  set: token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

const usersMidpoint = 'users';
const usersSignupEndpoint = `/${usersMidpoint}/signup`;
const usersLoginEndpoint = `/${usersMidpoint}/login`;
const usersLogoutEndpoint = `/${usersMidpoint}/logout`;
const usersCurrentEndpoint = `/${usersMidpoint}/current`;
const contactsEndpoint = '/contacts';

export const sendSignupCredentialsQuery = async credentials =>
  await axios.post(usersSignupEndpoint, credentials);

export const sendLoginCredentialsQuery = async credentials =>
  await axios.post(usersLoginEndpoint, credentials);

export const sendLogoutQuery = async () =>
  await axios.post(usersLogoutEndpoint);

export const getCurrentUserQuery = async () =>
  await axios.get(usersCurrentEndpoint);

export const getAllContactsQuery = async () =>
  await axios.get(contactsEndpoint);

export const postContactQuery = async contact =>
  await axios.post(contactsEndpoint, contact);

export const deleteContactQuery = async id =>
  await axios.delete(`${contactsEndpoint}/${id}`);

export const patchContactQuery = async (id, contact) =>
  await axios.patch(`${contactsEndpoint}/${id}`, contact);
