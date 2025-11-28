export type ImageSet = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: ImageSet;
  cartImage: string;
  category: 'headphones' | 'speakers' | 'earphones';
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includedItems: { quantity: number; item: string }[];
  gallery: {
    first: ImageSet;
    second: ImageSet;
    third: ImageSet;
  };
  others: {
    slug: string;
    name: string;
    image: ImageSet;
  }[];
}