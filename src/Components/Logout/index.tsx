import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../features/authorization/authorizationSlice';

function Logout() {
  const dispatch = useAppDispatch();
  return (
    <React.Fragment>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </React.Fragment>
  );
}

export default Logout;
