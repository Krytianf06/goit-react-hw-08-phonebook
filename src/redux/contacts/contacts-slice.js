import { createSlice } from '@reduxjs/toolkit';

import contactOperations from './contacts-operations';

const initialState = {
  contacts: [],
  isFetching: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactOperations.getAllContacts.pending]: state => {
      state.isFetching = true;
    },
    [contactOperations.getAllContacts.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.contacts = action.payload;
    },
    [contactOperations.getAllContacts.rejected]: state => {
      state.isFetching = false;
    },

    [contactOperations.makeNewContact.pending]: state => {
      state.isFetching = true;
    },
    [contactOperations.makeNewContact.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.contacts.push(action.payload);
    },
    [contactOperations.makeNewContact.rejected]: state => {
      state.isFetching = false;
    },

    [contactOperations.deleteContact.pending]: state => {
      state.isFetching = true;
    },
    [contactOperations.deleteContact.fulfilled]: (state, action) => {
      state.isFetching = false;
      const targetId = action.meta.arg;
      state.contacts = state.contacts.filter(({ id }) => id !== targetId);
    },
    [contactOperations.deleteContact.rejected]: state => {
      state.isFetching = false;
    },

    [contactOperations.patchContact.pending]: state => {
      state.isFetching = true;
    },
    [contactOperations.patchContact.fulfilled]: (state, action) => {
      state.isFetching = false;
      console.log(action.payload);
    },
    [contactOperations.patchContact.rejected]: state => {
      state.isFetching = false;
    },
  },
});

export default contactsSlice.reducer;
