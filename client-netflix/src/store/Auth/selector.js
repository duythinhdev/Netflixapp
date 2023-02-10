/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

const select = (state) => state.auth || initialState;

export const selectLoading = createSelector([select], state => state.loading);
