'use client';
import React, { useEffect, useState } from 'react';
import { useCart } from '@/store/useCart';

export default function DealOfDay() {
  const { addItem } = useCart();
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds
  const [deal, setDeal] = useState<any>(null);

  useEffect(() => {
    // Mock fetching deal of the day
    setDeal({
      id: 'arboreal-chrono',
      name: 'The Arboreal Chronograph',
      discount: '20% OFF',
      price: 2800,
      originalPrice: 3500,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ5YbEYNh6clW8BkYNzJJ6WxQU2c2WICuso_13euLD87kFdba7YlEu7YvsCmRrvZbP2dc2LstwyAcuZdh_-wVc0a3G1eaNLzskxjW8KRQ7LUFs93onWrBgLPdVHQixLn8VttmuOLnbPVXTA8jftxrLdvGX3lsr3NP4ZFa76AeRBg7eoCO0fKA2hDBVBLEB6O1ZIS60tBIe1fA3UE_vurxR0-k625rOeEpDQ__uPomY2r7Rkz94Nzbk83io_NawaaqhiqyDsdq0ogZ0',
      options: {
        collection: 'Special Edition',
        details: 'Hand-Carved Walnut Bezel'
      }
    });
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleClaimDeal = () => {
    if (deal) {
      addItem({
        id: deal.id,
        name: deal.name,
        price: deal.price,
        quantity: 1,
        image: deal.image,
        options: deal.options
      });
      alert('Deal claimed! Item added to your bag.');
    }
  };

  if (!deal) return null;

  return (
    <section className="bg-surface-container py-16 px-margin-mobile md:px-margin-desktop text-center border-y-[0.5px] border-outline-variant my-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-headline-md font-headline-md text-primary mb-4 uppercase tracking-widest">Deal of the Day</h2>
        <div className="text-display-sm font-display-sm text-on-surface-variant mb-6 font-mono">{formatTime(timeLeft)}</div>
        <div className="bg-primary/5 p-8 rounded-lg border border-primary/10">
          <h3 className="text-headline-sm font-headline-sm mb-2 text-primary">{deal.name}</h3>
          <p className="text-on-tertiary-fixed-variant text-label-lg mb-4 font-bold">{deal.discount}</p>
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="text-outline-variant line-through text-body-md">${deal.originalPrice.toLocaleString()}</span>
            <span className="text-primary text-headline-sm font-bold">${deal.price.toLocaleString()}</span>
          </div>
          <button 
            onClick={handleClaimDeal}
            className="bg-primary text-on-primary px-12 py-4 text-label-md tracking-widest hover:tracking-[0.15em] transition-all duration-300 uppercase shadow-lg shadow-primary/20"
          >
            CLAIM DEAL
          </button>
        </div>
      </div>
    </section>
  );
}
