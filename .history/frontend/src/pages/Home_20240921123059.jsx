import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const userData = localStorage.getItem("user");
  
  if (!userData) {
    return <Navigate to="/" />;
  }

  const user = JSON.parse(userData);

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Your email: {user.email}</p>
    </div>
  );
};

export default Home;
