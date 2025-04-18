"use client";

import { IProducts } from "@/types/Common";
import { Button, Carousel, Tag, Typography } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const { Text, Title } = Typography;

type IProps = {
  featuredProducts: IProducts[];
};

const FeatureSlider = ({ featuredProducts }: IProps) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return null; // Prevents SSR mismatches

  // console.log(featuredProducts);

  return (
    <>
      {/* Hero Carousel */}
      <Carousel autoplay effect="fade" style={{ marginBottom: "24px" }}>
        {featuredProducts?.map((product: IProducts) => (
          <div
            key={product.id}
            style={{ position: "relative", height: "400px" }}
          >
            <Image
              src={product?.featureImage ? product?.featureImage : ""}
              alt={product?.name}
              width={800} // Required for next/image
              height={350}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                filter: "brightness(0.7)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "80px",
                left: "80px",
                color: "white",
                maxWidth: "50%",
              }}
            >
              <Tag
                color="orange"
                style={{ fontSize: "16px", padding: "4px 12px" }}
              >
                Featured Product
              </Tag>
              <Title level={2} style={{ color: "white", margin: "16px 0" }}>
                {product.name}
              </Title>
              <Text
                style={{
                  color: "white",
                  fontSize: "18px",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                Now at ${product.price} (Save $
                {(product.originalPrice || 0) - product.price})
              </Text>
              <Button type="primary" size="large">
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default FeatureSlider;
