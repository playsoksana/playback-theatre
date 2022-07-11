import axios from "axios";
import { store } from "../store";
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
  getCurrentPending,
  getCurrentFulfilled,
  getCurrentError,
} from "./authAction";

const baseURL = "https://connections-api.herokuapp.com";

const tokenState = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  cleanToken() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const operationRegistration = (text) => async (dispatch) => {
  try {
    dispatch(registrationPending());
    const { data } = await axios.post(`${baseURL}/users/signup`, text);

    dispatch(registrationFulfilled(data));
    tokenState.setToken(data.token);
  } catch (err) {
    dispatch(registrationError());
  }
};

export const operationLogin = (text) => async (dispatch) => {
  dispatch(loginPending());
  try {
    const { data } = await axios.post(`${baseURL}​/users/login`, text);
    dispatch(loginFulfilled(data));
    tokenState.setToken(data.token);
  } catch (err) {
    dispatch(loginError());
  }
};

export const operationLogout = (text) => async (dispatch) => {
  dispatch(logoutPending());
  try {
    await axios.post(`${baseURL}/users/logout`);
    dispatch(logoutFulfilled());
    tokenState.cleanToken();
  } catch (err) {
    dispatch(logoutError());
  }
};

export const operationGetCurrent = (text) => async (dispatch) => {
  dispatch(getCurrentPending());
  try {
    const token = store.getState().token;
    tokenState.setToken(token);
    const { data } = await axios(`${baseURL}/users/current`);

    dispatch(getCurrentFulfilled(data));
  } catch (err) {
    dispatch(getCurrentError());
  }
};
