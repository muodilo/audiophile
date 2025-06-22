'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsCart3 } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

import Logo from './Logo';
import CartModal from './CartModal';
import CategoryMenu from '../components/CategoryMenu';
import { useCartCount } from '@/store/useCartStore';
import useHasHydrated from '@/hooks/useHasHydrated';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const count = useCartCount();
  const hydrated = useHasHydrated();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'HEADPHONES', href: '/category/headphones' },
    { label: 'SPEAKERS', href: '/category/speakers' },
    { label: 'EARPHONES', href: '/category/earphones' },
  ];

  return (
    <nav className="lg:px-52 px-5 bg-foreground text-white relative z-50">
      <div className="border-b border-neutral-700 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>

          <Logo />
        </div>

        <ul className="hidden md:flex items-center font-bold gap-7 text-sm tracking-widest">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? 'text-[#d87d4a] '
                      : 'text-white hover:text-[#d87d4a]/80 duration-300'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          className="relative cursor-pointer"
          onClick={() => hydrated && setOpen((o) => !o)}
        >
          <BsCart3 className="text-2xl" />
          {hydrated && count > 0 && (
            <span className="absolute -top-2 -right-2 min-w-5 h-5 flex items-center justify-center text-xs bg-[#d87d4a] rounded-full">
              {count}
            </span>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="absolute w-full md:hidden top-full left-0 right-0 bg-white text-black animate-slide-down rounded-b-xl shadow-xl">
          <CategoryMenu />
        </div>
      )}

      {hydrated && open && <CartModal />}
    </nav>
  );
}
