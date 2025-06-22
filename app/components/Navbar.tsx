'use client';

import Logo from './Logo';
import Link from 'next/link';
import { BsCart3 } from 'react-icons/bs';
import { useState } from 'react';
import CartModal from './CartModal';
import { useCartCount } from '@/store/useCartStore';
import useHasHydrated from '@/hooks/useHasHydrated';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const count = useCartCount();
  const hydrated = useHasHydrated();
  return (
    <nav className="lg:px-52 px-5 bg-foreground text-white relative">
      <div className="border-b border-neutral-700 py-8 flex items-center justify-between">
        <Logo />
        <ul className="hidden md:flex items-center font-bold gap-7 text-sm tracking-widest">
          <li><Link className="text-[#d87d4a]" href="/">HOME</Link></li>
          <li><Link href="/category/headphones">HEADPHONES</Link></li>
          <li><Link href="/category/speakers">SPEAKERS</Link></li>
          <li><Link href="/category/earphones">EARPHONES</Link></li>
        </ul>
        <div
          className="relative cursor-pointer"
          onClick={() => hydrated && setOpen(o => !o)} 
        >
          <BsCart3 className="text-2xl" />
          {hydrated && count > 0 && (
            <span className="absolute -top-2 -right-2 min-w-5 h-5 flex items-center justify-center text-xs bg-[#d87d4a] rounded-full">
              {count}
            </span>
          )}
        </div>
      </div>
      {hydrated && open && <CartModal />}
    </nav>
  );
}
