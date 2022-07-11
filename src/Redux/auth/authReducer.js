import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  logoutFulfilled,
  logoutPending,
  logoutError,
  loginFulfilled,
  loginPending,
  loginError,
  registrationFulfilled,
  registrationPending,
  registrationError,
  getCurrentFulfilled,
  getCurrentPending,
  getCurrentError,
} from "./authAction";

const user = createReducer(
  { name: null, email: null },
  {
    [registrationFulfilled]: (state, { payload }) => payload.user,
    [loginFulfilled]: (state, { payload }) => payload.user,
    [logoutFulfilled]: (state, { payload }) => ({ name: null, email: null }),
    [getCurrentFulfilled]: (state, { payload }) => payload,
  }
);

const error = createReducer(null, {
  [registrationPending]: (state, action) => null,
  [loginPending]: (state, action) => null,
  [logoutPending]: (state, action) => null,

  [registrationError]: (state, action) => true,
  [loginError]: (state, action) => true,
  [logoutError]: (state, action) => true,
  [getCurrentError]: (state, action) => true,
});

const token = createReducer(null, {
  [registrationFulfilled]: (state, { payload }) => payload.token,
  [loginFulfilled]: (state, { payload }) => payload.token,
  [logoutFulfilled]: (state, { payload }) => null,
});

export default combineReducers({ user, error, token });
