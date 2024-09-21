import { useEffect, useState } from "react";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <Title level={2}>User Profile</Title>
        {user ? (
          <div>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* Add more user details as needed */}
          </div>
        ) : (
          <p>No user data available.</p>
        )}
      </Content>
    </Layout>
  );
};

export default Profile;
