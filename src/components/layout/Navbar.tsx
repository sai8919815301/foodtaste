"use client";

import Link from "next/link";
import { useAuth } from "@/store/useAuth";
import { useCart } from "@/store/useCart";

export default function Navbar() {
  const { isAuthenticated } = useAuth();
  const { items } = useCart();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b-[0.5px] border-outline-variant">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-gutter max-w-container-max mx-auto">
        <button className="text-primary hover:scale-95 transition-all duration-200">
          <span className="material-symbols-outlined text-headline-md" data-icon="menu">menu</span>
        </button>
        <Link href="/" className="text-headline-md font-headline-md tracking-widest text-primary text-center">SILVANUS &amp; CO.</Link>
        <div className="flex gap-4 items-center">
          <nav className="hidden md:flex gap-8 items-center mr-8">
            <Link className="text-on-surface-variant text-label-md hover:tracking-widest transition-all duration-300 uppercase" href="/">Home</Link>
            <Link className="text-on-surface-variant text-label-md hover:tracking-widest transition-all duration-300 uppercase" href="/catalog">Collections</Link>
            <Link 
              className="text-on-surface-variant text-label-md hover:tracking-widest transition-all duration-300 uppercase" 
              href={isAuthenticated ? "/account" : "/auth/login"}
            >
              {isAuthenticated ? "Account" : "Login"}
            </Link>
          </nav>
          <Link href="/cart" className="text-primary hover:scale-95 transition-all duration-200 relative">
            <span className="material-symbols-outlined text-headline-md" data-icon="shopping_bag">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
