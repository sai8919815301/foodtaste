'use client';
import React, { useEffect, useState } from 'react';
import { useCart } from '@/store/useCart';

export default function FeaturedProducts() {
  const { addItem } = useCart();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // Mocking for now:
    setProducts([
      {
        id: '1',
        name: 'Mist Explorer I',
        subtitle: 'Sustainable Leather & Steel',
        price: 4200,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk3k8D1-szWcw1XCQZ6Q1IPUnXVmLw9MDu8Hg9x60jYTeLOBo2PtjWs_7gcj81QGslqVkcu-nzIqcsbX1MsdIhqL4JCB3csE85lMHLkmh7oeaBQmQG3VtiXCtThdpHYdvxb58ejHEYIYHLYWqPKvbxX9Mz6vaS_D6OJNy4z3Y8eqEQV_qFhAiotR4kwmi54xqCXJ0Alqa_9lXMlLWt2EPLcCyL-ptOkC73YwVcnqLyHzByuSS2dgBvx3g20efRZvPhxHM-FwcaT0aa'
      },
      {
        id: '2',
        name: 'Deep Moss Gold',
        subtitle: '18k Bronze Alloy',
        price: 12850,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcSfXA_eFggnRmxfmwzVFyGleBfSo078kHWkK-L8mw0CSXgrK2eGl7cJRx3ih1GfAea7OHPVUKf10PZ_6t5-qcCcgw1gFsq0_fhYRVm8P4Q60Jz7y97DqcBTKTA-yOZ6257dGjSJbjhLrU5TnVnh9pmIT00v65ENaJV_eXwS6rG_LXTUdj_DcLmvdnaEaYq-o0LpvGaXFyDmaeMxPIk0ExfrzQU4s45lqQePCt5Hn1zuMoETIXYOl_4-ecuguTDK6JewO7_525zFir'
      },
      {
        id: '3',
        name: 'Shadow Heritage',
        subtitle: 'Vintage Oak Series',
        price: 6400,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6cMPqI49E3-o6V8RpC_ke6Yx_DbN2zIY9cBPzKZbxAFeQDDkqcLiUbEwtwW0p9YL1kUxbdVxXeUUbh6RnnyAqpAmgWD8VzQ1DxbeM3uo5ipkisPxI6BxFy5_OSoCXmcwzdNPNVYhdgWjQdZXyWisd-uOZ12eicEL4jLHaRHV-G0gzkBgpLhaCb2JKyYtaoIOpePBeknNVLP_w-Kh4clb2Kz-hLkPg79ejKTxXvGv_76FRh610QidOX_6Bxg_OdgCeqRyl0-vv4Mhr'
      },
      {
        id: '4',
        name: 'Lunar Birch',
        subtitle: 'Polished Steel',
        price: 3900,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY179rHAzMvXtp0P93f3SvEcoPkx_k_Machxiw9KhyT0XI2eFgrhQXtk1016L2LBFfHna1X7y4xYBriO76DgizEjnPYwhV842e79-VH6A9bB5QebYqtZtJiRJfX-Y5sw4ZAslzfaCFrw1x5qxpn4xOuSXCAXWgmdO7YlzcZ3NmJLwvmaJ5ALmMGwKmLD3czomuxgMWff3337SbdwRsA7BJjyrnV8aIaxf8jnr-CFopCdLVZvA3f3u7I8rkevEDH04UnCiOFWBSvHpE'
      }
    ]);
  }, []);

  const handleAddToCart = (p: any) => {
    addItem({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      quantity: 1,
      options: {
        subtitle: p.subtitle
      }
    });
  };

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <h2 className="font-headline-md text-primary mb-16 text-center text-headline-md uppercase tracking-widest">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {products.map(product => (
          <div key={product.id} className="group relative">
            <div className="aspect-[3/4] bg-surface-container-low mb-6 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={product.image} alt={product.name}/>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-primary text-on-primary px-6 py-2 text-label-sm font-bold rounded-full hover:tracking-widest transition-all uppercase"
                >
                  Add to Bag
                </button>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-headline-sm text-primary text-headline-sm mb-1">{product.name}</h4>
              <p className="text-on-surface-variant font-body-md mb-2">{product.subtitle}</p>
              <p className="text-on-tertiary-fixed-variant font-label-md font-bold">${product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
