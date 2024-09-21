import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    // Call your backend API for login, this is simulated with setTimeout
    // Replace this with your actual API call
    setTimeout(() => {
      // Example user data returned from API
      const userData = { username: values.username, token: "sample_token" };

      login(userData); // Save user in context and localStorage
      navigate("/home"); // Redirect to home page after login

      setLoading(false);
    }, 1000);
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      style={{ maxWidth: 300, margin: "auto" }}
    >
      <h2>Login</h2>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
