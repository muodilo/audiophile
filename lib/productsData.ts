import rawProductsData from '@/data/products.json';
import type { ProductsFile } from '@/lib/types/products-file';

export const productsData: ProductsFile = rawProductsData as ProductsFile;