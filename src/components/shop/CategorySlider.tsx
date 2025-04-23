"use client";

import { Button } from "antd";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { FC } from "react";

interface Props {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  getCategoryIcon: (category: string) => React.ReactNode;
}

const CategoryTabsSlider: FC<Props> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  getCategoryIcon,
}) => {
  return (
    <div style={{ marginBottom: "24px" }}>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        style={{ padding: "5px 0" }}
      >
        {categories?.map((category) => (
          <SwiperSlide
            key={category}
            style={{
              width: "auto",
              display: "inline-flex",
            }}
          >
            <Button
              type={selectedCategory === category ? "primary" : "default"}
              icon={getCategoryIcon(category)}
              onClick={() => setSelectedCategory(category)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0 16px",
                height: "40px",
                whiteSpace: "nowrap",
              }}
            >
              {category}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryTabsSlider;
