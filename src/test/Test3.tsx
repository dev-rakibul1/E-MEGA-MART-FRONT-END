// type IProps = {
//   data?: IMobiles;
// };

// const ImagePreview = ({ data }: IProps) => {
//   const images = data?.images;

//   if (!images || images.length === 0) return null;

// "use client";

// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import LightGallery from "lightgallery/react";
// import { FC, useCallback, useEffect, useRef } from "react";

// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lightgallery.css";

// // import "./style.scss"; // Your custom styles (optional)

// // Dummy header component
// const HeaderComponent: FC = () => (
//   <h2 style={{ textAlign: "center" }}>Welcome to the Gallery</h2>
// );

// export const AppDemo: FC<{ name: string }> = ({ name }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const onInit = useCallback((detail: any) => {
//     if (detail && detail.instance) {
//       detail.instance.openGallery();
//     }
//   }, []);

//   useEffect(() => {
//     // You can add logic here if you want to manipulate `containerRef` after mount
//   }, []);

//   return (
//     <div className="App" style={{ width: "600px" }}>
//       <HeaderComponent />
//       <div style={{ height: "800px" }} ref={containerRef}></div>
//       <LightGallery
//         container={containerRef.current || undefined}
//         onInit={onInit}
//         plugins={[lgZoom, lgThumbnail]}
//         closable={false}
//         showMaximizeIcon={true}
//         slideDelay={400}
//         thumbWidth={130}
//         thumbHeight="100px"
//         thumbMargin={6}
//         appendSubHtmlTo=".lg-item"
//         dynamic
//         dynamicEl={[
//           {
//             src: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?auto=format&fit=crop&w=1400&q=80",
//             responsive:
//               "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1542103749-8ef59b94f47e?auto=format&fit=crop&w=800&q=80 800",
//             thumb:
//               "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?auto=format&fit=crop&w=240&q=80",
//             subHtml: `<div class="lightGallery-captions"><h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4><p>Published on November 13, 2018</p></div>`,
//           },
//           {
//             src: "https://images.unsplash.com/photo-1473876988266-ca0860a443b8?auto=format&fit=crop&w=1400&q=80",
//             responsive:
//               "https://images.unsplash.com/photo-1473876988266-ca0860a443b8?auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1473876988266-ca0860a443b8?auto=format&fit=crop&w=800&q=80 800",
//             thumb:
//               "https://images.unsplash.com/photo-1473876988266-ca0860a443b8?auto=format&fit=crop&w=240&q=80",
//             subHtml: `<div class="lightGallery-captions"><h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4><p>Published on September 14, 2016</p></div>`,
//           },
//           {
//             src: "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?auto=format&fit=crop&w=1400&q=80",
//             responsive:
//               "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1588953936179-d2a4734c5490?auto=format&fit=crop&w=800&q=80 800",
//             thumb:
//               "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?auto=format&fit=crop&w=240&q=80",
//             subHtml: `<div class="lightGallery-captions"><h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4><p>Published on May 8, 2020</p></div>`,
//           },
//           {
//             src: "https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?auto=format&fit=crop&w=1400&q=80",
//             responsive:
//               "https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?auto=format&fit=crop&w=800&q=80 800",
//             thumb:
//               "https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?auto=format&fit=crop&w=240&q=80",
//             subHtml: `<div class="lightGallery-captions"><h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4><p>Description of the slide 4</p></div>`,
//           },
//           {
//             src: "https://images.unsplash.com/photo-1543059509-6d53dbee1728?auto=format&fit=crop&w=1400&q=80",
//             responsive:
//               "https://images.unsplash.com/photo-1543059509-6d53dbee1728?auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1543059509-6d53dbee1728?auto=format&fit=crop&w=800&q=80 800",
//             thumb:
//               "https://images.unsplash.com/photo-1543059509-6d53dbee1728?auto=format&fit=crop&w=240&q=80",
//             subHtml: `<div class="lightGallery-captions"><h4>Photo by <a href="https://unsplash.com/@charlespostiaux">Charles Postiaux</a></h4><p>Published on November 24, 2018</p></div>`,
//           },
//         ]}
//       />
//     </div>
//   );
// };
