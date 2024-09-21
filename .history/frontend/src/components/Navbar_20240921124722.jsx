import { Link, useNavigate } from "react-router-dom";
import { Menu, Button, Dropdown, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
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

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/home/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Button onClick={handleLogout} type="primary" danger>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return user ? (
    <Menu mode="horizontal" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Menu.Item key="home">
        <Link to="/home">Home</Link>
      </Menu.Item>
      <div style={{ marginLeft: 'auto' }}>
        <Dropdown overlay={menu} trigger={['click']}>
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Menu>
  ) : null;
};

export default Navbar;
