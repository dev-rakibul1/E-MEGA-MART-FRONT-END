"use client";

import { ThemeColors } from "@/theme/color";
import { Typography } from "antd";
const { Paragraph } = Typography;

import MesageInfo from "@/components/message/MessageInfo";
import NotificaitonsInfo from "@/components/notifications/Notifications";
import { BellOutlined, MessageOutlined } from "@ant-design/icons";
import { useState } from "react";

const MessageAndNotifications = () => {
  const [notificaitons, setNotifications] = useState(false);
  const [message, setMessage] = useState(false);

  // drawer notifications
  const showNotifications = () => {
    setNotifications(true);
  };
  // drawer notifications
  const showMessage = () => {
    setMessage(true);
  };
  return (
    <>
      <NotificaitonsInfo open={notificaitons} setOpen={setNotifications} />
      <MesageInfo open={message} setOpen={setMessage} />

      <Paragraph
        onClick={showMessage}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <MessageOutlined
          style={{
            marginRight: "8px",
            color: ThemeColors.colorPrimary,
            fontSize: "17px",
          }}
        />
        Message
      </Paragraph>

      <Paragraph
        onClick={showNotifications}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          margin: "0 15px",
        }}
      >
        <BellOutlined
          style={{
            marginRight: "8px",
            color: ThemeColors.colorPrimary,
            fontSize: "17px",
          }}
        />
        Notifications
      </Paragraph>
    </>
  );
};

export default MessageAndNotifications;
