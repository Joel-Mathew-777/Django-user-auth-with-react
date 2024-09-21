import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    // Call your backend API for registration, this is simulated with setTimeout
    // Replace this with your actual API call
    setTimeout(() => {
      // Example user data returned from API
      const userData = { username: values.username, token: "sample_token" };

      login(userData); // Save user in context and localStorage
      navigate("/home"); // Redirect to home page after registration

      setLoading(false);
    }, 1000);
  };

  return (
    <Form
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 300, margin: "auto" }}
    >
      <h2>Register</h2>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
