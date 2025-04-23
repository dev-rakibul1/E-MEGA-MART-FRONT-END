"use client";

import { ThemeColors } from "@/theme/color";
import { Typography } from "antd";
const { Paragraph } = Typography;

import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";

const TriggerMenuSignArea = () => {
  return (
    <>
      <Paragraph
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
        Sign Up
      </Paragraph>

      <Paragraph
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
        Sign In
      </Paragraph>
    </>
  );
};

export default TriggerMenuSignArea;
