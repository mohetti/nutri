import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/authorization/authorizationSlice';

const rootReducer = {
  auth: authReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
