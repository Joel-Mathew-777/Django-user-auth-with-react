import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome, {user ? user.username : "Guest"}!</h1>
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Home;
