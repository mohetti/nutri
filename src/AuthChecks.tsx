import React from 'react';
import { useAppSelector } from './redux/hooks';
import { Navigate } from 'react-router-dom';

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAppSelector((state) => state.auth.isLoggedIn);
  if (!auth) {
    return <Navigate to='/login' />;
  }

  return children;
}

export function RequireUnAuth({ children }: { children: JSX.Element }) {
  let auth = useAppSelector((state) => state.auth.isLoggedIn);

  if (auth) {
    return <Navigate to='/' />;
  }

  return children;
}
