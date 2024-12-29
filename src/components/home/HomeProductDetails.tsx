"use client";

import { addToCart } from "@/redux/features/cart";
import { useAppDispatch } from "@/redux/hooks";
import { ThemeColors } from "@/theme/color";
import { IProduct } from "@/types/Common";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Image,
  Rate,
  Row,
  Space,
  Tag,
  Typography,
  message,
} from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

type Props = {
  product: IProduct;
};

const HomeProductDetailsPage = ({ product }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    if (quantity < (product?.stock || 0)) {
      setQuantity((prev) => prev + 1);
    } else {
      message.warning("Cannot exceed available stock.");
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      message.warning("Quantity cannot be less than 1.");
    }
  };

  // handleProductToCart
  const handleProductToCart = (product: IProduct) => {
    dispatch(addToCart(product));
    console.log(product);
  };

  return (
    <div className="">
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        {/* Image Column */}
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={10}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={product?.imageUrl}
            alt={product?.name}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Col>

        {/* Information Column */}
        <Col xs={24} sm={24} md={12} lg={14}>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            {/* Title */}
            <Title level={3}>{product?.name}</Title>

            {/* Category and Model */}
            <div>
              <Text strong>Category:</Text> {product?.category} <br />
              <Text strong>Model:</Text> {product?.model}
            </div>

            {/* Price */}
            <Text
              strong
              style={{ fontSize: "20px", color: ThemeColors.colorPrimary }}
            >
              ₹{product?.price.toFixed(2)}
            </Text>

            {/* Rating */}
            <div>
              <Text strong>Rating:</Text>
              <Rate
                allowHalf
                defaultValue={product?.rating}
                style={{ marginLeft: "10px" }}
              />
              <Text style={{ marginLeft: "5px" }}>
                ({product?.rating ? product?.rating.toFixed(1) : 0})
              </Text>
            </div>

            {/* Stock Status */}
            <div>
              <Text strong>Status:</Text>{" "}
              {product?.stock > 0 ? (
                <Tag color="green">In Stock</Tag>
              ) : (
                <Tag color="red">Out of Stock</Tag>
              )}
            </div>

            {/* Quantity Selector */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Button
                type="default"
                icon={<MinusOutlined />}
                onClick={handleDecrement}
                disabled={quantity <= 1}
                style={{ margin: "5px" }}
              />
              <Text>{quantity}</Text>
              <Button
                type="default"
                icon={<PlusOutlined />}
                onClick={handleIncrement}
                disabled={quantity >= (product?.stock || 0)}
                style={{ margin: "5px" }}
              />
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={() => handleProductToCart(product)}
              type="primary"
              size="large"
              disabled={product?.stock <= 0}
              style={{
                background: ThemeColors.colorPrimary,
                borderColor: ThemeColors.colorBorder,
                marginTop: "10px",
              }}
            >
              Add to Cart
            </Button>

            {/* Description */}
            <Paragraph>
              <strong>Description:</strong> {product?.description}
            </Paragraph>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default HomeProductDetailsPage;
