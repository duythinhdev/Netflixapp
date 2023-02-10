/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';

import { createReducer } from './reducers';

export function configureAppStore() {
  const store = configureStore({
    reducer: createReducer(),
  });
  return store;
}

export const RootStore = configureAppStore();