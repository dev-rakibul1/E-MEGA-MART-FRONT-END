"use client";

import { ThemeColors } from "@/theme/color";
import { Typography } from "antd";
const { Paragraph } = Typography;

import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const TriggerMenuSignArea = () => {
  const router = useRouter();

  const handleRediriectLoginpage = () => {
    router.push("/login");
  };
  const handleRediriectRegisterPage = () => {
    router.push("/register");
  };

  return (
    <>
      <Paragraph
        onClick={handleRediriectLoginpage}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <UserAddOutlined
          style={{
            marginRight: "8px",
            color: ThemeColors.colorPrimary,
            fontSize: "17px",
          }}
        />
        Login
      </Paragraph>

      <Paragraph
        onClick={handleRediriectRegisterPage}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          margin: "0 15px",
        }}
      >
        <LoginOutlined
          style={{
            marginRight: "8px",
            color: ThemeColors.colorPrimary,
            fontSize: "17px",
          }}
        />
        Register
      </Paragraph>
    </>
  );
};

export default TriggerMenuSignArea;
