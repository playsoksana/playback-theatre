import { createAction } from "@reduxjs/toolkit";

const registrationFulfilled = createAction("Auth/registrationFulfilled");
const registrationPending = createAction("Auth/registrationPending");
const registrationError = createAction("Auth/registrationError");

const loginFulfilled = createAction("Auth/loginFulfilled");
const loginPending = createAction("Auth/loginPending");
const loginError = createAction("Auth/loginError");

const logoutFulfilled = createAction("Auth/logoutFulfilled");
const logoutPending = createAction("Auth/logoutPending");
const logoutError = createAction("Auth/logoutError");

const getCurrentFulfilled = createAction("Auth/getCurrentFulfilled");
const getCurrentPending = createAction("Auth/getCurrentPending");
const getCurrentError = createAction("Auth/getCurrentError");

export {
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
};
