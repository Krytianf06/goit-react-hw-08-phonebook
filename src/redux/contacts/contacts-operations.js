import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getAllContactsQuery,
  postContactQuery,
  deleteContactQuery,
  patchContactQuery,
} from '../../api/contactsApi';

export const getAllContacts = createAsyncThunk('contacts/get/all', async () => {
  try {
    const { data } = await getAllContactsQuery();
    return data;
  } catch (error) {
    console.error('Get All Contacts Error: ', error);
  }
});

export const makeNewContact = createAsyncThunk(
  'contacts/post',
  async contact => {
    try {
      const { data } = await postContactQuery(contact);
      return data;
    } catch (error) {
      console.error('Make New Contact Error: ', error);
    }
  }
);

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    const { data } = await deleteContactQuery(id);
    return data;
  } catch (error) {
    console.error('Delete Contact Error: ', error);
  }
});

export const patchContact = createAsyncThunk(
  'contacts/update',
  async (id, update) => {
    try {
      const { data } = await patchContactQuery(id, update);
      return data;
    } catch (error) {
      console.error('Patch Contact Error: ', error);
    }
  }
);

const contactOperations = {
  getAllContacts,
  makeNewContact,
  deleteContact,
  patchContact,
};
export default contactOperations;
