import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <>
      {user && (
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="profile">
            <Link to="/home/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      )}
    </>
  );
};

export default Navbar;
