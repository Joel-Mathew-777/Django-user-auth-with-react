import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const userData = localStorage.getItem("user");

  if (!userData) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navbar />
      <h2>Welcome back!</h2>
      <Outlet />
    </div>
  );
};

export default Home;
