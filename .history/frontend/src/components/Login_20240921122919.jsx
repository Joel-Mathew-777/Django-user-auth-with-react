import { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/users/login/", values);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form name="login" onFinish={onFinish} style={{ maxWidth: 300, margin: "auto" }}>
      <h2>Login</h2>
      <Form.Item name="username" rules={[{ required: true, message: "Please input your username!" }]}>
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
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
