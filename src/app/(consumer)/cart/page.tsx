'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/store/useCart';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getCartTotal } = useCart();
  
  const subtotal = getCartTotal();
  const insurance = subtotal > 0 ? 450 : 0;
  const total = subtotal + insurance;

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="font-body-md text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-4">Your Selection</h1>
            <p className="text-on-surface-variant font-body-lg max-w-xl">Each Silvanus &amp; Co. timepiece is a testament to the quiet enduring spirit of the forest. Refined, intentional, and singular.</p>
          </div>
          {/* Tab Switcher */}
          <div className="flex gap-12 border-b border-outline-variant w-full md:w-auto">
            <button className="pb-4 text-label-md text-primary font-bold border-b-2 border-primary tracking-widest uppercase">
              MY BAG ({cartCount})
            </button>
            <button className="pb-4 text-label-md text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase">
              WISHLIST (0)
            </button>
          </div>
        </div>
        
        {items.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-outline-variant rounded-xl">
            <span className="material-symbols-outlined text-outline text-6xl mb-4 block">shopping_basket</span>
            <h2 className="text-headline-sm text-primary mb-4">Your bag is empty</h2>
            <p className="text-on-surface-variant mb-8">Explore our collections to find your perfect timepiece.</p>
            <Link href="/catalog" className="inline-block bg-primary text-on-primary py-4 px-12 rounded-full text-label-md tracking-widest hover:tracking-widest transition-all">
              BROWSE COLLECTIONS
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-12">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row gap-8 group border border-outline-variant p-4">
                  <div className="w-full md:w-64 h-80 overflow-hidden bg-surface-container-low">
                    <img 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      src={item.image}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-label-sm text-on-secondary-fixed-variant uppercase tracking-widest mb-2 block">
                          {item.options?.collection || 'Collection'}
                        </span>
                        <h3 className="text-headline-sm font-headline-sm text-primary mb-1">{item.name}</h3>
                        <p className="text-body-md text-on-surface-variant">
                          {item.options?.details || 'Standard Edition'}
                        </p>
                      </div>
                      <p className="text-headline-sm font-headline-sm text-primary">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-8 border-t border-outline-variant pt-4">
                      <div className="flex items-center gap-6">
                        <button 
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center border border-outline rounded-full hover:bg-primary hover:text-white transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">remove</span>
                        </button>
                        <span className="text-label-md font-bold">{item.quantity.toString().padStart(2, '0')}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-outline rounded-full hover:bg-primary hover:text-white transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">add</span>
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-2 text-label-sm text-on-surface-variant hover:text-error transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Delivery Estimation */}
              <div className="bg-surface-container p-6 border-l-4 border-primary">
                <h3 className="text-label-md font-bold text-primary mb-2 uppercase tracking-widest">Estimated Delivery</h3>
                <p className="text-body-md text-on-surface-variant">Arrives by <strong>Friday, May 15</strong> via Insured Worldwide Shipping.</p>
              </div>
            </div>
            
            {/* Summary Section */}
            <div className="lg:col-span-4">
              <div className="bg-surface-container-low p-8 sticky top-32">
                <h2 className="text-headline-sm font-headline-sm text-primary mb-8 pb-4 border-b border-outline-variant">Order Summary</h2>
                
                {/* Coupon Code Input */}
                <div className="mb-6 flex gap-2">
                  <input type="text" placeholder="Coupon Code" className="flex-1 bg-background border border-outline-variant p-3 focus:outline-none focus:border-primary text-body-md"/>
                  <button className="bg-outline-variant text-on-surface px-4 py-3 text-label-sm uppercase tracking-widest hover:bg-outline transition-colors">Apply</button>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-body-md text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-body-md text-on-surface-variant">
                    <span>Bespoke Delivery</span>
                    <span>Complimentary</span>
                  </div>
                  <div className="flex justify-between text-body-md text-on-surface-variant">
                    <span>Insurance</span>
                    <span>${insurance.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex justify-between items-baseline mb-12">
                  <span className="text-label-md font-bold text-primary tracking-widest uppercase">Total</span>
                  <span className="text-headline-md font-headline-md text-primary">${total.toLocaleString()}</span>
                </div>
                <Link href="/checkout" className="block w-full bg-primary text-on-primary py-5 text-center text-label-md tracking-widest hover:tracking-[0.15em] transition-all duration-300 mb-4 uppercase">
                  Proceed to Checkout
                </Link>
                <div className="flex items-center gap-3 justify-center text-label-sm text-on-secondary-fixed-variant">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  INSURED WORLDWIDE SHIPPING
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
