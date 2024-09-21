import React from 'react';

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login"; // Redirect to login after logout
  };

  return (
    <div>
      <h1>Welcome, {user ? user.username : "Guest"}!</h1>
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Home;
