"use client";

import AddToProductCart from "@/components/addCart/AddCart";
import MessageAndNotifications from "@/components/navbar/triggerMenu/MessageNotifications";
import TriggerMenuSignArea from "@/components/navbar/triggerMenu/TriggerMenuSignArea";
import WishList from "@/components/navbar/triggerMenu/WishList";
import AddWishList from "@/components/wishlist/AddWishList";
import { useAppSelector } from "@/redux/hooks";
import {
  TriggerMenuIconParent,
  TriggerMenuParent,
  TriggerMenuSignShape,
} from "@/styles/GStyles";
import { ThemeColors } from "@/theme/color";
import { AlignRightOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Space, Typography } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import TriggerMenuItems from "./TriggerMenuItems";

const { Paragraph } = Typography;

const TriggerMenu = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  const [wishilist, setWishlist] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { products } = useAppSelector((state) => state.cart);

  // Toggle the sidebar's collapsed state
  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

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

  // drawer click
  const showDrawer = () => {
    setOpen(true);
  };

  // drawer wishlist
  const showWishlist = () => {
    setWishlist(true);
  };

  return (
    <>
      {/* Cart drawer */}
      <AddToProductCart open={open} setOpen={setOpen} />
      <AddWishList open={wishilist} setOpen={setWishlist} />

      {/* menu items */}
      <TriggerMenuItems collapsed={collapsed} onToggle={handleToggle} />

      <div className={`${isMobile ? "trigger-menu" : ""}`}>
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
                <Link
                  href={`/home`}
                  style={{ fontSize: "22px", color: ThemeColors.colorPrimary }}
                >
                  MegaMart
                </Link>
              </h1>
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
                {/* Message and notifications */}
                <div className={`${isMobile ? "hidden" : "app-menu-trigger"}`}>
                  <MessageAndNotifications />
                </div>

                {/* Shape */}
                <div style={{ margin: "0 15px" }}>
                  <Paragraph style={TriggerMenuSignShape}></Paragraph>
                </div>

                {/* signin/signup button */}
                <div className={`${isMobile ? "hidden" : "app-menu-trigger"}`}>
                  <TriggerMenuSignArea />
                </div>

                {/* Shape */}
                <div style={{ margin: "0 15px" }}>
                  <Paragraph style={TriggerMenuSignShape}></Paragraph>
                </div>

                {/* Cart */}
                <Space onClick={showDrawer}>
                  <Badge count={products?.length || 0}>
                    <Paragraph
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                      }}
                    >
                      <ShoppingCartOutlined
                        style={{
                          marginRight: "8px",
                          color: ThemeColors.colorPrimary,
                          fontSize: "17px",
                        }}
                      />
                      Cart
                    </Paragraph>
                  </Badge>
                </Space>

                {/* Wishlist */}
                <div style={{ margin: "0 15px" }}>
                  <Space onClick={showWishlist}>
                    <WishList />
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TriggerMenu;
