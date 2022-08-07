import { createReducer } from '@reduxjs/toolkit';

import actions from './filterActions';

export const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});
