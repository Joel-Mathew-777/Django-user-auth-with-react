import { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/users/register/", values);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
      navigate("/home");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Register" style={{ maxWidth: 300, margin: "auto", marginTop: "100px" }}>
      <Form name="register" onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: "Please input your username!" }]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true, message: "Please input your email!" }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Register
          </Button>
        </Form.Item>
      </Form>
      <p style={{ textAlign: "center" }}>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </Card>
  );
};

export default Register;
