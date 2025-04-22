import { IProducts, ISlide, ITopSlide } from "@/types/Common";
export const avatar = "https://i.pravatar.cc/150?img=7";

export const slides: ISlide[] = [
  {
    id: 1,
    title: "APPLE",
    textColor: "#fff",
    btnColor: "#494949",
    logo: "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735538769/Group_48_eggjrq.png",
    description: "Up to 80% OFF",
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735537927/phone-banner-3_apfhyg.png",
  },
  {
    id: 2,
    textColor: "#000",
    btnColor: "#F6De8d",
    logo: "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735538769/Group_48_eggjrq.png",
    title: "REALME",
    description: "Track Your Steps & Calories",
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735537928/phone-banner-2_fruyy4.png",
  },

  {
    id: 3,
    textColor: "#000",
    btnColor: "#ffd1b0",
    logo: "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735538769/mi-xiaomi_1_n7zhf0.png",
    title: "XIAOMI",
    description: "Up to 80% Off on Wearables",
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735537928/phone-banner-1_pcjdhl.png",
  },
  {
    id: 4,
    title: "APPLE",
    textColor: "#fff",
    btnColor: "#494949",
    logo: "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735538769/Group_48_eggjrq.png",
    description: "Up to 80% OFF",
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735537927/phone-banner-3_apfhyg.png",
  },

  {
    id: 5,
    textColor: "#000",
    btnColor: "#ffd1b0",
    logo: "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735538769/mi-xiaomi_1_n7zhf0.png",
    title: "XIAOMI",
    description: "Up to 80% Off on Wearables",
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735537928/phone-banner-1_pcjdhl.png",
  },
];

export const TopSlides: ITopSlide[] = [
  {
    id: 1,
    topTitle: "Best Deal Online on Smart Watches",
    title: "Smart Wearable",
    description: "Up to 80% OFF",
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735469255/Rectangle_5_kdg7xg.jpg",
  },
  {
    id: 2,
    topTitle: "Stay Fit with Advanced Fitness Gear",
    title: "New Fitness Gear",
    description: "Track Your Steps & Calories",
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735478816/freepik__candid-image-photography-natural-textures-highly-r__65264_yo3f20.jpg",
  },
  {
    id: 3,
    topTitle: "Exclusive Offers Just for You",
    title: "Exclusive Offers",
    description: "Up to 80% Off on Wearables",
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735478816/freepik__candid-image-photography-natural-textures-highly-r__65265_nmvigh.jpg",
  },
  {
    id: 4,
    topTitle: "Revolutionize Your Fitness Journey",
    title: "Fitness Revolution",
    description: "Smart Watches at Incredible Prices",
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735478816/freepik__candid-image-photography-natural-textures-highly-r__65263_czpyjp.jpg",
  },
  {
    id: 5,
    topTitle: "Explore the Latest in Wearable Tech",
    title: "Tech Evolution",
    description: "Innovative Smart Watches & Trackers",
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735478815/freepik__candid-image-photography-natural-textures-highly-r__65261_ffyurd.jpg",
  },
];

// Sample product data
// ------------------------------

