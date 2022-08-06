import { createReducer } from '@reduxjs/toolkit/';
import actions from './actions';
import {
  LOCAL_STORAGE_KEY_CONTACTS,
  LOCAL_STORAGE_KEY_FILTER,
  saveToLocalStorage,
} from 'utils/localStorage';

export const contactReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload.newContact],
  [actions.saveContacts]: state => {
    saveToLocalStorage(LOCAL_STORAGE_KEY_CONTACTS, state);
    return state;
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.targetId),
});

export const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload.filter,
  [actions.saveFilter]: state =>
    saveToLocalStorage(LOCAL_STORAGE_KEY_FILTER, state),
});
