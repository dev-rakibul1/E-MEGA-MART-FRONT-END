"use client";
import { products } from "@/constant/constant";
import { IMobiles } from "@/types/Common";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ProductSlider.module.css";
const { Title } = Typography;

const img =
  "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg";

type IProps = {
  data?: IMobiles;
};

const ProductSlider = ({ data }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const swiperRef = React.useRef<SwiperType>();

  const category = data?.category;

  const filterSamilCategories = products?.filter(
    (pro: IMobiles) => pro?.category === category
  );

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
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.swiperContainer}
      >
        {filterSamilCategories?.map((item: IMobiles) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <Link href={`/mobiles/details/${item?.id}`}>
              <div key={item.id}>
                <Card
                  hoverable
                  cover={
                    <Image
                      src={item?.image || img}
                      width={150}
                      height={200}
                      alt={item.name}
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
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
