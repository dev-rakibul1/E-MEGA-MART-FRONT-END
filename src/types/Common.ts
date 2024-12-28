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
