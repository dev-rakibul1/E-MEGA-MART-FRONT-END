"use client";

import { ThemeColors } from "@/theme/color";
import { RightOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Text } = Typography;

type Props = {
  title: string;
  btn: string;
  titleColor: string;
};

const SectionTItle = ({ title, btn, titleColor }: Props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "30px",
          borderBottom: `1px solid ${ThemeColors.colorBorder}`,
        }}
      >
        <div
          style={{
            borderBottom: `2px solid ${ThemeColors.colorPrimary}`,
            paddingBottom: "5px",
          }}
        >
          <Text style={{ fontSize: "18px", fontWeight: "500" }}>
            {title}{" "}
            <span style={{ color: ThemeColors.colorPrimary }}>
              {" "}
              {titleColor}
            </span>
          </Text>
        </div>
        <div style={{ cursor: "pointer" }}>
          <Text>
            {btn} <RightOutlined style={{ color: ThemeColors.colorPrimary }} />
          </Text>
        </div>
      </div>
    </>
  );
};

export default SectionTItle;
