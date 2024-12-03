import { includes } from "@/utils/polyfills";

export interface Country {
  name: string;
  code: string;
  iso: string;
}

export interface LinkProps {
  id: number;
  href: string;
  label: string;
  icon?: boolean;
}

export interface Product {
  rating: number;
  Detail: string;
  images: string[];
  warranty: string;
  sizeGuide: string;
  productSKU: string;
  ProductName: string;
  ProductSizes: any[];
  productBrand: string;
  reviewsCount: number;
  ProductColour: any[];
  ProductImage: string;
  availability: string;
  ProductFittings: any[];
  ProductFeatures: any[];
  addToWatchlist: string;
  productCategory: string;
  ProductID: number | string;
  ProductActualPrice: number;
  ProductSellingPrice: number;
  recommended_products: any[];
  price: { minPrice: number; maxPrice: number };
  colorOptions: { color: string; hex: string }[];
  shippingDetails: {
    returnPeriod: number;
    freeDelivery: { threshold: number; label: string };
  };
}

export interface Cart {
  Size: object;
  Color: object;
  Fitting: object;
  createdAt: Date;
  Quantity: number;
  EndPrice: number;
  ID: string | number;
  Description: string;
  CategoryData: object;
  ListingImage: string;
  DiscountedPrice?: number;
  CalculatedPrice?: number;
  FinalPrice: string | number;
  CustomisationDetails?: object;
}
