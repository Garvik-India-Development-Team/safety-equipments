export interface Category {
  _id: string;
  name: string;
  slug: string;
  parentId: string | null;
  order: number;
  productCount?: number;
  children?: Category[];
  level: number; // 0 = root, 1 = main, 2 = sub
}

export interface ProductSpec {
  name: string;
  value: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  categorySlug?: string;
  subcategoryId?: string;
  subcategorySlug?: string;
  images: string[];
  availability: "in_stock" | "made_to_order";
  brandId?: string;
  brandName?: string;
  certifications: string[]; // ISI, CE, ANSI
  material?: string;
  industryUse: string[];
  protectionType?: string;
  specifications: ProductSpec[];
  certificationsDetail?: string;
  applicationsIndustries?: string;
  shippingSupplyCapacity?: string;
  datasheetUrl?: string;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  logo?: string;
  productCount?: number;
}

export interface QuotationRequest {
  _id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  productId?: string;
  productName?: string;
  quantity?: string;
  message?: string;
  type: "single" | "bulk";
  status: "new" | "contacted" | "quoted" | "closed";
  createdAt: string;
}

export interface FilterOption {
  certification?: string[];
  material?: string[];
  industryUse?: string[];
  protectionType?: string[];
  brand?: string[];
}

export interface HeroSlide {
  _id: string;
  title: string;
  subtitle?: string;
  image: string;
  link?: string;
  order: number;
}
