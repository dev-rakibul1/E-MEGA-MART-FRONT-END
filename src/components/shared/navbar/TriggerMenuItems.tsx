"use client";

import { Layout, Menu } from "antd";
import Link from "next/link";
import React from "react";
import sidebarItems from "./MenuItems";

import TriggerMenuSearch from "@/components/navbar/triggerMenu/TriggerMenuSearch";
import TriggerMenuSignArea from "@/components/navbar/triggerMenu/TriggerMenuSignArea";
import {
  TriggerMenuCloseIcon,
  TriggerMenuCloseIconParent,
  TriggerMenuLogoParent,
  TriggerSiderStyle,
} from "@/styles/GStyles";
import { ThemeColors } from "@/theme/color";
import { role } from "@/types/Common";
import { CloseOutlined } from "@ant-design/icons";

const { Sider } = Layout;

interface TriggerMenuProps {
  collapsed: boolean;
  onToggle: () => void;
}

const TriggerMenuItems: React.FC<TriggerMenuProps> = ({
  collapsed,
  onToggle,
}) => {
  return (
    <>
      {/* Overlay to close menu */}
      <div
        onClick={onToggle}
        className={`${!collapsed ? "overly" : "overly-out"}`}
      />

      {/* Sidebar */}
      <Sider
        collapsed={collapsed}
        collapsedWidth="0"
        width={350}
        theme="light"
        style={{
          transform: collapsed ? "translateX(-200%)" : "translateX(0)",
          ...TriggerSiderStyle,
        }}
        className="trigger-menu"
      >
        {/* close icon */}
        <div onClick={onToggle} style={TriggerMenuCloseIconParent}>
          <span style={TriggerMenuCloseIcon}>
            <CloseOutlined />
          </span>
        </div>

        {/* Search and signup button */}
        <div className="p10">
          <div
            style={{
              border: `1px solid ${ThemeColors.colorBorder}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              marginTop: "5px",
              cursor: "pointer",
            }}
          >
            <TriggerMenuSearch />
          </div>
          <div
            style={{
              border: `1px solid ${ThemeColors.colorBorder}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              marginTop: "5px",
              cursor: "pointer",
            }}
          >
            <TriggerMenuSignArea />
          </div>
        </div>

        {/* logo area */}
        <Link href="/">
          <div style={TriggerMenuLogoParent}>
            <h1 style={{ fontSize: "22px", color: ThemeColors.colorPrimary }}>
              MegaMart
            </h1>
          </div>
        </Link>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{
            background: ThemeColors.colorPrimaryLight,
            color: ThemeColors.colorTextSecondary,
          }}
          items={sidebarItems(role)}
        />
      </Sider>
    </>
  );
};

export default TriggerMenuItems;