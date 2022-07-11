
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import auth from "./auth/authReducer";
import storage from 'redux-persist/lib/storage';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';


const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

  const persistedReducerAuth = persistReducer(persistConfig, auth)


const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }), logger]
const store = configureStore({
    middleware,
    reducer:  persistedReducerAuth,
    devTools: process.env.NODE_ENV === "development"
});

let persistor = persistStore(store);

export {store, persistor};
