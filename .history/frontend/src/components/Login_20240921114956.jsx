import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        // Save the JWT token in localStorage (or any other secure storage)
        localStorage.setItem("token", data.token);
        // Update the AuthContext with the user info
        login(data.user);
        // Navigate to home page
        navigate("/home");
      } else {
        const errorData = await response.json();
        message.error(errorData.detail || "Login failed");
      }
    } catch (error) {
      message.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form name="login" onFinish={onFinish} style={{ maxWidth: 300, margin: "auto" }}>
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
