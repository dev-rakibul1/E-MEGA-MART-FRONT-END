"use client";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import { FC, useCallback } from "react";

// Styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import "./ImageView.css";

// Type for props
type IProps = {
  data?: {
    images?: string[];
  };
  width?: string | number;
  height?: string | number;
  className?: string;
};

const ImagePreview: FC<IProps> = ({
  data,
  width = "100%",
  height = "auto",
  className = "",
}) => {
  const images = data?.images;

  const onInit = useCallback((detail: any) => {
    if (detail?.instance) {
      detail.instance.openGallery();
    }
  }, []);

  if (!images || images.length === 0) return null;

  const dynamicEl = images.map((img, index) => ({
    src: img,
    thumb: img,
    subHtml: `<div class="lightGallery-captions"><h4>Image ${
      index + 1
    }</h4></div>`,
  }));

  // Convert numeric width/height to pixel values
  const containerWidth = typeof width === "number" ? `${width}px` : width;
  const containerHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      className={`gallery-container ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
        maxWidth: "100%",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LightGallery
        onInit={onInit}
        plugins={[lgZoom, lgThumbnail]}
        closable={false}
        showMaximizeIcon={true}
        slideDelay={400}
        thumbWidth={120}
        thumbHeight="90px"
        thumbMargin={6}
        appendSubHtmlTo=".lg-item"
        dynamic
        dynamicEl={dynamicEl}
        mode="lg-fade"
        containerStyle={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
        elementClassNames="custom-gallery"
      />
    </div>
  );
};

export default ImagePreview;
