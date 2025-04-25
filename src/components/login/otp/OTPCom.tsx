"use client";

import { Button, Form, Input, Typography, message } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const { Title, Text } = Typography;

const OtpVerificationCom = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // retrieve email from query param (optional)

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  };

  const onSubmit = async () => {
    if (otp.length !== 6) {
      return message.warning("Please enter a 6-digit OTP");
    }

    router.push("/login/reset-password/");

    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "OTP verification failed");
      }

      message.success("Email verified successfully!");
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
        maxWidth: 400,
        margin: "80px auto",
        padding: 32,
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Title level={3} style={{ textAlign: "center" }}>
        Verify OTP
      </Title>
      <Text type="secondary">
        Enter the 6-digit OTP sent to your email address
      </Text>

      <Form layout="vertical" onFinish={onSubmit} style={{ marginTop: 24 }}>
        <Form.Item label="OTP">
          <Input
            size="large"
            maxLength={6}
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter OTP"
            style={{ letterSpacing: 10, textAlign: "center", fontSize: 20 }}
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
            Verify OTP
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: "center" }}>
        Didn’t receive code? <a href="/resend-otp">Resend OTP</a>
      </div>
    </div>
  );
};

export default OtpVerificationCom;
