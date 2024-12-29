"use client";

import { ThemeColors } from "@/theme/color";
import { role } from "@/types/Common";
import { ConfigProvider, Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import sidebarItems from "./MenuItems";

const { Header } = Layout;

const MainMenu = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Responsive device
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
    <div
      className={`main-menu-sticky ${isMobile ? "hidden" : "app-menu-trigger"}`}
      style={{
        background: ThemeColors.bgWhite,
        borderBottom: `1px solid ${ThemeColors?.colorBorder}`,
        borderTop: `1px solid ${ThemeColors?.colorBorder}`,
      }}
    >
      <div className={`box-container`}>
        <ConfigProvider>
          <Header
            style={{
              backgroundColor: "transparent",
              color: ThemeColors.colorTextPrimary,
              alignItems: "center",
              width: "100%",
              zIndex: 999,
              display: "flex",
              justifyContent: "center",
              padding: "0",
            }}
          >
            <Menu
              className="box-container"
              // theme="light"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={sidebarItems(role)}
              style={{
                width: "100%",
                justifyContent: "start",
                background: "transparent",
                maxWidth: "100%",
                border: "none",
                fontWeight: "500",
              }}
            />
          </Header>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default MainMenu;
