import { actions } from './slice';
import 'rxjs';
import { Observable, ajax, mergeMap, map, from, catchError } from 'rxjs';
import * as AuthSlice from './slice';
// import api from "../store/api.js";
import { ofType } from 'redux-observable';
import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8800/api'
});

export const loginEpic = action$ =>
    action$.pipe(ofType(AuthSlice.actions.login.type),
    mergeMap(action =>
        from(api.post('/login', action.payload.requestBody)).pipe(
        map(response => actions.loginSuccess(response.data)),
        catchError(error => Observable.ofType(actions.loginFailed(error)))))
);