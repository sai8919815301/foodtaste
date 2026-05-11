import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden min-h-screen">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md dark:bg-background/80 border-b-[0.5px] border-outline-variant dark:border-on-secondary-fixed-variant">
        <div className="flex justify-between items-center px-margin-desktop py-gutter max-w-container-max mx-auto">
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 duration-200">menu</span>
            <Link href="/admin"><h1 className="text-headline-md font-headline-md tracking-widest text-primary dark:text-primary-fixed-dim">SILVANUS &amp; CO. ADMIN</h1></Link>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-10 items-center">
              <Link href="/admin" className="text-primary font-bold dark:text-primary-fixed-dim border-b border-primary text-label-md font-label-md cursor-pointer hover:tracking-widest transition-all duration-300">Dashboard</Link>
              <Link href="/admin/inventory" className="text-on-surface-variant dark:text-surface-variant text-label-md font-label-md cursor-pointer hover:tracking-widest transition-all duration-300">Inventory</Link>
              <Link href="/admin/orders" className="text-on-surface-variant dark:text-surface-variant text-label-md font-label-md cursor-pointer hover:tracking-widest transition-all duration-300">Orders</Link>
              <Link href="/admin/products" className="text-on-surface-variant dark:text-surface-variant text-label-md font-label-md cursor-pointer hover:tracking-widest transition-all duration-300">Products</Link>
            </nav>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 duration-200">search</span>
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
                <span className="text-primary-fixed text-[10px] font-bold">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Admin Canvas */}
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {children}
      </main>

      {/* Mobile Bottom Navigation (Visible only on mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md flex justify-around items-center py-4 border-t border-outline-variant/30 z-[60]">
        <Link href="/admin" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" data-weight="fill">dashboard</span>
          <span className="text-[10px] font-label-md">Overview</span>
        </Link>
        <Link href="/admin/inventory" className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-[10px] font-label-md">Items</span>
        </Link>
        <Link href="/admin/orders" className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="text-[10px] font-label-md">Orders</span>
        </Link>
        <div className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-label-md">Profile</span>
        </div>
      </nav>
    </div>
  );
}
