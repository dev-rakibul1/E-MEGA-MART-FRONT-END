export type IThemeColors = {
  colorPrimary: string;
  colorPrimaryLight: string;
  colorPrimaryDark: string;
  colorSecondary: string;
  colorTextPrimary: string;
  colorTextSecondary: string;
  colorTextLight: string;
  colorBorder: string;
  colorShadow: string;
  colorSuccess: string;
  colorWarning: string;
  colorError: string;
  colorInfo: string;
  colorText: string;
  colorHighlight: string;
  colorAccent: string;
  colorOverlay: string;
  colorDeep: string;
  colorCustom: string;
  bgWhite: string;
};

export const role = "admin";

export type IProduct = {
  _id: string;
  model: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
  rating?: number;
  brand?: string;
  createdAt: string;
  updatedAt?: string;
  discount?: number;
  variants?: Variant[];
  tags?: string[];
  isFeatured?: boolean;
  weight?: number;
  isAvailable: boolean;
  quantity?: number;
};

// type Variant = {
//   imei?: string;
//   name: string;
//   price: number;
//   stock: number;
// };

export type ICategory = {
  _id: string;
  category: string;
  description?: string;
  imageUrl?: string;
  productsCount: number;
  isTopCategory?: boolean;
  createdAt: string;
  updatedAt: string;
};

// Type for Daily Offer
export type IDailyOffer = {
  _id: string;
  category?: string;
  description?: string;
  offer: string;
  imageUrl?: string;
  isDailyOffer: boolean;
  createdAt: string;
  updatedAt: string;
};

export const footer01 = [
  "Staples",
  "Beverages",
  "Personal Care",
  "Home Care",
  "Baby Care",
  "Vegetables & Fruits",
  "Snacks & Foods",
  "Dairy & Bakery",
];
export const footer02 = [
  "About Us",
  "Terms & Conditions",
  "FAQ",
  "Privacy Policy",
  "E-waste Policy",
  "Cancellation & Return Policy",
];

export interface ISlide {
  id: number;
  title: string;
  description: string;
  image: string;
  btnColor: string;
  textColor: string;
  logo: string;
}

export interface ITopSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  topTitle: string;
}

// product type
// export interface IProducts {
//   id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   discount?: number;
//   rating: number;
//   reviewCount: number;
//   image: string;
//   category: string;
//   brand: string;
//   stock: number;
//   isNew?: boolean;
//   isFeatured?: boolean;
//   isBestSeller?: boolean;
//   tags?: string[];
//   featureImage: string;
// }

// Product types
export interface Variant {
  id: number;
  imeiNumber: string;
  color: string;
  ram?: string;
  rom?: string;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  date: string; // Date in string format
  title: string;
  content: string;
  verified: boolean;
}

export interface Answer {
  id: string;
  user: string;
  answer: string;
  date: string; // Date in string format
}

export interface faq {
  id: string;
  user: string;
  question: string;
  answers: Answer[];
  date: string; // Date in string format
}

export interface IProducts {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewsCount: number;
  stock: number;
  category: string;
  brand: string;
  isNew: boolean;
  isFeatured: boolean;
  tags?: string[];
  isBestSeller: boolean;
  variants?: Variant[];
  description: string;
  features?: string[];
  images?: string[];
  image: string;
  featureImage?: string;
  reviews?: Review[];
  faqs?: faq[];

  // Watch
  displayType?: string;
  os?: string;
  batteryLife?: number;
  waterResistance?: boolean;
  cellular?: boolean;
  healthFeatures?: string[];
  colorOptions?: string[];
}
