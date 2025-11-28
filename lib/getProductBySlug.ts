import { productsData } from './productsData';
import type { Product } from '@/types/product';

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.products.find((p) => p.slug === slug);
}