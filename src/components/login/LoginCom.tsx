"use client";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { Title } = Typography;

const LoginCom = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      message.success("Login successful!");
      router.push("/dashboard"); // ✅ Redirect after login
    } catch (err: any) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "80px auto",
        padding: 24,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: 12,
      }}
    >
      <Title level={3} style={{ textAlign: "center" }}>
        Customer Login
      </Title>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="example@email.com" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="••••••••" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginCom;
