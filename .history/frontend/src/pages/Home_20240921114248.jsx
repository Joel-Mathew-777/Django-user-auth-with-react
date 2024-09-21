import { useAuth } from "../context/AuthContext";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return <h2>You need to log in to access this page.</h2>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome, {user.username}!</h2>
      <Button type="primary" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
};

export default Home;
