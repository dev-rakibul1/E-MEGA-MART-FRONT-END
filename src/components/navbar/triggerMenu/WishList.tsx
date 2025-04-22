"use client";

import { Typography } from "antd";
const { Paragraph } = Typography;

import { ThemeColors } from "@/theme/color";
import { HeartOutlined } from "@ant-design/icons";

const WishList = () => {
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
        <HeartOutlined
          style={{
            marginRight: "8px",
            color: ThemeColors.colorPrimary,
            fontSize: "22px",
          }}
        />
        Wishlist
      </Paragraph>
    </>
  );
};

export default WishList;
