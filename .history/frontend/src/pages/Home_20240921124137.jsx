import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainHome from "./MainHome"; // Import the new MainHome component

const Home = () => {
  const userData = localStorage.getItem("user");

  if (!userData) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navbar />
      <MainHome />
      <Outlet />
    </div>
  );
};

export default Home;
