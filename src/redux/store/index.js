import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // <-- this must be used with applyMiddleware
import favouriteReducer from "../reducers/favouriteReducer";
import jobReducer from "../reducers/jobReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
const composeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favourite: {
    favoCompany: [],
  },
  jobs: {
    jobsArray: [],
  },
};
const bigReducer = combineReducers({
  favourite: favouriteReducer,
  jobs: jobReducer,
});
const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY, // this is mandatory
      onError: (error) => {
        // this is optional
        console.log("encryption error", Error);
      },
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, bigReducer);

export let configureStore = createStore(
  persistedReducer,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);
export const persistor = persistStore(configureStore);
