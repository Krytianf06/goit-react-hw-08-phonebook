import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterReducer } from './filter/filterReducer';
import authReducer from './auth/auth-slice';
import contactReducer from './contacts/contacts-slice';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: persistedAuthReducer,
    contacts: contactReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: { ignoreActions: [REHYDRATE] },
    }),
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
