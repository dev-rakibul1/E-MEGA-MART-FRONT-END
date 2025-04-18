// "use client";

// import { LightGallery as ILightGallery } from "lightgallery/lightgallery";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import LightGallery from "lightgallery/react";
// import { useCallback, useEffect, useRef, useState } from "react";

// // Import CSS for LightGallery
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lightgallery.css";

// // Import your custom light theme CSS
// import "./Test.css"; // Create this file with the above CSS

// interface GalleryItem {
//   src: string;
//   thumb: string;
// }

// // Type for props
// type IProps = {
//   data?: {
//     images?: string[];
//   };
//   width?: string | number;
//   height?: string | number;
//   className?: string;
// };

// export const ImagePreview = ({ data }: IProps) => {
//   const images = data?.images;

//   const lightGalleryRef = useRef<ILightGallery | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [galleryContainer, setGalleryContainer] = useState<HTMLElement | null>(
//     null
//   );

//   const onInit = useCallback((detail: { instance: ILightGallery }) => {
//     if (detail) {
//       lightGalleryRef.current = detail.instance;
//       lightGalleryRef.current.openGallery();
//     }
//   }, []);

//   useEffect(() => {
//     if (containerRef.current) {
//       setGalleryContainer(containerRef.current);
//     }
//   }, []);

//   // Real free-to-use images from Pexels
//   const dynamicEl: GalleryItem[] = [
//     {
//       src: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
//       thumb:
//         "https://images.pexels.com/photos/1716763/pexels-photo-1716763.jpeg",
//     },
//     {
//       src: "https://images.pexels.com/photos/15286/pexels-photo.jpg",
//       thumb:
//         "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg",
//     },
//     {
//       src: "https://images.pexels.com/photos/1716763/pexels-photo-1716763.jpeg",
//       thumb:
//         "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735469255/Rectangle_5_kdg7xg.jpg",
//     },
//   ];

//   return (
//     <div className="App">
//       <div
//         style={{ height: "450px", backgroundColor: "white" }}
//         ref={containerRef}
//       ></div>
//       {galleryContainer && (
//         <LightGallery
//           container={galleryContainer}
//           onInit={onInit}
//           plugins={[lgZoom, lgThumbnail]}
//           dynamic={true}
//           dynamicEl={dynamicEl}
//           mode="lg-fade" // Optional: adds a nice fade effect
//         />
//       )}
//     </div>
//   );
// };
