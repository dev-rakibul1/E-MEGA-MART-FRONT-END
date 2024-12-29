"use client";
import { TopSlides } from "@/constant/constant";
import { ThemeColors } from "@/theme/color";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "../Home.css";

const FarmerSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TopSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TopSlides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = TopSlides[currentIndex];

  return (
    <div
      className="slider-parent mt-50"
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
      }}
    >
      {/* Slide */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${currentSlide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            color: "#fff",
            textAlign: "left",
          }}
        >
          {/* wrap */}
          <div className="slider-article-wrap">
            <motion.h4
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                fontSize: "22px",
                fontWeight: "500",
                textShadow: "0 2px 5px rgba(0, 0, 0, 0.7)",
              }}
            >
              {currentSlide.topTitle}
            </motion.h4>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                fontSize: "45px",
                fontWeight: "500",
                textShadow: "0 2px 5px rgba(0, 0, 0, 0.7)",
                marginTop: "15px",
              }}
            >
              {currentSlide.title}
            </motion.h1>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{
                fontSize: "19px",
                marginTop: "1rem",
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.7)",
              }}
            >
              {currentSlide.description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div
        className="slider-article-wrap"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        {TopSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`${
              currentIndex === index ? "current-dots" : "default-dots"
            }`}
            style={{}}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="prev-nav"
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: ThemeColors.bgWhite,
          color: ThemeColors.colorPrimary,
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
          width: "70px",
          height: "70px",
          opacity: ".7",
          transition: "all .3s",
        }}
      >
        <LeftOutlined />
      </button>

      {/* Next Button */}
      <button
        className="next-nav"
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: ThemeColors.bgWhite,
          color: ThemeColors.colorPrimary,
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
          width: "70px",
          height: "70px",
          transition: "all .3s",
          opacity: ".7",
        }}
      >
        <RightOutlined />
      </button>
    </div>
  );
};

export default FarmerSlider;
