import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import cartSlice from "./slices/cart.slice";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk'; // if use redux not redux toolkit


//  if we want to set a different configuration? for example change the storage engine for auth to session
// add new configuration for auth
// // const authPersistConfig = {
//   key: 'auth',
//   storage: storageSession,
// }
//
// // change auth reducer to a reducer with authPersistConfig
// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authSlice),
//   cart: cartSlice,
// })
//------------------------------------------------------------------

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers ({
  cart: cartSlice,
  auth: authSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  // if we have middleware more than Default Middleware, thunk is in default middlewares
  // we use thunk for network requests or ??? :/
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // if use redux not redux toolkit
  // middleware: [thunk],
});

export default store;
export const persistor = persistStore(store)
