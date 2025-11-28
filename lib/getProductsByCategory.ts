import { productsData } from './productsData';
import type { Product } from '@/types/product';

export function getProductsByCategory(category: string): Product[] {
  return productsData.products.filter((p) => p.category === category);
}