'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';
import type { Product } from '@/types/product';
import { toast } from 'react-toastify';

export default function AddToCartPanel({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const add = useCartStore((s) => s.add);

  const handleAdd = () => {
    add({
      id: product.id,
      slug: product.slug,
      name: product.shortName,
      price: product.price,
      image: product.cartImage,
      qty,
    });

    toast.success(`${product.shortName} added to cart!`, {
      position: 'top-left',
      autoClose: 2000,
    });
  };

  return (
    <div className="flex md:flex-row flex-col items-center gap-5">
      <div className="flex overflow-hidden rounded">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="h-10 w-10 bg-neutral-200 hover:bg-neutral-300"
        >
          {'–'}
        </button>
        <div className="h-10 w-12 flex items-center justify-center bg-neutral-100">
          {qty}
        </div>
        <button
          onClick={() => setQty((q) => q + 1)}
          className="h-10 w-10 bg-neutral-200 hover:bg-neutral-300"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAdd}
        className="bg-[#d87d4a] hover:bg-[#fbaf85] text-white px-6 py-2 text-sm transition"
      >
        ADD TO CART
      </button>
    </div>
  );
}
