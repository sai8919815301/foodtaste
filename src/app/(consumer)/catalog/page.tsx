'use client';

import React from 'react';
import ProductFilter from '@/components/product/ProductFilter';
import { useCart } from '@/store/useCart';

export default function CatalogPage() {
  const { addItem } = useCart();

  const products = [
    {
      id: 'arboreal-chrono-cat',
      name: 'The Arboreal Chronograph',
      price: 14200,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjoHldThLLd_88eiI-_htzw8X0xXEfZZ4jZsU63mi1ECgWdKqDIux-AT1urFG6HSWKrgmIamK8V6IwKRED98IcWDPdSU7WE7WqwiIJ7sAfRHR74dVLyFBDYuxyGbB_5NRkEb9qsUAxDZ1kNh3Ru_muG164c33SQ0GKPI3jI571-U0VPXDkoiWuvNDe4P--ZcnJ_oHCCbMJE4Wimz3PwO_8Si7LfoGUez-bYBlisMZjrwbaa1SmozkB4Yl-gaZ38I_5jBsJeCLOhHuP',
      collection: 'HERITAGE COLLECTION',
      details: 'Movement: Automatic | Strap: Genuine Leather | 50m'
    },
    {
      id: 'mist-dial-luminary-cat',
      name: 'Mist Dial Luminary',
      price: 28500,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW6rW8K1Cf-HwVj9kbU8BBycbmKEH0XwnhFiDJxyYNZ4MRkVl0hUVYrDiOkpTW1HFilx0QrlSroToC3rbTB4EI3MWHckSiqKH69IECZ1d8x597D91Q0gknLlIc3ZBCwjBaR0r1Y7HeKxvitUpiQixJFd8KIZrJXzyzv2DhfAXJU86pARz_HFfOGRZEpwIxXHLTkswPDf1ZyZVKx2uDBOZ1IPRELXsxYOag4XuFre9iKp8uFygVgNfDcJwtY_--W4nCf8EyuMT5Jw0B',
      collection: 'BESPOKE SERIES',
      details: 'Movement: Manual Wind | Strap: Alligator | 30m'
    }
  ];

  const handleAddToCart = (p: typeof products[0]) => {
    addItem({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      quantity: 1,
      options: {
        collection: p.collection,
        details: p.details
      }
    });
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container">
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Hero Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-label-sm font-label-sm uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Handcrafted Excellence</span>
          <h2 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-6">The Curated Collection</h2>
          <div className="h-px w-24 bg-tertiary-fixed-dim mx-auto md:mx-0"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16">
          <ProductFilter />
          
          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-12">
              <span className="text-label-md font-label-md text-on-surface-variant">Showing {products.length} Timepieces</span>
              <div className="flex items-center gap-2 text-label-md font-label-md text-primary cursor-pointer hover:underline">
                <span>Sort by: Featured</span>
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
              {products.map((product) => (
                <div key={product.id} className="group flex flex-col items-center">
                  <div className="relative w-full aspect-[4/5] bg-surface-container-low mb-8 overflow-hidden ambient-glow group-hover:bg-surface-container transition-colors duration-500">
                    <img 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" 
                      src={product.image}
                    />
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="bg-primary text-on-primary px-6 py-3 text-label-sm font-bold rounded-full hover:tracking-widest transition-all uppercase"
                      >
                        Add to Bag
                      </button>
                      <button className="bg-background text-primary px-6 py-3 text-label-sm font-bold rounded-full hover:tracking-widest transition-all uppercase border border-primary">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <span className="text-label-sm font-label-sm text-on-surface-variant mb-2 uppercase">{product.collection}</span>
                  <h3 className="text-headline-sm font-headline-sm text-primary mb-2">{product.name}</h3>
                  <p className="text-body-md text-on-surface-variant italic mb-4 text-center">{product.details}</p>
                  <p className="text-label-md font-label-md text-primary tracking-widest font-bold">${product.price.toLocaleString()}</p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-24 flex items-center justify-center gap-8">
              <button className="text-on-surface-variant hover:text-primary flex items-center gap-2 group transition-colors">
                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span className="text-label-md font-label-md uppercase">Previous</span>
              </button>
              <div className="flex gap-4">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="w-2 h-2 bg-outline-variant rounded-full"></span>
                <span className="w-2 h-2 bg-outline-variant rounded-full"></span>
              </div>
              <button className="text-on-surface-variant hover:text-primary flex items-center gap-2 group transition-colors">
                <span className="text-label-md font-label-md uppercase">Next</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
