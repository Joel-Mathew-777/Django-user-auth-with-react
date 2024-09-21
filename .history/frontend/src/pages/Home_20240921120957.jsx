import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";

const { Header, Content } = Layout;

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <Layout>
      <Header style={{ backgroundColor: '#001529' }}>
        <div className="logo" style={{ color: 'white', float: 'left', fontSize: '24px' }}>
          MyApp
        </div>
        <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
          <Menu.Item key="home">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="profile">
            <Link to="/profile">
              <Avatar size="small" icon={<img src="https://via.placeholder.com/30" alt="Profile" />} />
              Profile
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '20px' }}>
        <h2>Welcome, {user ? user.username : "Guest"}!</h2>
        {user && <p>Your email: {user.email}</p>}
      </Content>
    </Layout>
  );
};

export default Home;
