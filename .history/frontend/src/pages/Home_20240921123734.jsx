import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const userData = localStorage.getItem("user");

  if (!userData) {
    return <Navigate to="/" />;
  }
  const user = JSON.parse(userData);

  return (
    <div>
      <Navbar />
      <h2>Welcome back, {user.username}!</h2>
      <Outlet />
    </div>
  );
};

export default Home;
