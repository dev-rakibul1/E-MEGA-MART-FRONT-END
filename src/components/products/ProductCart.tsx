"use client";

import { ThemeColors } from "@/theme/color";
import "./Product.css";

import { IProduct } from "@/types/Common";
import { Typography } from "antd";
const { Text, Paragraph } = Typography;

const ProductCart = ({ product }: { product: IProduct }) => {
  console.log(product);

  // discount amount
  const originalAmount = product?.price || 0;
  const discountPercentage = product?.discount || 0;
  const discountAmount = (originalAmount * discountPercentage) / 100;
  const finalSaveAmount: number = originalAmount - discountAmount;

  return (
    <div
      className="cart-grid-children"
      style={{ border: `1px solid ${ThemeColors.colorBorder}` }}
    >
      {/* Image */}
      <div
        className="product-cart-image"
        style={{ background: ThemeColors.colorPrimaryLight }}
      >
        <img src={product?.imageUrl} alt="product-image" />
      </div>

      {/* Content */}
      <div className="product-cart-content">
        <article>
          <Paragraph style={{ fontWeight: "500", fontSize: "19px" }}>
            {product?.name}
          </Paragraph>
          <Paragraph
            style={{
              fontWeight: "500",
              fontSize: "19px",
              marginTop: "-15px",
            }}
          >
            ₹{finalSaveAmount.toFixed(2)}{" "}
            <del style={{ fontWeight: "300" }}>₹{product?.price}</del>
          </Paragraph>
          <div
            className="cart-save-amount"
            style={{ borderTop: `1px solid ${ThemeColors.colorBorder}` }}
          >
            <Paragraph
              style={{
                color: ThemeColors.colorSuccess,
                fontSize: "19px",
                fontWeight: "500",
                margin: "0",
                padding: "0",
              }}
            >
              Save - ₹{discountAmount.toFixed(2)}{" "}
            </Paragraph>
          </div>
        </article>
      </div>

      {/* Discount content */}
      <div
        className="product-discount-area"
        style={{
          background: ThemeColors.colorPrimary,
          color: ThemeColors.bgWhite,
        }}
      >
        <Text
          style={{
            color: ThemeColors.bgWhite,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {product?.discount}% <br /> OFF
        </Text>
      </div>
    </div>
  );
};

export default ProductCart;
