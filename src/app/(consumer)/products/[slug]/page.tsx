'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/store/useCart';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { addItem } = useCart();

  const product = {
    id: params.slug || 'evergreen-gmt',
    name: 'The Evergreen GMT',
    price: 8450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmgalLAICL04uKopGbWqLsvrEmTqldnQew0ZXDJA4iCpUEoQpM2Q1PgnY5kyi7bfGOytxHFtnAjB2i4lWQGZrJL8ctqCHV5p7RQrLym2LBKfxDf42lBHnXQzpF4b5RAyQcTAwtmjP8fzgQbxW1RzOyDodRAi9-JvFY8y14enWdEUnObOUlaB8A-W1OurcTuIgAfUASeRyzz8JBe0kURKNO1GBUybbXcD4jQV9W27WzWnDleqZaDezEXKCd6Kx15mk3K619ROtImFYf',
    quantity: 1,
    options: {
      collection: 'Heritage Collection',
      details: '40mm · Bronze · Forest Green Dial'
    }
  };

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-secondary-container">
      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section / Product Gallery */}
        <section className="relative w-full h-[751px] bg-primary-container overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img alt="The Evergreen GMT" className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" src={product.image}/>
          </div>
          <div className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-background transition-colors">
            <span className="material-symbols-outlined text-primary">360</span>
            <span className="text-label-sm text-primary font-bold tracking-widest uppercase">360° View</span>
          </div>
          <div className="relative z-10 text-center px-margin-mobile mt-auto pb-12 bg-gradient-to-t from-primary-container/80 to-transparent w-full">
            <p className="text-label-sm font-label-sm text-tertiary-fixed-dim mb-2 uppercase tracking-[0.2em]">The Heritage Series</p>
            <h2 className="text-display-lg-mobile font-display-lg-mobile text-on-primary mb-4">{product.name}</h2>
            <p className="text-body-md font-body-md text-on-primary/80 max-w-sm mx-auto mb-8">A dual-time mechanical masterpiece forged for the modern wanderer.</p>
          </div>
        </section>

        {/* Product Details & CTA */}
        <section className="px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:row gap-12 max-w-container-max mx-auto bg-surface">
          <div className="flex-1">
            <div className="flex justify-between items-end border-b border-outline-variant pb-6 mb-6">
              <div>
                <h3 className="text-headline-sm font-headline-sm text-primary mb-1">Product Details</h3>
                <p className="text-label-md font-label-md text-on-surface-variant">Reference No. 1924-GRN</p>
              </div>
              <div className="text-right">
                <p className="text-headline-sm font-headline-sm text-primary">${product.price.toLocaleString()}</p>
              </div>
            </div>
            
            {/* Real-time stock & Compatibility */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-primary">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-label-sm tracking-widest font-bold uppercase">In Stock</span>
              </div>
              <span className="text-outline-variant">|</span>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">phone_iphone</span>
                <span className="text-label-sm uppercase">iOS &amp; Android Compatible</span>
              </div>
            </div>

            {/* EMI Options */}
            <div className="bg-surface-container-low p-4 mb-8 border border-outline-variant rounded flex justify-between items-center">
              <div>
                <p className="text-label-sm font-bold text-primary mb-1">Flexible Financing</p>
                <p className="text-body-sm text-on-surface-variant">Pay as low as $352/mo for 24 months with 0% APR.</p>
              </div>
              <button className="text-label-sm text-secondary font-bold hover:underline uppercase">Learn More</button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-primary text-on-primary font-label-md rounded-none flex items-center justify-center gap-3 group hover:tracking-widest transition-all duration-300 uppercase"
              >
                ADD TO CART
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              </button>
              <Link href="/compare" className="flex-1 py-4 border border-outline-variant text-primary font-label-md rounded-none hover:bg-surface-container transition-all duration-300 flex items-center justify-center gap-2 uppercase">
                <span className="material-symbols-outlined">compare_arrows</span>
                COMPARE WITH SIMILAR
              </Link>
            </div>
          </div>
        </section>

        {/* Technical Specifications (SpecsTable) */}
        <section className="px-margin-mobile py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto max-w-3xl">
            <h3 className="text-headline-md font-headline-md text-primary mb-12 text-center">Technical Specifications</h3>
            <div className="grid grid-cols-1 gap-y-8">
              <div className="flex justify-between items-center py-4 border-b border-outline-variant">
                <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">CASE</span>
                <span className="text-body-md font-body-md text-primary">40mm Hand-Polished Bronze</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-outline-variant">
                <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">DISPLAY</span>
                <span className="text-body-md font-body-md text-primary">1.4" AMOLED LTPO, Sapphire Glass</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-outline-variant">
                <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">BATTERY LIFE</span>
                <span className="text-body-md font-body-md text-primary">Up to 72 Hours (Smart Mode)</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-outline-variant">
                <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">SENSORS</span>
                <span className="text-body-md font-body-md text-primary">ECG, Heart Rate, SpO2, Altimeter</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-outline-variant">
                <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">WATER RESISTANCE</span>
                <span className="text-body-md font-body-md text-primary">100 Meters (10 ATM)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pieces */}
        <section className="py-24 bg-background">
          <div className="px-margin-mobile mb-10 flex justify-between items-end max-w-container-max mx-auto">
            <h3 className="text-headline-sm font-headline-sm text-primary">Related Pieces</h3>
            <button className="text-label-md font-label-md text-on-surface-variant flex items-center gap-2 uppercase tracking-widest">
              VIEW ALL <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
          <div className="flex overflow-x-auto gap-6 px-margin-mobile no-scrollbar snap-x max-w-container-max mx-auto">
            {/* Related Item 1 */}
            <div className="flex-none w-[280px] snap-start group">
              <div className="aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden">
                <img alt="The Midnight Chronograph" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ5YbEYNh6clW8BkYNzJJ6WxQU2c2WICuso_13euLD87kFdba7YlEu7YvsCmRrvZbP2dc2LstwyAcuZdh_-wVc0a3G1eaNLzskxjW8KRQ7LUFs93onWrBgLPdVHQixLn8VttmuOLnbPVXTA8jftxrLdvGX3lsr3NP4ZFa76AeRBg7eoCO0fKA2hDBVBLEB6O1ZIS60tBIe1fA3UE_vurxR0-k625rOeEpDQ__uPomY2r7Rkz94Nzbk83io_NawaaqhiqyDsdq0ogZ0"/>
              </div>
              <h4 className="text-label-md font-label-md text-primary mb-1 uppercase tracking-widest">THE MIDNIGHT CHRONOGRAPH</h4>
              <p className="text-body-md font-body-md text-on-surface-variant">$6,200</p>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
