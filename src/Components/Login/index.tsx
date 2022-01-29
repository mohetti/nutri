import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { login } from '../../features/authorization/authorizationSlice';
import './login.css';
import { User, Token } from '../../User';

// see what selectAuth does.
// trace back authSlice name:, what it does. And the general flow like rootReducer name of reducer

function Login() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(isLoggedIn);
  });

  const toggleError = () => {
    setError(true);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(setError(false));
      }, 2000);
    });
  };

  const loginUser = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === User.username && password === User.password) {
      return dispatch(login());
    }
    !error && toggleError();
  };
  return (
    <div id='login-cp'>
      <h1>Welcome to nutri. Please Login.</h1>
      <form onSubmit={loginUser}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            type='text'
            name='username'
            value={name}
          />
          <label htmlFor='password'>Password: </label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            type='password'
            name='password'
            value={password}
          />
        </div>
        <div>
          <input id='login-btn' type='submit' value='Login' />
        </div>
      </form>
      {error && (
        <div className='error'>
          Wrong username or password. Please try again.
        </div>
      )}
    </div>
  );
}

export default Login;
