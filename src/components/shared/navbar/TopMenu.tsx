"use client";

import { TopMenuLeftPart, TopMenuWrap } from "@/styles/GStyles";
import { ThemeColors } from "@/theme/color";
import {
  CarOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { useEffect, useState } from "react";

const { Paragraph } = Typography;

const TopMenu = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Responsive device depended on screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="box-container">
      <div style={TopMenuWrap}>
        {/* Left part */}
        <div>
          <Paragraph>Welcome to worldwide Megamart!</Paragraph>
        </div>

        {/* Right part */}
        <div
          style={TopMenuLeftPart}
          className={`${isMobile ? "hidden" : "app-menu-trigger"}`}
        >
          <Paragraph className="mx10">
            <EnvironmentOutlined
              style={{ marginRight: "5px", color: ThemeColors.colorPrimary }}
            />{" "}
            Deliver to 423651
          </Paragraph>
          <Paragraph className="mx10">
            <CarOutlined
              style={{ marginRight: "5px", color: ThemeColors.colorPrimary }}
            />
            Track your order
          </Paragraph>
          <Paragraph className="mx10">
            <FieldTimeOutlined
              style={{ marginRight: "5px", color: ThemeColors.colorPrimary }}
            />{" "}
            All Offers
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
