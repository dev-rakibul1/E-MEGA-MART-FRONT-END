"use client";

import TriggerMenuSearch from "@/components/navbar/triggerMenu/TriggerMenuSearch";
import TriggerMenuSignArea from "@/components/navbar/triggerMenu/TriggerMenuSignArea";
import {
  TriggerMenuIconParent,
  TriggerMenuParent,
  TriggerMenuSignShape,
} from "@/styles/GStyles";
import { ThemeColors } from "@/theme/color";
import { AlignRightOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useEffect, useState } from "react";
import TriggerMenuItems from "./TriggerMenuItems";

const { Paragraph } = Typography;

const TriggerMenu = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true); // Default hidden

  // Toggle the sidebar's collapsed state
  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

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
    <>
      <TriggerMenuItems collapsed={collapsed} onToggle={handleToggle} />

      <div className={`${window.innerWidth < 992 ? "trigger-menu" : ""}`}>
        <div className="box-container">
          {/* Parent */}
          <div style={TriggerMenuParent}>
            {/* icon and trigger menu */}

            <div style={TriggerMenuIconParent}>
              <h1 style={{ fontSize: "22px", color: ThemeColors.colorPrimary }}>
                <AlignRightOutlined
                  onClick={handleToggle}
                  style={{
                    marginRight: "15px",
                    color: ThemeColors.colorPrimary,
                    cursor: "pointer",
                  }}
                />
                MegaMart
              </h1>
            </div>

            {/* Search */}
            <div
              style={{
                width: "50%",
                maxWidth: "100%",
              }}
              className={`${isMobile ? "hidden" : "app-menu-trigger"}`}
            >
              <TriggerMenuSearch />
            </div>

            {/* signup/signin and cart area */}
            <div style={{ cursor: "pointer" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* signin/signup button */}
                <div className={`${isMobile ? "hidden" : "app-menu-trigger"}`}>
                  <TriggerMenuSignArea />
                </div>

                {/* Shape */}
                <div
                  style={{
                    margin: "0 15px",
                  }}
                >
                  <Paragraph style={TriggerMenuSignShape}></Paragraph>
                </div>

                {/* Cart */}
                <Paragraph
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                  }}
                >
                  {" "}
                  <ShoppingCartOutlined
                    style={{
                      marginRight: "8px",
                      color: ThemeColors.colorPrimary,
                      fontSize: "22px",
                    }}
                  />
                  Cart
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TriggerMenu;
