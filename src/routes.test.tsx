import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

it('Testing if Route Login gets rendered by default', () => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );

  expect(
    screen.getByText('Welcome to nutri. Please Login.')
  ).toBeInTheDocument();
});
