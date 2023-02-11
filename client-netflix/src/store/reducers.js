/* eslint-disable @typescript-eslint/no-unused-vars */
import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './Auth/slice';

export function lastAction(state = null, action) {
  return action;
}

const reducer  = {
  auth: authSlice,
}

createReducer(reducer);

export function createReducer(Reducers = {}) {
    return combineReducers({
      ...Reducers,
      lastAction,
    });
}

