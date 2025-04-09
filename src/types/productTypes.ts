// Product category type
export interface Category {
  name: string;
  image: string;
  link: string;
}

// Product type
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageSrc: string;
  rating: number;
  colors: number;
  isNew: boolean;
  isBestSeller: boolean;
}

// Promotion type
export interface Promotion {
  image: string;
  text: string;
  link: string;
}

// Instagram post type
export interface InstagramPost {
  id: number;
  type: "video" | "image";
  src: string;
  alt: string;
  handle: string;
}
