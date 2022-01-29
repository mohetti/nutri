import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';
import { Token } from '../../User';

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};
let token = localStorage.getItem('token');
if (Token === token) {
  initialState.isLoggedIn = true;
}

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.isLoggedIn = false;
    },
    login: (state) => {
      localStorage.setItem('token', Token);
      state.isLoggedIn = true;
    },
  },
});

export const { login, logout } = authorizationSlice.actions;
export const selectAuth = (state: RootState) => state.auth.isLoggedIn;
export default authorizationSlice.reducer;
