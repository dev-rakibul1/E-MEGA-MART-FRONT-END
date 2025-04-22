"use client";

import { products } from "@/constant/constant";
import { IProducts } from "@/types/Common";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ProductSlider.module.css";

const { Title } = Typography;

const fallbackImg =
  "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg";

type IProps = {
  data?: IProducts;
};

const ProductSlider = ({ data }: IProps) => {
  const swiperRef = React.useRef<SwiperType>();
  const pathName = usePathname();
  const category = data?.category;

  const filteredProducts = products?.filter(
    (pro: IProducts) => pro?.category === category
  );

  // ✅ Get the first segment of the route: e.g. 'watch' from '/watch/details/123'
  const getPageTitle = () => {
    const segments = pathName.split("/").filter(Boolean);
    return segments[0] || "products";
  };

  return (
    <div className={styles.container}>
      <Title level={3}>You may also like</Title>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.swiperContainer}
      >
        {filteredProducts?.map((item: IProducts) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <Link href={`/${getPageTitle()}/details/${item?.id}`}>
              <Card
                hoverable
                cover={
                  <Image
                    src={item?.image || fallbackImg}
                    width={150}
                    height={200}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "297px",
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <Card.Meta
                  title={item.name}
                  description={
                    <>
                      <div style={{ marginBottom: 8 }}>
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#1890ff",
                          }}
                        >
                          ${item?.price.toFixed(2)}
                        </span>
                        {item?.originalPrice && (
                          <span
                            style={{
                              textDecoration: "line-through",
                              color: "#888",
                              marginLeft: 8,
                            }}
                          >
                            ${item?.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <Button
                        type="primary"
                        block
                        icon={<ShoppingCartOutlined />}
                      >
                        Add to Cart
                      </Button>
                    </>
                  }
                />
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
