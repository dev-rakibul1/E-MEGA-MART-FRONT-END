"use client";

import { LightGallery as ILightGallery } from "lightgallery/lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import { useCallback, useEffect, useRef, useState } from "react";

// Import CSS for LightGallery
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import "./ImageView.css";

interface GalleryItem {
  src: string;
  thumb: string;
}

type IProps = {
  data?: {
    images?: string[];
  };
  width?: string | number;
  height?: string | number;
  className?: string;
};

export const ImagePreview = ({
  data,
  width = "100%",
  height = "450px",
  className,
}: IProps) => {
  const images = data?.images;

  const lightGalleryRef = useRef<ILightGallery | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [galleryContainer, setGalleryContainer] = useState<HTMLElement | null>(
    null
  );

  const onInit = useCallback((detail: { instance: ILightGallery }) => {
    if (detail) {
      lightGalleryRef.current = detail.instance;
      lightGalleryRef.current.openGallery();
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setGalleryContainer(containerRef.current);
    }
  }, []);

  // Convert the images array to LightGallery format
  const getGalleryItems = (): GalleryItem[] => {
    if (!images || images.length === 0) {
      // Fallback to default images if no images are provided
      return [
        {
          src: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
          thumb:
            "https://images.pexels.com/photos/1716763/pexels-photo-1716763.jpeg",
        },
        {
          src: "https://images.pexels.com/photos/15286/pexels-photo.jpg",
          thumb:
            "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg",
        },
      ];
    }

    return images.map((imageUrl) => ({
      src: imageUrl,
      thumb: imageUrl, // Using the same image for thumbnail for simplicity
      // If you have separate thumbnails, you would use them here instead
    }));
  };

  return (
    <div className={`App ${className}`} style={{ width }}>
      <div
        style={{ height, backgroundColor: "white" }}
        ref={containerRef}
      ></div>
      {galleryContainer && (
        <LightGallery
          container={galleryContainer}
          onInit={onInit}
          plugins={[lgZoom, lgThumbnail]}
          dynamic={true}
          dynamicEl={getGalleryItems()}
          mode="lg-fade"
        />
      )}
    </div>
  );
};
