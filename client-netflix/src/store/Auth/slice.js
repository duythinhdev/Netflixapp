import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
 loading: false,
 token: "",
};

export const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
   login: (state, action) => {
    //  state.tasks.push(action.payload);
   },
   loginSuccess: (state, action) => {
    //  state.tasks.push(action.payload);
   },
   loginFailed: (state,action) => {

   }
 }
});

export const { actions, reducer, name: sliceKey } = authSlice;