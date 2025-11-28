
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

interface CartState {
  items: CartItem[];


  add: (item: CartItem) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;


  subtotal: () => number;
  count: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      add: (incoming) =>
        set((state) => {
          const exists = state.items.find((i) => i.id === incoming.id);
          if (exists) {
            return {
              items: state.items.map((i) =>
                i.id === incoming.id ? { ...i, qty: i.qty + incoming.qty } : i,
              ),
            };
          }
          return { items: [...state.items, incoming] };
        }),

      increase: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i,
          ),
        })),

      decrease: (id) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.id === id ? { ...i, qty: Math.max(i.qty - 1, 1) } : i,
            )
            .filter((i) => i.qty > 0),
        })),

      remove: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

      clear: () => set({ items: [] }),

      subtotal: () =>
        get().items.reduce((t, i) => t + i.price * i.qty, 0),

      count: () => get().items.reduce((t, i) => t + i.qty, 0),
    }),
    { name: 'audiophile-cart' },
  ),
);
export const useCartSubtotal = () => useCartStore((s) => s.subtotal());
export const useCartCount = () => useCartStore((s) => s.count());