export const products: IProducts[] = [
  {
    id: "ipad-pro-m3",
    name: "iPad Pro M3 12.9-inch",
    price: 1099.99,
    originalPrice: 1299.99,
    discount: 15,
    rating: 4.9,
    reviewsCount: 753,
    stock: 18,
    category: "Tablets",
    brand: "Apple",
    isNew: true,
    isFeatured: true,
    tags: ["M3 Chip", "ProMotion", "Thunderbolt"],
    isBestSeller: true,
    variants: [
      {
        id: 1,
        imeiNumber: "PHSK74189654",
        ram: "8",
        rom: "256",
        color: "sky blue",
      },
    ],
    description:
      "The iPad Pro with M3 chip brings desktop-class performance to the tablet form factor, featuring a stunning Liquid Retina XDR display and powerful creative capabilities.",
    features: [
      "12.9-inch Liquid Retina XDR display with ProMotion and True Tone",
      "M3 chip with 10-core CPU and 10-core GPU",
      "12MP Wide and 10MP Ultra Wide cameras with LiDAR Scanner",
      "Thunderbolt/USB 4 port for high-speed connections",
      "All-day battery life with fast charging",
    ],
    images: [
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
      "https://images.pexels.com/photos/1716763/pexels-photo-1716763.jpeg",
      "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg",
      "https://images.pexels.com/photos/1716763/pexels-photo-1716763.jpeg",
    ],
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
    featureImage:
      "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg",
    reviews: [
      {
        id: "1",
        user: "Michael J.",
        avatar: "",
        rating: 5,
        date: "March 25, 2025",
        title: "Desktop replacement in tablet form",
        content:
          "The M3 chip is incredibly powerful. I've replaced my laptop with this for most tasks including photo and video editing. The XDR display is absolutely stunning.",
        verified: true,
      },
      {
        id: "2",
        user: "Sarah L.",
        avatar: "",
        rating: 5,
        date: "March 22, 2025",
        title: "Perfect for digital artists",
        content:
          "The combination of Apple Pencil and this display makes digital art creation a joy. The M3 chip handles large Procreate canvases without any lag.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "David K.",
        question: "Does this support the new Apple Pencil Pro?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 is compatible with both the Apple Pencil Pro and the Apple Pencil (2nd generation).",
            date: "March 23, 2025",
          },
        ],
        date: "March 21, 2025",
      },
      {
        id: "2",
        user: "Jessica M.",
        question: "Can I connect an external display?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 supports external displays up to 6K resolution via its Thunderbolt/USB 4 port, including Apple Studio Display and Pro Display XDR.",
            date: "March 24, 2025",
          },
        ],
        date: "March 23, 2025",
      },
    ],
  },
  {
    id: "xbox-series-x",
    name: "Xbox Series X Console",
    price: 499.99,
    originalPrice: 499.99,
    discount: 0,
    rating: 4.8,
    reviewsCount: 2872,
    stock: 7,
    category: "Gaming",
    brand: "Microsoft",
    isNew: false,
    isFeatured: true,
    tags: ["4K Gaming", "120fps", "Ray Tracing"],
    isBestSeller: true,
    variants: [
      {
        id: 1,
        imeiNumber: "PHSK788985296",
        ram: "1",
        rom: "16",
        color: "pink",
      },
    ],
    description:
      "The Xbox Series X delivers true 4K gaming at up to 120 frames per second, with lightning-fast load times and ray tracing for the most immersive console gaming experience.",
    features: [
      "True 4K gaming at up to 120 frames per second",
      "Custom AMD Zen 2 processor with 12 teraflops of power",
      "1TB custom SSD for lightning-fast load times",
      "Hardware-accelerated ray tracing for realistic lighting",
      "Xbox Game Pass compatibility with thousands of games",
    ],
    images: [
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg",
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg",
    ],
    image: "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg",
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735469255/Rectangle_5_kdg7xg.jpg",
    reviews: [
      {
        id: "1",
        user: "Robert S.",
        avatar: "",
        rating: 5,
        date: "March 24, 2025",
        title: "Next-gen gaming at its finest",
        content:
          "The load times are almost non-existent compared to previous generation. Ray tracing makes games like Cyberpunk look incredible. Game Pass is the best value in gaming.",
        verified: true,
      },
      {
        id: "2",
        user: "Lisa J.",
        avatar: "",
        rating: 4,
        date: "March 21, 2025",
        title: "Great but limited storage",
        content:
          "The performance is amazing but the 1TB storage fills up quickly with modern games. Recommend getting the expansion card.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "Mark P.",
        question: "Can I play my Xbox One games on this console?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the Xbox Series X is backward compatible with thousands of games from Xbox One, Xbox 360, and original Xbox. Many games receive automatic enhancements on Series X.",
            date: "March 22, 2025",
          },
        ],
        date: "March 20, 2025",
      },
      {
        id: "2",
        user: "Nicole C.",
        question: "How many controllers come with the console?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "The Xbox Series X comes with one wireless controller. Additional controllers can be purchased separately.",
            date: "March 23, 2025",
          },
        ],
        date: "March 22, 2025",
      },
    ],
  },
  {
    id: "samsung-odyssey-g9",
    name: "Samsung Odyssey G9 49-inch Curved Gaming Monitor",
    price: 1299.99,
    originalPrice: 1599.99,
    discount: 19,
    rating: 4.7,
    reviewsCount: 895,
    stock: 3,
    category: "Computer Accessories",
    brand: "Samsung",
    isNew: false,
    isFeatured: true,
    tags: ["QLED", "240Hz", "1ms Response", "G-Sync"],
    isBestSeller: false,
    variants: [
      {
        id: 1,
        imeiNumber: "PHSK789185296",
        ram: "2",
        rom: "64",
        color: "blue",
      },
    ],
    description:
      "The Samsung Odyssey G9 features an immersive 1000R curved QLED panel, 240Hz refresh rate, and 1ms response time for the ultimate gaming experience across a super ultrawide 49-inch screen.",
    features: [
      "49-inch 5120x1440 Super Ultrawide QLED Display",
      "1000R Curved Screen for maximum immersion",
      "240Hz refresh rate with 1ms (GTG) response time",
      "NVIDIA G-Sync and AMD FreeSync Premium Pro",
      "HDR1000 with Quantum Dot technology",
    ],
    images: [
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
      "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg",
      "https://images.pexels.com/photos/4069199/pexels-photo-4069199.jpeg",
      "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg",
    ],
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735469255/Rectangle_5_kdg7xg.jpg",
    reviews: [
      {
        id: "1",
        user: "Thomas B.",
        avatar: "",
        rating: 5,
        date: "March 23, 2025",
        title: "Like having two 27-inch monitors without the bezel",
        content:
          "This monitor has completely transformed my setup. The curve is perfect for bringing everything into view, and the color accuracy is excellent for both gaming and professional work.",
        verified: true,
      },
      {
        id: "2",
        user: "Jennifer K.",
        avatar: "",
        rating: 4,
        date: "March 20, 2025",
        title: "Amazing but requires powerful hardware",
        content:
          "Make sure your GPU can handle this resolution. Needed to upgrade my graphics card to fully appreciate the monitor. Colors and refresh rate are fantastic.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "Andrew L.",
        question: "What inputs does this monitor have?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "The Odyssey G9 has 1x DisplayPort 1.4, 2x HDMI 2.0, and 2x USB 3.0 ports. For 240Hz at full resolution, DisplayPort is recommended.",
            date: "March 21, 2025",
          },
        ],
        date: "March 19, 2025",
      },
      {
        id: "2",
        user: "Michelle T.",
        question: "Does this monitor support picture-by-picture mode?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "Yes, the Samsung Odyssey G9 supports Picture-by-Picture (PBP) mode, allowing you to display two input sources side by side at the same time.",
            date: "March 22, 2025",
          },
        ],
        date: "March 21, 2025",
      },
    ],
  },
  {
    id: "sonos-arc-soundbar",
    name: "Sonos Arc Premium Smart Soundbar",
    price: 799.99,
    originalPrice: 899.99,
    discount: 11,
    rating: 4.8,
    reviewsCount: 1356,
    stock: 16,
    category: "Audio",
    brand: "Sonos",
    isNew: false,
    isFeatured: false,
    tags: ["Dolby Atmos", "Voice Control", "Trueplay"],
    isBestSeller: false,
    variants: [
      {
        id: 1,
        imeiNumber: "PHSK74d185296",
        ram: "4",
        rom: "256",
        color: "green",
      },
    ],
    description:
      "The Sonos Arc premium smart soundbar delivers immersive Dolby Atmos sound, voice control with Alexa and Google Assistant, and seamless integration with the Sonos ecosystem.",
    features: [
      "Dolby Atmos technology with 3D surround sound",
      "Eleven Class-D amplifiers with precisely tuned drivers",
      "Voice control with Amazon Alexa and Google Assistant",
      "Trueplay tuning technology for optimized sound",
      "HDMI eARC for high-quality audio from your TV",
    ],
    images: [
      "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg",
      "https://images.pexels.com/photos/376966/pexels-photo-376966.jpeg",
      "https://images.pexels.com/photos/3817675/pexels-photo-3817675.jpeg",
      "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg",
    ],
    image: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg",
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735469255/Rectangle_5_kdg7xg.jpg",
    reviews: [
      {
        id: "1",
        user: "Daniel R.",
        avatar: "",
        rating: 5,
        date: "March 24, 2025",
        title: "Cinema-quality sound at home",
        content:
          "The Dolby Atmos makes a dramatic difference for movies. You can actually hear sounds moving above and around you. Integration with other Sonos speakers was effortless.",
        verified: true,
      },
      {
        id: "2",
        user: "Katherine P.",
        avatar: "",
        rating: 4,
        date: "March 21, 2025",
        title: "Great but expensive ecosystem",
        content:
          "The soundbar itself is excellent, but to get the full surround experience you'll want to add the sub and rear speakers, which makes it quite an investment.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "Paul S.",
        question: "Do I need other Sonos speakers for this to work?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "No, the Sonos Arc works perfectly as a standalone soundbar. However, you can expand your system by adding a Sonos Sub and/or Sonos One SL speakers for surround sound.",
            date: "March 22, 2025",
          },
        ],
        date: "March 20, 2025",
      },
      {
        id: "2",
        user: "Elizabeth W.",
        question: "Can I stream music directly to this soundbar?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "Yes, the Sonos Arc can stream music directly from over 100 streaming services using the Sonos app. It also supports AirPlay 2, Spotify Connect, and voice commands.",
            date: "March 23, 2025",
          },
        ],
        date: "March 22, 2025",
      },
    ],
  },
  {
    id: "philips-hue-starter-kit",
    name: "Philips Hue White and Color Ambiance Starter Kit",
    price: 179.99,
    originalPrice: 199.99,
    discount: 10,
    rating: 4.7,
    reviewsCount: 2184,
    stock: 25,
    category: "mobile",
    brand: "Philips",
    isNew: false,
    isFeatured: false,
    tags: ["Smart Lighting", "Voice Control", "16 Million Colors"],
    isBestSeller: true,
    variants: [
      {
        id: 1,
        imeiNumber: "PHSK74185296",
        ram: "6",
        rom: "256",
        color: "pink",
      },

      {
        id: 2,
        imeiNumber: "AFAW4848",
        ram: "8",
        rom: "256",
        color: "orange",
      },
    ],
    description:
      "Transform your home with the Philips Hue White and Color Ambiance Starter Kit, featuring smart bulbs capable of 16 million colors and the Hue Bridge for seamless smart home integration.",
    features: [
      "Three E26 smart bulbs with 16 million colors and adjustable white light",
      "Philips Hue Bridge for controlling up to 50 lights",
      "Works with Amazon Alexa, Google Assistant, and Apple HomeKit",
      "Create timers, routines, and scenes for any occasion",
      "Control via app or voice commands",
    ],
    images: [
      "https://images.pexels.com/photos/1034651/pexels-photo-1034651.jpeg",
      "https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg",
      "https://images.pexels.com/photos/5081918/pexels-photo-5081918.jpeg",
      "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg",
    ],
    image: "https://images.pexels.com/photos/1034651/pexels-photo-1034651.jpeg",
    featureImage:
      "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg",
    reviews: [
      {
        id: "1",
        user: "Matthew C.",
        avatar: "",
        rating: 5,
        date: "March 25, 2025",
        title: "Game changer for home ambiance",
        content:
          "These lights have transformed my living space. The app is intuitive, and setting up scenes for different activities like movie watching or dinner parties is simple. Worth every penny.",
        verified: true,
      },
      {
        id: "2",
        user: "Hannah B.",
        avatar: "",
        rating: 4,
        date: "March 22, 2025",
        title: "Great but expensive ecosystem",
        content:
          "The starter kit is excellent, but adding additional bulbs gets expensive. The integration with Google Home works perfectly. Colors are vibrant and the whites are adjustable from cool to warm.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "Jason K.",
        question: "Can I control these lights when I'm away from home?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, with the Philips Hue Bridge connected to your home network, you can control your lights from anywhere using the Hue app on your smartphone.",
            date: "March 23, 2025",
          },
        ],
        date: "March 21, 2025",
      },
      {
        id: "2",
        user: "Melissa N.",
        question: "Do these bulbs work with standard lamps and fixtures?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "Yes, the bulbs in this starter kit use the standard E26 base that fits most common household fixtures and lamps in North America.",
            date: "March 24, 2025",
          },
        ],
        date: "March 23, 2025",
      },
    ],
  },
  {
    id: "philips-hue-starter-kita",
    name: "Philips Hue White and Color Ambiance Starter Kit",
    price: 179.99,
    originalPrice: 199.99,
    discount: 10,
    rating: 4.7,
    reviewsCount: 2184,
    stock: 25,
    category: "Smart Home",
    brand: "Philips",
    isNew: false,
    isFeatured: true,
    tags: ["Smart Lighting", "Voice Control", "16 Million Colors"],
    isBestSeller: true,
    variants: [
      {
        id: 1,
        imeiNumber: "PHSK74185296",
        ram: "6",
        rom: "256",
        color: "pink",
      },

      {
        id: 2,
        imeiNumber: "AFAW4848",
        ram: "8",
        rom: "256",
        color: "orange",
      },
    ],
    description:
      "Transform your home with the Philips Hue White and Color Ambiance Starter Kit, featuring smart bulbs capable of 16 million colors and the Hue Bridge for seamless smart home integration.",
    features: [
      "Three E26 smart bulbs with 16 million colors and adjustable white light",
      "Philips Hue Bridge for controlling up to 50 lights",
      "Works with Amazon Alexa, Google Assistant, and Apple HomeKit",
      "Create timers, routines, and scenes for any occasion",
      "Control via app or voice commands",
    ],
    images: [
      "https://images.pexels.com/photos/1034651/pexels-photo-1034651.jpeg",
      "https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg",
      "https://images.pexels.com/photos/5081918/pexels-photo-5081918.jpeg",
      "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg",
    ],
    image: "https://images.pexels.com/photos/1034651/pexels-photo-1034651.jpeg",
    featureImage:
      "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg",
    reviews: [
      {
        id: "1",
        user: "Matthew C.",
        avatar: "",
        rating: 5,
        date: "March 25, 2025",
        title: "Game changer for home ambiance",
        content:
          "These lights have transformed my living space. The app is intuitive, and setting up scenes for different activities like movie watching or dinner parties is simple. Worth every penny.",
        verified: true,
      },
      {
        id: "2",
        user: "Hannah B.",
        avatar: "",
        rating: 4,
        date: "March 22, 2025",
        title: "Great but expensive ecosystem",
        content:
          "The starter kit is excellent, but adding additional bulbs gets expensive. The integration with Google Home works perfectly. Colors are vibrant and the whites are adjustable from cool to warm.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "Jason K.",
        question: "Can I control these lights when I'm away from home?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, with the Philips Hue Bridge connected to your home network, you can control your lights from anywhere using the Hue app on your smartphone.",
            date: "March 23, 2025",
          },
        ],
        date: "March 21, 2025",
      },
      {
        id: "2",
        user: "Melissa N.",
        question: "Do these bulbs work with standard lamps and fixtures?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "Yes, the bulbs in this starter kit use the standard E26 base that fits most common household fixtures and lamps in North America.",
            date: "March 24, 2025",
          },
        ],
        date: "March 23, 2025",
      },
    ],
  },

  {
    id: "apple-watch-s8",
    name: "Apple Watch Series 8",
    price: 399.99,
    originalPrice: 429.99,
    discount: 7,
    rating: 4.8,
    reviewsCount: 1245,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743330063/1_pvnhdc.jpg",
    brand: "Apple",
    os: "watchOS",
    features: ["ECG", "Blood Oxygen", "Fall Detection", "Always-On Display"],
    displayType: "Retina",
    batteryLife: 1.5,
    waterResistance: true,
    cellular: true,
    healthFeatures: ["Heart Rate", "Sleep Tracking", "Activity Tracking"],
    colorOptions: ["Midnight", "Starlight", "Product Red"],
    isFeatured: true,
    isBestSeller: true,

    reviews: [
      {
        id: "1",
        user: "Robert S.",
        avatar: "",
        rating: 5,
        date: "March 24, 2025",
        title: "Next-gen gaming at its finest",
        content:
          "The load times are almost non-existent compared to previous generation. Ray tracing makes games like Cyberpunk look incredible. Game Pass is the best value in gaming.",
        verified: true,
      },
      {
        id: "2",
        user: "Lisa J.",
        avatar: "",
        rating: 4,
        date: "March 21, 2025",
        title: "Great but limited storage",
        content:
          "The performance is amazing but the 1TB storage fills up quickly with modern games. Recommend getting the expansion card.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "Mark P.",
        question: "Can I play my Xbox One games on this console?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the Xbox Series X is backward compatible with thousands of games from Xbox One, Xbox 360, and original Xbox. Many games receive automatic enhancements on Series X.",
            date: "March 22, 2025",
          },
        ],
        date: "March 20, 2025",
      },
      {
        id: "2",
        user: "Nicole C.",
        question: "How many controllers come with the console?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "The Xbox Series X comes with one wireless controller. Additional controllers can be purchased separately.",
            date: "March 23, 2025",
          },
        ],
        date: "March 22, 2025",
      },
    ],
    images: [
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg",
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735469255/Rectangle_5_kdg7xg.jpg",
    stock: 0,
    category: "watch",
    isNew: false,
    description: "",
  },
  {
    id: "galaxy-watch5",
    name: "Samsung Galaxy Watch 5",
    price: 279.99,
    originalPrice: 299.99,
    discount: 7,
    rating: 4.6,
    reviewsCount: 876,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1744967482/1628523512_T500-Plus-Pro-Smart-Watch_utipwv.jpg",
    brand: "Samsung",
    os: "Wear OS",
    features: [
      "Bioelectrical Impedance",
      "Sleep Coaching",
      "Advanced Workout Tracking",
    ],
    displayType: "AMOLED",
    batteryLife: 2,
    waterResistance: true,
    cellular: false,
    healthFeatures: ["Heart Rate", "Blood Pressure", "Body Composition"],
    colorOptions: ["Graphite", "Silver", "Pink Gold"],
    isNew: true,
    stock: 0,
    category: "watch",
    isFeatured: false,
    isBestSeller: false,
    description: "",

    reviews: [
      {
        id: "1",
        user: "Robert S.",
        avatar: "",
        rating: 5,
        date: "March 24, 2025",
        title: "Next-gen gaming at its finest",
        content:
          "The load times are almost non-existent compared to previous generation. Ray tracing makes games like Cyberpunk look incredible. Game Pass is the best value in gaming.",
        verified: true,
      },
      {
        id: "2",
        user: "Lisa J.",
        avatar: "",
        rating: 4,
        date: "March 21, 2025",
        title: "Great but limited storage",
        content:
          "The performance is amazing but the 1TB storage fills up quickly with modern games. Recommend getting the expansion card.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "Mark P.",
        question: "Can I play my Xbox One games on this console?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the Xbox Series X is backward compatible with thousands of games from Xbox One, Xbox 360, and original Xbox. Many games receive automatic enhancements on Series X.",
            date: "March 22, 2025",
          },
        ],
        date: "March 20, 2025",
      },
      {
        id: "2",
        user: "Nicole C.",
        question: "How many controllers come with the console?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "The Xbox Series X comes with one wireless controller. Additional controllers can be purchased separately.",
            date: "March 23, 2025",
          },
        ],
        date: "March 22, 2025",
      },
    ],
    images: [
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg",
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735469255/Rectangle_5_kdg7xg.jpg",
  },
  {
    id: "fitbit-sense2",
    name: "Fitbit Sense 2",
    price: 299.95,
    originalPrice: 329.95,
    discount: 9,
    rating: 4.5,
    reviewsCount: 543,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1744967489/1700482104_watch_9_max_4_kpfmal.jpg",
    brand: "Fitbit",
    os: "Fitbit OS",
    features: ["Stress Management", "Skin Temperature", "EDA Scan"],
    displayType: "AMOLED",
    batteryLife: 6,
    waterResistance: true,
    cellular: false,
    healthFeatures: ["Heart Rate", "SpO2", "Sleep Score"],
    colorOptions: ["Shadow Grey", "Lunar White"],
    isBestSeller: true,
    stock: 0,
    category: "watch",
    isNew: false,
    isFeatured: false,
    description: "",
    reviews: [
      {
        id: "1",
        user: "Robert S.",
        avatar: "",
        rating: 5,
        date: "March 24, 2025",
        title: "Next-gen gaming at its finest",
        content:
          "The load times are almost non-existent compared to previous generation. Ray tracing makes games like Cyberpunk look incredible. Game Pass is the best value in gaming.",
        verified: true,
      },
      {
        id: "2",
        user: "Lisa J.",
        avatar: "",
        rating: 4,
        date: "March 21, 2025",
        title: "Great but limited storage",
        content:
          "The performance is amazing but the 1TB storage fills up quickly with modern games. Recommend getting the expansion card.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "Mark P.",
        question: "Can I play my Xbox One games on this console?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the Xbox Series X is backward compatible with thousands of games from Xbox One, Xbox 360, and original Xbox. Many games receive automatic enhancements on Series X.",
            date: "March 22, 2025",
          },
        ],
        date: "March 20, 2025",
      },
      {
        id: "2",
        user: "Nicole C.",
        question: "How many controllers come with the console?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "The Xbox Series X comes with one wireless controller. Additional controllers can be purchased separately.",
            date: "March 23, 2025",
          },
        ],
        date: "March 22, 2025",
      },
    ],
    images: [
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg",
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735469255/Rectangle_5_kdg7xg.jpg",
  },
  {
    id: "garmin-venu2",
    name: "Garmin Venu 2",
    price: 349.99,
    originalPrice: 399.99,
    discount: 13,
    rating: 4.7,
    reviewsCount: 765,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1744967489/1700482104_watch_9_max_4_kpfmal.jpg",
    brand: "Garmin",
    os: "Garmin OS",
    features: ["Pulse Ox", "Body Battery", "Advanced Sleep Monitoring"],
    displayType: "AMOLED",
    batteryLife: 11,
    waterResistance: true,
    cellular: false,
    healthFeatures: ["Heart Rate", "Respiration", "Hydration Tracking"],
    colorOptions: ["Slate", "Silver"],
    isFeatured: true,
    stock: 0,
    category: "watch",
    isNew: false,
    isBestSeller: false,
    description: "",
    reviews: [
      {
        id: "1",
        user: "Robert S.",
        avatar: "",
        rating: 5,
        date: "March 24, 2025",
        title: "Next-gen gaming at its finest",
        content:
          "The load times are almost non-existent compared to previous generation. Ray tracing makes games like Cyberpunk look incredible. Game Pass is the best value in gaming.",
        verified: true,
      },
      {
        id: "2",
        user: "Lisa J.",
        avatar: "",
        rating: 4,
        date: "March 21, 2025",
        title: "Great but limited storage",
        content:
          "The performance is amazing but the 1TB storage fills up quickly with modern games. Recommend getting the expansion card.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "Mark P.",
        question: "Can I play my Xbox One games on this console?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the Xbox Series X is backward compatible with thousands of games from Xbox One, Xbox 360, and original Xbox. Many games receive automatic enhancements on Series X.",
            date: "March 22, 2025",
          },
        ],
        date: "March 20, 2025",
      },
      {
        id: "2",
        user: "Nicole C.",
        question: "How many controllers come with the console?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "The Xbox Series X comes with one wireless controller. Additional controllers can be purchased separately.",
            date: "March 23, 2025",
          },
        ],
        date: "March 22, 2025",
      },
    ],
    images: [
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg",
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735469255/Rectangle_5_kdg7xg.jpg",
  },
  {
    id: "huawei-watch-gt3",
    name: "Huawei Watch GT 3",
    price: 199.99,
    originalPrice: 229.99,
    discount: 13,
    rating: 4.4,
    reviewsCount: 432,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1744967506/1700482104_watch_9_max_wcicmd.jpg",
    brand: "Huawei",
    os: "HarmonyOS",
    features: ["TruSeen 5.0+", "TruSleep 2.0", "Workout Modes"],
    displayType: "AMOLED",
    batteryLife: 14,
    waterResistance: true,
    cellular: false,
    healthFeatures: ["Heart Rate", "SpO2", "Stress Monitoring"],
    colorOptions: ["Black", "Brown", "Silver"],
    isNew: true,
    stock: 0,
    category: "watch",
    isFeatured: false,
    isBestSeller: false,
    description: "",
    reviews: [
      {
        id: "1",
        user: "Robert S.",
        avatar: "",
        rating: 5,
        date: "March 24, 2025",
        title: "Next-gen gaming at its finest",
        content:
          "The load times are almost non-existent compared to previous generation. Ray tracing makes games like Cyberpunk look incredible. Game Pass is the best value in gaming.",
        verified: true,
      },
      {
        id: "2",
        user: "Lisa J.",
        avatar: "",
        rating: 4,
        date: "March 21, 2025",
        title: "Great but limited storage",
        content:
          "The performance is amazing but the 1TB storage fills up quickly with modern games. Recommend getting the expansion card.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "Mark P.",
        question: "Can I play my Xbox One games on this console?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the Xbox Series X is backward compatible with thousands of games from Xbox One, Xbox 360, and original Xbox. Many games receive automatic enhancements on Series X.",
            date: "March 22, 2025",
          },
        ],
        date: "March 20, 2025",
      },
      {
        id: "2",
        user: "Nicole C.",
        question: "How many controllers come with the console?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "The Xbox Series X comes with one wireless controller. Additional controllers can be purchased separately.",
            date: "March 23, 2025",
          },
        ],
        date: "March 22, 2025",
      },
    ],
    images: [
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg",
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735469255/Rectangle_5_kdg7xg.jpg",
  },
  {
    id: "amazfit-gtr4",
    name: "Amazfit GTR 4",
    price: 199.99,
    originalPrice: 229.99,
    discount: 13,
    rating: 4.3,
    reviewsCount: 321,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1744967500/1744712990_x10_pro_max_chvzsa.jpg",
    brand: "Amazfit",
    os: "Proprietary",
    features: ["150+ Sports Modes", "Bluetooth Calls", "Zepp OS 2.0"],
    displayType: "AMOLED",
    batteryLife: 14,
    waterResistance: true,
    cellular: false,
    healthFeatures: ["Heart Rate", "Blood Oxygen", "Sleep Monitoring"],
    colorOptions: ["Infinite Black", "Racetrack Grey"],
    stock: 0,
    category: "watch",
    isNew: false,
    isFeatured: false,
    isBestSeller: false,
    description: "",
    reviews: [
      {
        id: "1",
        user: "Robert S.",
        avatar: "",
        rating: 5,
        date: "March 24, 2025",
        title: "Next-gen gaming at its finest",
        content:
          "The load times are almost non-existent compared to previous generation. Ray tracing makes games like Cyberpunk look incredible. Game Pass is the best value in gaming.",
        verified: true,
      },
      {
        id: "2",
        user: "Lisa J.",
        avatar: "",
        rating: 4,
        date: "March 21, 2025",
        title: "Great but limited storage",
        content:
          "The performance is amazing but the 1TB storage fills up quickly with modern games. Recommend getting the expansion card.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "Mark P.",
        question: "Can I play my Xbox One games on this console?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the Xbox Series X is backward compatible with thousands of games from Xbox One, Xbox 360, and original Xbox. Many games receive automatic enhancements on Series X.",
            date: "March 22, 2025",
          },
        ],
        date: "March 20, 2025",
      },
      {
        id: "2",
        user: "Nicole C.",
        question: "How many controllers come with the console?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "The Xbox Series X comes with one wireless controller. Additional controllers can be purchased separately.",
            date: "March 23, 2025",
          },
        ],
        date: "March 22, 2025",
      },
    ],
    images: [
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg",
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735469255/Rectangle_5_kdg7xg.jpg",
  },

  {
    id: "denim-jacket",
    name: "Classic Denim Jacket",
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    rating: 4.7,
    reviewsCount: 342,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294086/benjamin-r-SZoTel1Y4qc-unsplash_sfubon.jpg",
    category: "clothes",
    clotheType: "Jeans",
    clotheSize: ["S", "M", "L", "XL"],
    clotheColor: ["Blue", "Black"],
    brand: "Levi's",
    stock: 15,
    isFeatured: true,
    isBestSeller: true,
    clotheSeason: ["Spring", "Fall"],
    isNew: false,
    description: "",

    features: [
      "12.9-inch Liquid Retina XDR display with ProMotion and True Tone",
      "M3 chip with 10-core CPU and 10-core GPU",
      "12MP Wide and 10MP Ultra Wide cameras with LiDAR Scanner",
      "Thunderbolt/USB 4 port for high-speed connections",
      "All-day battery life with fast charging",
    ],
    images: [
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294078/ryan-hoffman-u6n1HrW0sdQ-unsplash_ldxpiu.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/junko-nakase-Q-72wa9-7Dg-unsplash_e7svdr.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294079/ryan-hoffman-czLSitCJ3Dw-unsplash_b8vso7.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294087/rubens-nguyen-Fy7RX0gHZRM-unsplash_mrmcwb.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/tuananh-blue-4u3_pQklVwc-unsplash_bwczmz.jpg",
    reviews: [
      {
        id: "1",
        user: "Michael J.",
        avatar: "",
        rating: 5,
        date: "March 25, 2025",
        title: "Desktop replacement in tablet form",
        content:
          "The M3 chip is incredibly powerful. I've replaced my laptop with this for most tasks including photo and video editing. The XDR display is absolutely stunning.",
        verified: true,
      },
      {
        id: "2",
        user: "Sarah L.",
        avatar: "",
        rating: 5,
        date: "March 22, 2025",
        title: "Perfect for digital artists",
        content:
          "The combination of Apple Pencil and this display makes digital art creation a joy. The M3 chip handles large Procreate canvases without any lag.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "David K.",
        question: "Does this support the new Apple Pencil Pro?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 is compatible with both the Apple Pencil Pro and the Apple Pencil (2nd generation).",
            date: "March 23, 2025",
          },
        ],
        date: "March 21, 2025",
      },
      {
        id: "2",
        user: "Jessica M.",
        question: "Can I connect an external display?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 supports external displays up to 6K resolution via its Thunderbolt/USB 4 port, including Apple Studio Display and Pro Display XDR.",
            date: "March 24, 2025",
          },
        ],
        date: "March 23, 2025",
      },
    ],
  },
  {
    id: "summer-dress",
    name: "Floral Summer Dress",
    price: 39.99,
    originalPrice: 49.99,
    discount: 20,
    rating: 4.8,
    reviewsCount: 215,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294104/benjamin-r-NxtxmmHc2OE-unsplash_sejmpd.jpg",
    category: "clothes",
    clotheType: "Dresses",
    clotheSize: ["XS", "S", "M"],
    clotheColor: ["Pink", "White", "Yellow"],
    brand: "Zara",
    stock: 8,
    isNew: true,
    clotheSeason: ["Summer"],
    isFeatured: false,
    isBestSeller: false,
    description: "",

    features: [
      "12.9-inch Liquid Retina XDR display with ProMotion and True Tone",
      "M3 chip with 10-core CPU and 10-core GPU",
      "12MP Wide and 10MP Ultra Wide cameras with LiDAR Scanner",
      "Thunderbolt/USB 4 port for high-speed connections",
      "All-day battery life with fast charging",
    ],
    images: [
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294078/ryan-hoffman-u6n1HrW0sdQ-unsplash_ldxpiu.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/junko-nakase-Q-72wa9-7Dg-unsplash_e7svdr.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294079/ryan-hoffman-czLSitCJ3Dw-unsplash_b8vso7.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294087/rubens-nguyen-Fy7RX0gHZRM-unsplash_mrmcwb.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/tuananh-blue-4u3_pQklVwc-unsplash_bwczmz.jpg",
    reviews: [
      {
        id: "1",
        user: "Michael J.",
        avatar: "",
        rating: 5,
        date: "March 25, 2025",
        title: "Desktop replacement in tablet form",
        content:
          "The M3 chip is incredibly powerful. I've replaced my laptop with this for most tasks including photo and video editing. The XDR display is absolutely stunning.",
        verified: true,
      },
      {
        id: "2",
        user: "Sarah L.",
        avatar: "",
        rating: 5,
        date: "March 22, 2025",
        title: "Perfect for digital artists",
        content:
          "The combination of Apple Pencil and this display makes digital art creation a joy. The M3 chip handles large Procreate canvases without any lag.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "David K.",
        question: "Does this support the new Apple Pencil Pro?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 is compatible with both the Apple Pencil Pro and the Apple Pencil (2nd generation).",
            date: "March 23, 2025",
          },
        ],
        date: "March 21, 2025",
      },
      {
        id: "2",
        user: "Jessica M.",
        question: "Can I connect an external display?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 supports external displays up to 6K resolution via its Thunderbolt/USB 4 port, including Apple Studio Display and Pro Display XDR.",
            date: "March 24, 2025",
          },
        ],
        date: "March 23, 2025",
      },
    ],
  },
  {
    id: "sneakers",
    name: "Running Sneakers",
    price: 89.99,
    originalPrice: 99.99,
    discount: 10,
    rating: 4.6,
    reviewsCount: 178,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294125/keagan-henman-xPJYL0l5Ii8-unsplash_ab956o.jpg",
    category: "clothes",
    clotheType: "Shoes",
    clotheSize: ["8", "9", "10", "11"],
    clotheColor: ["White", "Black", "Blue"],
    brand: "Nike",
    stock: 5,
    clotheSeason: ["All Season"],
    isNew: false,
    isFeatured: false,
    isBestSeller: false,
    description: "",

    features: [
      "12.9-inch Liquid Retina XDR display with ProMotion and True Tone",
      "M3 chip with 10-core CPU and 10-core GPU",
      "12MP Wide and 10MP Ultra Wide cameras with LiDAR Scanner",
      "Thunderbolt/USB 4 port for high-speed connections",
      "All-day battery life with fast charging",
    ],
    images: [
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294078/ryan-hoffman-u6n1HrW0sdQ-unsplash_ldxpiu.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/junko-nakase-Q-72wa9-7Dg-unsplash_e7svdr.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294079/ryan-hoffman-czLSitCJ3Dw-unsplash_b8vso7.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294087/rubens-nguyen-Fy7RX0gHZRM-unsplash_mrmcwb.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/tuananh-blue-4u3_pQklVwc-unsplash_bwczmz.jpg",
    reviews: [
      {
        id: "1",
        user: "Michael J.",
        avatar: "",
        rating: 5,
        date: "March 25, 2025",
        title: "Desktop replacement in tablet form",
        content:
          "The M3 chip is incredibly powerful. I've replaced my laptop with this for most tasks including photo and video editing. The XDR display is absolutely stunning.",
        verified: true,
      },
      {
        id: "2",
        user: "Sarah L.",
        avatar: "",
        rating: 5,
        date: "March 22, 2025",
        title: "Perfect for digital artists",
        content:
          "The combination of Apple Pencil and this display makes digital art creation a joy. The M3 chip handles large Procreate canvases without any lag.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "David K.",
        question: "Does this support the new Apple Pencil Pro?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 is compatible with both the Apple Pencil Pro and the Apple Pencil (2nd generation).",
            date: "March 23, 2025",
          },
        ],
        date: "March 21, 2025",
      },
      {
        id: "2",
        user: "Jessica M.",
        question: "Can I connect an external display?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 supports external displays up to 6K resolution via its Thunderbolt/USB 4 port, including Apple Studio Display and Pro Display XDR.",
            date: "March 24, 2025",
          },
        ],
        date: "March 23, 2025",
      },
    ],
  },
  {
    id: "formal-shirt",
    name: "Slim Fit Formal Shirt",
    price: 29.99,
    originalPrice: 39.99,
    discount: 26,
    rating: 4.5,
    reviewsCount: 432,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294087/rubens-nguyen-Fy7RX0gHZRM-unsplash_mrmcwb.jpg",
    category: "clothes",
    clotheType: "Shirts",
    clotheSize: ["S", "M", "L"],
    clotheColor: ["White", "Blue", "Gray"],
    brand: "H&M",
    stock: 12,
    isBestSeller: true,
    clotheSeason: ["All Season"],
    isNew: false,
    isFeatured: false,
    description: "",

    features: [
      "12.9-inch Liquid Retina XDR display with ProMotion and True Tone",
      "M3 chip with 10-core CPU and 10-core GPU",
      "12MP Wide and 10MP Ultra Wide cameras with LiDAR Scanner",
      "Thunderbolt/USB 4 port for high-speed connections",
      "All-day battery life with fast charging",
    ],
    images: [
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294078/ryan-hoffman-u6n1HrW0sdQ-unsplash_ldxpiu.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/junko-nakase-Q-72wa9-7Dg-unsplash_e7svdr.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294079/ryan-hoffman-czLSitCJ3Dw-unsplash_b8vso7.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294087/rubens-nguyen-Fy7RX0gHZRM-unsplash_mrmcwb.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/tuananh-blue-4u3_pQklVwc-unsplash_bwczmz.jpg",
    reviews: [
      {
        id: "1",
        user: "Michael J.",
        avatar: "",
        rating: 5,
        date: "March 25, 2025",
        title: "Desktop replacement in tablet form",
        content:
          "The M3 chip is incredibly powerful. I've replaced my laptop with this for most tasks including photo and video editing. The XDR display is absolutely stunning.",
        verified: true,
      },
      {
        id: "2",
        user: "Sarah L.",
        avatar: "",
        rating: 5,
        date: "March 22, 2025",
        title: "Perfect for digital artists",
        content:
          "The combination of Apple Pencil and this display makes digital art creation a joy. The M3 chip handles large Procreate canvases without any lag.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "David K.",
        question: "Does this support the new Apple Pencil Pro?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 is compatible with both the Apple Pencil Pro and the Apple Pencil (2nd generation).",
            date: "March 23, 2025",
          },
        ],
        date: "March 21, 2025",
      },
      {
        id: "2",
        user: "Jessica M.",
        question: "Can I connect an external display?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 supports external displays up to 6K resolution via its Thunderbolt/USB 4 port, including Apple Studio Display and Pro Display XDR.",
            date: "March 24, 2025",
          },
        ],
        date: "March 23, 2025",
      },
    ],
  },
  {
    id: "yoga-pants",
    name: "High-Waist Yoga Pants",
    price: 34.99,
    originalPrice: 44.99,
    discount: 22,
    rating: 4.8,
    reviewsCount: 89,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294091/benjamin-r-KF-q_SGqswg-unsplash_yctvuq.jpg",
    category: "clothes",
    clotheType: "Activewear",
    clotheSize: ["XS", "S", "M", "L"],
    clotheColor: ["Black", "Gray", "Blue"],
    brand: "Lululemon",
    stock: 20,
    isFeatured: true,
    clotheSeason: ["All Season"],
    isNew: false,
    isBestSeller: false,
    description: "",

    features: [
      "12.9-inch Liquid Retina XDR display with ProMotion and True Tone",
      "M3 chip with 10-core CPU and 10-core GPU",
      "12MP Wide and 10MP Ultra Wide cameras with LiDAR Scanner",
      "Thunderbolt/USB 4 port for high-speed connections",
      "All-day battery life with fast charging",
    ],
    images: [
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294078/ryan-hoffman-u6n1HrW0sdQ-unsplash_ldxpiu.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/junko-nakase-Q-72wa9-7Dg-unsplash_e7svdr.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294079/ryan-hoffman-czLSitCJ3Dw-unsplash_b8vso7.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294087/rubens-nguyen-Fy7RX0gHZRM-unsplash_mrmcwb.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/tuananh-blue-4u3_pQklVwc-unsplash_bwczmz.jpg",
    reviews: [
      {
        id: "1",
        user: "Michael J.",
        avatar: "",
        rating: 5,
        date: "March 25, 2025",
        title: "Desktop replacement in tablet form",
        content:
          "The M3 chip is incredibly powerful. I've replaced my laptop with this for most tasks including photo and video editing. The XDR display is absolutely stunning.",
        verified: true,
      },
      {
        id: "2",
        user: "Sarah L.",
        avatar: "",
        rating: 5,
        date: "March 22, 2025",
        title: "Perfect for digital artists",
        content:
          "The combination of Apple Pencil and this display makes digital art creation a joy. The M3 chip handles large Procreate canvases without any lag.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "David K.",
        question: "Does this support the new Apple Pencil Pro?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 is compatible with both the Apple Pencil Pro and the Apple Pencil (2nd generation).",
            date: "March 23, 2025",
          },
        ],
        date: "March 21, 2025",
      },
      {
        id: "2",
        user: "Jessica M.",
        question: "Can I connect an external display?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 supports external displays up to 6K resolution via its Thunderbolt/USB 4 port, including Apple Studio Display and Pro Display XDR.",
            date: "March 24, 2025",
          },
        ],
        date: "March 23, 2025",
      },
    ],
  },
  {
    id: "graphic-tee",
    name: "Vintage Graphic T-Shirt",
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    rating: 4.4,
    reviewsCount: 287,
    image:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294106/sincerely-media-9ShY-Tq70Mc-unsplash_naofeo.jpg",
    category: "clothes",
    clotheType: "T-Shirts",
    clotheSize: ["S", "M", "L", "XL"],
    clotheColor: ["Black", "White", "Red"],
    brand: "Urban Outfitters",
    stock: 7,
    clotheSeason: ["Summer"],
    isNew: false,
    isFeatured: false,
    isBestSeller: false,
    description: "",

    features: [
      "12.9-inch Liquid Retina XDR display with ProMotion and True Tone",
      "M3 chip with 10-core CPU and 10-core GPU",
      "12MP Wide and 10MP Ultra Wide cameras with LiDAR Scanner",
      "Thunderbolt/USB 4 port for high-speed connections",
      "All-day battery life with fast charging",
    ],
    images: [
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294078/ryan-hoffman-u6n1HrW0sdQ-unsplash_ldxpiu.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/junko-nakase-Q-72wa9-7Dg-unsplash_e7svdr.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294079/ryan-hoffman-czLSitCJ3Dw-unsplash_b8vso7.jpg",
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294087/rubens-nguyen-Fy7RX0gHZRM-unsplash_mrmcwb.jpg",
    ],
    featureImage:
      "https://res.cloudinary.com/dd7uhuhan/image/upload/v1745294083/tuananh-blue-4u3_pQklVwc-unsplash_bwczmz.jpg",
    reviews: [
      {
        id: "1",
        user: "Michael J.",
        avatar: "",
        rating: 5,
        date: "March 25, 2025",
        title: "Desktop replacement in tablet form",
        content:
          "The M3 chip is incredibly powerful. I've replaced my laptop with this for most tasks including photo and video editing. The XDR display is absolutely stunning.",
        verified: true,
      },
      {
        id: "2",
        user: "Sarah L.",
        avatar: "",
        rating: 5,
        date: "March 22, 2025",
        title: "Perfect for digital artists",
        content:
          "The combination of Apple Pencil and this display makes digital art creation a joy. The M3 chip handles large Procreate canvases without any lag.",
        verified: true,
      },
    ],
    faqs: [
      {
        id: "1",
        user: "David K.",
        question: "Does this support the new Apple Pencil Pro?",
        answers: [
          {
            id: "1-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 is compatible with both the Apple Pencil Pro and the Apple Pencil (2nd generation).",
            date: "March 23, 2025",
          },
        ],
        date: "March 21, 2025",
      },
      {
        id: "2",
        user: "Jessica M.",
        question: "Can I connect an external display?",
        answers: [
          {
            id: "2-1",
            user: "MegaMart Support",
            answer:
              "Yes, the iPad Pro M3 supports external displays up to 6K resolution via its Thunderbolt/USB 4 port, including Apple Studio Display and Pro Display XDR.",
            date: "March 24, 2025",
          },
        ],
        date: "March 23, 2025",
      },
    ],
  },
];
