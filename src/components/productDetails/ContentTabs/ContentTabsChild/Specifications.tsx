"use client";

import { Table, Typography } from "antd";
import React from "react";

const { Title } = Typography;

interface Specification {
  key: string;
  attribute: string;
  value: string;
}

const specifications: Specification[] = [
  { key: "1", attribute: "Brand", value: "Sony" },
  { key: "2", attribute: "Model", value: "WH-1000XM5" },
  { key: "3", attribute: "Connectivity", value: "Bluetooth 5.2" },
  { key: "4", attribute: "Battery Life", value: "Up to 30 hours" },
  { key: "5", attribute: "Noise Cancellation", value: "Yes" },
  { key: "6", attribute: "Weight", value: "250g" },
  { key: "7", attribute: "Color", value: "Matte Black" },
];

const columns = [
  {
    title: "Specification",
    dataIndex: "attribute",
    key: "attribute",
    width: "40%",
    render: (text: string) => <strong>{text}</strong>,
  },
  {
    title: "Details",
    dataIndex: "value",
    key: "value",
  },
];

const ProductSpecifications: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Title level={3}>Product Specifications</Title>
      <Table
        columns={columns}
        dataSource={specifications}
        pagination={false}
        bordered
      />
    </div>
  );
};

export default ProductSpecifications;
