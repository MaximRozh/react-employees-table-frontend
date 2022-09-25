import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/authSlilce";
import { EmployeeService } from "../services/EmployeeService";
import { UserService } from "../services/UserService";

const rootReducer = combineReducers({
  auth: authReducer,
  [EmployeeService.reducerPath]: EmployeeService.reducer,
  [UserService.reducerPath]: UserService.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [EmployeeService.reducerPath, UserService.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(EmployeeService.middleware, UserService.middleware),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
