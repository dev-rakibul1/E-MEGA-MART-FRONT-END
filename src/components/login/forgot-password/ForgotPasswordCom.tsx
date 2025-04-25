"use client";

import { MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { Title } = Typography;

const ForgotPasswordCom = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: { email: string }) => {
    setLoading(true);
    router.push("/login/otp");
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send reset email");
      }

      message.success("Reset link sent to your email");
      router.push("/login");
    } catch (err: any) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 450,
        margin: "80px auto",
        padding: 32,
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        borderRadius: 16,
        backgroundColor: "#fff",
      }}
    >
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
        Forgot Password
      </Title>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="your@email.com"
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={loading}
          >
            Send Reset Link
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: "center", marginTop: 16 }}>
        <a href="/login">Back to Login</a>
      </div>
    </div>
  );
};

export default ForgotPasswordCom;
