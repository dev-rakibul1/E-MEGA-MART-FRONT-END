"use client";

import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Typography, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { Title } = Typography;

const RegisterCom = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      message.success("Registration successful!");
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
        Create Account
      </Title>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            { required: true, message: "First name is required" },
            { min: 2, message: "Must be at least 2 characters" },
            { max: 55, message: "Must be 55 characters or fewer" },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="John" size="large" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            { required: true, message: "Last name is required" },
            { min: 2, message: "Must be at least 2 characters" },
            { max: 255, message: "Must be 255 characters or fewer" },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Doe" size="large" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="email@example.com"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="phoneNo"
          label="Phone Number"
          rules={[
            { required: true, message: "Phone number is required" },
            { max: 15, message: "Must be 15 digits or fewer" },
          ]}
        >
          <Input
            prefix={<PhoneOutlined />}
            placeholder="+8801XXXXXXXXX"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Password is required" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="••••••••"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="••••••••"
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            size="large"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: "center", marginTop: 16 }}>
        Already have an account? <Link href="/login">Log In</Link>
      </div>
    </div>
  );
};

export default RegisterCom;
