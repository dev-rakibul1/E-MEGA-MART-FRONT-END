"use client";

import { store } from "@/redux/store";
import { ThemeColors } from "@/theme/color";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React from "react";
import { Provider } from "react-redux";

const Providers = ({
  children,
}: {
  children: React.ReactNode | React.ReactElement;
}) => {
  return (
    <>
      <ConfigProvider theme={{ token: ThemeColors }}>
        <AntdRegistry>
          <Provider store={store}>{children}</Provider>
        </AntdRegistry>
      </ConfigProvider>
    </>
  );
};

export default Providers;
