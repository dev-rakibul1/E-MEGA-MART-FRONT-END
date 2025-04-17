"use client";

import { IMobiles } from "@/types/Common";
import { Typography } from "antd";
const { Title } = Typography;

type IProps = {
  data?: IMobiles;
};

const Description = ({ data }: IProps) => {
  return (
    <div>
      <Title level={3}>Product Descriptions</Title>
      {data?.description}
    </div>
  );
};

export default Description;
