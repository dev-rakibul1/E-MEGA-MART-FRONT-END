"use client";
import SectionTItle from "@/components/shared/sectionTitle/SectionTItle";
import { slides } from "@/constant/constant";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeProductSlider: React.FC = () => {
  return (
    <div className="slider-container mt-50">
      <div className="box-container">
        {/* Section Title */}
        <SectionTItle
          title="Top"
          titleColor="Electronics Brands"
          btn="View All"
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} swiper-pagination-bullet-custom"></span>`,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div style={{ position: "relative", textAlign: "center" }}>
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  width={300}
                  height={150}
                  style={{ borderRadius: "8px" }}
                  priority
                />
                <div
                  style={{
                    marginTop: "10px",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    padding: "15px",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                >
                  <button
                    style={{
                      fontSize: "14px",
                      marginBottom: "5px",
                      color: slide.textColor,
                      padding: "7px 13px",
                      border: "none",
                      background: slide.btnColor,
                      borderRadius: "5px",
                      fontWeight: "400",
                    }}
                  >
                    {slide.title}
                  </button>

                  {slide?.logo ? (
                    <Image
                      src={slide.logo}
                      alt={`Slide ${slide.id}`}
                      width={300}
                      height={150}
                      style={{ maxWidth: "50px", margin: "10px 0" }}
                      priority
                    />
                  ) : (
                    <p>No image available</p>
                  )}

                  <p style={{ fontSize: "17px", color: slide.textColor }}>
                    UP to 80% OFF
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeProductSlider;
