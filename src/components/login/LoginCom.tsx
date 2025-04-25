"use client";

import { useLoginUserMutation } from "@/redux/APIs/auth/loginAPIs";
import { storeUserInfo } from "@/services/auth.service";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const { Title } = Typography;

const LoginCom = () => {
  const router = useRouter();
  const [loginUser, { isLoading, isSuccess, isError, error, data }] =
    useLoginUserMutation();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      const res = await loginUser(values).unwrap();
      console.log(res);
      storeUserInfo(res?.data);
    } catch (err: any) {
      message.error(err?.data?.message || "Login failed");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Login successful!");
      router.push("/home");
    }
  }, [isSuccess, router]);

  useEffect(() => {
    if (isError && error) {
      const errMsg =
        "status" in error
          ? (error as any)?.data?.message || "Login error"
          : "Something went wrong";
      message.error(errMsg);
    }
  }, [isError, error]);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "80px auto",
        padding: 32,
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        borderRadius: 16,
        backgroundColor: "#fff",
      }}
    >
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
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
          <Input
            prefix={<MailOutlined />}
            placeholder="example@email.com"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="••••••••"
            size="large"
          />
        </Form.Item>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Link href="/login/forgot-password">Forgot Password?</Link>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={isLoading}
          >
            Log In
          </Button>
        </Form.Item>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          Don't have an account? <Link href="/register">Create Account</Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginCom;
