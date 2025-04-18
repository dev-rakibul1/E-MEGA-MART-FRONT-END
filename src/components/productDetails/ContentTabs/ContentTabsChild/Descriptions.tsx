"use client";

import { IProducts } from "@/types/Common";
import { Typography } from "antd";
const { Title } = Typography;

type IProps = {
  data?: IProducts;
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
