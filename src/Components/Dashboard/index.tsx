import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout';

function Dashboard() {
  return (
    <div>
      <Link to='login'>Login</Link>
      <div>
        <Logout />
        <div>Dashboard</div>
      </div>
    </div>
  );
}

export default Dashboard;
