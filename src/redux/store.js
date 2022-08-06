import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './reducers';
import {
  LOCAL_STORAGE_KEY_FILTER,
  queryFromLocalStorage,
} from 'utils/localStorage';
import { contactsApi } from './contactsApi';



const preloadedState = {
  filter: queryFromLocalStorage(LOCAL_STORAGE_KEY_FILTER, ''),
};

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
