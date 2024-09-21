import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const MainHome = () => {
  const userData = localStorage.getItem("user");

  if (!userData) {
    return <Navigate to="/" />;
  }

  const user = JSON.parse(userData);

  return (
    <div>
      <h2>Welcome back, {user.username}!</h2>
      <p>This is your main dashboard.</p>
      {/* Add any additional content or components here */}
    </div>
  );
};

export default MainHome;
