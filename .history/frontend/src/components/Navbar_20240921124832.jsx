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

  const menuItems = [
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

  return user ? (
    <Menu mode="horizontal" style={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}>
      <Menu.Item key="home">
        <Link to="/home">Home</Link>
      </Menu.Item>
      <div style={{ marginLeft: 'auto' }}>
        <Dropdown
          menu={{ items: menuItems }}
          trigger={['click']}
        >
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Menu>
  ) : null;
};

export default Navbar;
