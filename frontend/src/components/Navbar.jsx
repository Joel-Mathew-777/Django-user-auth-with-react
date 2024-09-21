import { Link, useNavigate } from "react-router-dom";
import { Menu, Button } from "antd";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("tokens");
    setUser(null);
    navigate("/");
  };

  const items = [
    {
      key: "home",
      label: <Link to="/home">Home</Link>,
    },
    {
      key: "profile",
      label: <Link to="/home/profile">Profile</Link>,
    },
    {
      key: "logout",
      label: (
        <Button onClick={handleLogout} type="primary" danger>
          Logout
        </Button>
      ),
    },
  ];

  return user ? <Menu mode="horizontal" items={items} /> : null;
};

export default Navbar;
