import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add');
const saveContacts = createAction('contact/save');
const deleteContact = createAction('contact/delete');

const changeFilter = createAction('filter/change');
const saveFilter = createAction('filter/save');

const filterActions = {
  addContact,
  saveContacts,
  saveFilter,
  changeFilter,
  deleteContact,
};

export default filterActions;
