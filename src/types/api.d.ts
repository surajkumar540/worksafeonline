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
  ID?: string;
  rating: number;
  Detail: string;
  Style?: string;
  images: string[];
  warranty: string;
  sizeGuide: string;
  productSKU: string;
  ProductName: string;
  productBrand: string;
  reviewsCount: number;
  ProductImage: string;
  availability: string;
  addToWatchlist: string;
  productCategory: string;
  ProductSizes: unknown[];
  ProductColour: unknown[];
  ProductFeatures: unknown[];
  ProductFittings: unknown[];
  ProductID: number | string;
  ProductActualPrice: number;
  ProductSellingPrice: number;
  recommended_products: unknown[];
  ProductPricingByColourSizeFit?: unknown[];
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
