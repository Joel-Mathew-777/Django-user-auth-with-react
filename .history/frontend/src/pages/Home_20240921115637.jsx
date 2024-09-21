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

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {user?.username}!</h1>
      <Button type="primary" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
};

export default Home;
