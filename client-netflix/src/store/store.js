/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import { createReducer } from './reducers';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { loginEpic } from "../store/Auth/epic";

const epicMiddleware = createEpicMiddleware();

export const rootEpic = combineEpics(
    loginEpic,
);
export function configureAppStore() {
  const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
  });

  epicMiddleware.run(rootEpic);
  
  return store;
}

export const RootStore = configureAppStore();