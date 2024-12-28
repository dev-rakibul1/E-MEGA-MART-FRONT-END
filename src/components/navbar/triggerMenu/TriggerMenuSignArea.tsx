"use client";

import { ThemeColors } from "@/theme/color";
import { Typography } from "antd";
const { Paragraph } = Typography;

import { UserOutlined } from "@ant-design/icons";

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
        <UserOutlined
          style={{
            marginRight: "8px",
            color: ThemeColors.colorPrimary,
            fontSize: "22px",
          }}
        />
        Sign Up/Sign In
      </Paragraph>
    </>
  );
};

export default TriggerMenuSignArea;
