'use client';

import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PiShoppingCartThin } from "react-icons/pi";

export default function CartModal() {
  const {
    items,
    increase,
    decrease,
    // remove,
    clear,
    subtotal: getSubtotal,
  } = useCartStore();

  const router = useRouter();
  const subtotal = getSubtotal();

  if (!items.length) {
    return (
      <div className="absolute top-20 right-5 flex items-center flex-col bg-white p-6 rounded-lg shadow-xl w-80 z-50">
        <p className=" text-center text-neutral-500 font-semibold">Your cart is empty </p>
        <PiShoppingCartThin className='text-black/60 text-9xl'/>
      </div>
    );
  }

  return (
    <div className="absolute top-20 right-5 bg-white p-6 rounded-lg shadow-xl w-80 z-50">
      <div className="flex justify-between items-center mb-6">
        <p className="font-bold text-lg text-neutral-500">CART ({items.length})</p>
        <button onClick={clear} className="text-sm underline text-gray-500">
          Remove All
        </button>
      </div>

      <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-neutral-500">
                  $ {item.price.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center bg-neutral-100 rounded">
              <button
                className="px-2 text-sm text-neutral-500"
                onClick={() => decrease(item.id)}
              >
                –
              </button>
              <span className="px-3 text-sm text-neutral-500">{item.qty}</span>
              <button
                className="px-2 text-sm text-neutral-500"
                onClick={() => increase(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6 mb-5">
        <p className="text-sm text-neutral-500 tracking-widest">TOTAL</p>
        <p className="font-bold text-lg text-neutral-500">
          $ {subtotal.toLocaleString(undefined, { minimumFractionDigits: 0 })}
        </p>
      </div>

      <button
        onClick={() => router.push('/checkout')}
        className="bg-[#d87d4a] hover:bg-[#fbaf85] transition text-white w-full py-3 text-sm tracking-wider uppercase"
      >
        Checkout
      </button>
    </div>
  );
}
