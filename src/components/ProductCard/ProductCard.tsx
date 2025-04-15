"use client";

import { IMobiles } from "@/types/Common";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Rate, Space, Tag, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const { Text, Title } = Typography;

type IProps = {
  product: IMobiles;
};

const ProductCard = ({ product }: IProps) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return null; // Prevents SSR mismatches

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Your add to cart logic here
    console.log("Added to cart:", product?.id);
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Badge.Ribbon
        text={
          product?.isNew
            ? "NEW"
            : product?.discount
            ? `${product?.discount}% OFF`
            : ""
        }
        color={product?.isNew ? "green" : "red"}
      >
        <Card
          hoverable
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
          cover={
            <Link href={`/mobiles/details/${product?.id}`}>
              <div
                style={{
                  flexShrink: 0,
                  textAlign: "center",
                  padding: "8px",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={product?.image}
                  alt={product?.name}
                  width={200}
                  height={200}
                  style={{ height: "200px", objectFit: "contain" }}
                />
              </div>
            </Link>
          }
          actions={[
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              key={product?.id}
              block
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>,
          ]}
        >
          <Link
            href={`/mobiles/details/${product?.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ flexGrow: 1 }}>
              <div style={{ marginBottom: "8px" }}>
                <Text type="secondary">{product?.brand}</Text>
              </div>
              <Title
                level={5}
                style={{ marginBottom: "8px" }}
                ellipsis={{ rows: 2 }}
              >
                {product?.name}
              </Title>

              <div style={{ marginBottom: "8px" }}>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={product?.rating}
                  style={{ fontSize: "14px" }}
                />
                <Text type="secondary" style={{ marginLeft: "8px" }}>
                  ({product?.reviewsCount})
                </Text>
              </div>

              <div style={{ marginBottom: "8px" }}>
                <Text strong style={{ fontSize: "18px", color: "#1890ff" }}>
                  ${product?.price?.toFixed(2)}
                </Text>
                {product?.originalPrice && (
                  <Text delete type="secondary" style={{ marginLeft: "8px" }}>
                    ${product?.originalPrice?.toFixed(2)}
                  </Text>
                )}
              </div>

              {product?.stock < 10 ? (
                <Text type="danger">Only {product?.stock} left in stock!</Text>
              ) : (
                <Text type="danger">Out of stock!</Text>
              )}
            </div>
          </Link>

          {product?.tags && product?.tags?.length > 0 && (
            <div style={{ marginTop: "8px" }}>
              <Space size={[4, 4]} wrap>
                {product?.tags?.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Space>
            </div>
          )}
        </Card>
      </Badge.Ribbon>
    </div>
  );
};

export default ProductCard;
