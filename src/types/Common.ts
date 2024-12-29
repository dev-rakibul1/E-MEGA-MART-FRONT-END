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
};

type Variant = {
  imei?: string;
  name: string;
  price: number;
  stock: number;
};

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
  topTitle: string;
}

export interface ITopSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  topTitle: string;
}
