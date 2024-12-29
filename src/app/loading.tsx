import { Spin } from "antd";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spin size="small" />
    </div>
  );
};

export default Loading;
