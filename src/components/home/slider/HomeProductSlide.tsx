"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTItle from "@/components/shared/sectionTitle/SectionTItle";
import { slides } from "@/constant/constant";
import { ISlide } from "@/types/Common";
import "../Home.css";

const HomeProductSlider: React.FC = () => {
  return (
    <div className="slider-container mt-50">
      <div className="box-container">
        {/* section title */}
        <SectionTItle
          title="Top"
          titleColor="Electronics Brands"
          btn="View All"
        />

        <Swiper
          modules={[Pagination, Autoplay]} // Removed Navigation
          spaceBetween={20}
          slidesPerView={3} // Show 3 slides at once
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} swiper-pagination-bullet-custom"></span>`, // Custom dots
          }}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Pauses autoplay when mouse enters the swiper
          }}
          speed={800} // Set speed for smooth transitions
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {slides.map((slide: ISlide) => (
            <SwiperSlide key={slide.id}>
              <div
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                  padding: "20px",
                  color: "#fff",
                }}
              >
                <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
                  {slide.topTitle}
                </h4>
                <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
                  {slide.title}
                </h1>
                <p style={{ fontSize: "14px" }}>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeProductSlider;
