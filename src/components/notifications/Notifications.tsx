"use client";

import {
  addToCart,
  deleteFromCart,
  removeOneFromCart,
} from "@/redux/features/cart";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ThemeColors } from "@/theme/color";
import { IProduct } from "@/types/Common";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import type { DrawerProps } from "antd";

import { Button, Card, Col, Drawer, Row, Space, Typography } from "antd";
import Image from "next/image";
import { useState } from "react";

const { Title, Text } = Typography;

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const NotificaitonsInfo = ({ open, setOpen }: Props) => {
  const [placement] = useState<DrawerProps["placement"]>("right");

  const onClose = () => {
    setOpen(false);
  };

  // Product information
  const { products, totalAmount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // Handle adding to cart
  const handleToCartIncrement = (product: IProduct) => {
    dispatch(addToCart(product)); // Assuming addToCart is defined elsewhere
  };

  // Handle removing from cart
  const handleToCartDecrement = (product: IProduct) => {
    dispatch(removeOneFromCart(product)); // Assuming removeOneFromCart is defined elsewhere
  };

  return (
    <Drawer
      title="Notificaitons"
      placement={placement}
      width={500}
      onClose={onClose}
      open={open}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            OK
          </Button>
        </Space>
      }
    >
      <div style={{ margin: "0 auto", padding: "5px" }}>
        <div>
          <Text
            style={{
              fontSize: "18px",
              paddingBottom: "10px",
              display: "inline-block",
            }}
          >
            Total amount: $ {totalAmount.toFixed(2)}
          </Text>
          <br />
          <Text
            style={{
              fontSize: "18px",
              paddingBottom: "10px",
              display: "inline-block",
            }}
          >
            Total product: {products.length ? products?.length : 0}
          </Text>
        </div>

        {products.map((product: IProduct) => (
          <Card
            key={product._id}
            style={{ width: "100%", marginBottom: "16px" }}
          >
            <Row align="middle" gutter={[16, 16]}>
              {/* Product Image */}
              <Col xs={8} sm={8} lg={8}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Col>

              {/* Product Info */}
              <Col xs={16} sm={16} lg={16}>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%" }}
                >
                  {/* Title */}
                  <Title
                    level={5}
                    style={{
                      margin: 0,
                      fontSize: "19px",
                      color: ThemeColors.colorPrimary,
                    }}
                  >
                    {product.name}
                  </Title>

                  {/* Price */}
                  <Text
                    style={{
                      fontSize: "16px",
                      marginTop: "-15px",
                      display: "inline-block",
                    }}
                  >
                    Price: ${" "}
                    {(product.price ?? 0) * (product.quantity ?? 0) > 0
                      ? (
                          (product.price ?? 0) * (product.quantity ?? 0)
                        ).toFixed(2)
                      : "0.00"}
                  </Text>

                  {/* quantity */}
                  <Text style={{ fontSize: "16px", marginTop: "-15px" }}>
                    Quantity: {product.quantity ? product.quantity : 0}
                  </Text>

                  {/* Quantity Controls */}
                  <Space align="center">
                    <Button
                      size="small"
                      shape="circle"
                      onClick={() => handleToCartDecrement(product)}
                    >
                      <MinusOutlined />
                    </Button>

                    <Button
                      size="small"
                      shape="circle"
                      onClick={() => handleToCartIncrement(product)}
                    >
                      <PlusOutlined />
                    </Button>

                    <Button
                      style={{ color: ThemeColors.colorError }}
                      size="small"
                      shape="circle"
                      onClick={() => dispatch(deleteFromCart(product))}
                    >
                      <DeleteOutlined />
                    </Button>
                  </Space>
                </Space>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </Drawer>
  );
};

export default NotificaitonsInfo;
