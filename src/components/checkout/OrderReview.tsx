import React from 'react';

export default function OrderReview() {
  return (
    <aside className="lg:col-span-5">
      <div className="sticky top-32 glass-panel p-10 space-y-10">
        <h3 className="text-headline-sm font-headline-sm text-primary italic border-b border-outline-variant pb-4">Order Summary</h3>
        <div className="space-y-6">
          {/* Product Item */}
          <div className="flex gap-6">
            <div className="w-24 h-32 bg-surface-container-high overflow-hidden">
              <img alt="The Chronos Forest Edition" className="w-full h-full object-cover" data-alt="A macro close-up of a luxury mechanical watch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQt-sguDpHXG1w7TfoJOitkvA7gmjoZwBeAu3aI1LDOHGfpBFlJ5zj0YbsofLMIhDYmnn_RXAaSLznXWzjUf0hxLOJPfvwdIHQerd6BmGwrnmjsLQyqSPD_TzS4hkpB-ZNDIjvKSp2Z9tc9YX7xfPoVyON1ywQo_jfAV4WkNIyk4BD0JHxfVsQR_TmpN_pKmeX88qsdVH8uzydaM6FecGgis6FgDhShbO82cRG6tdHI9lBewT1ehnQCHLTfz1VS13ANZauR05-Q_yf"/>
            </div>
            <div className="flex flex-col justify-center flex-1">
              <p className="text-label-sm text-outline uppercase tracking-widest">Limited Edition</p>
              <h4 className="font-headline-sm text-primary text-[20px] leading-tight">The Chronos Forest Edition</h4>
              <p className="text-body-md text-on-surface-variant mt-1">Strap: Pine Oak Leather</p>
              <p className="text-label-md text-primary mt-2">£4,200.00</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-6 border-t border-outline-variant">
          <div className="flex justify-between text-body-md text-on-surface-variant">
            <span>Subtotal</span>
            <span>£4,200.00</span>
          </div>
          <div className="flex justify-between text-body-md text-on-surface-variant">
            <span>Concierge Shipping</span>
            <span>Complimentary</span>
          </div>
          <div className="flex justify-between text-body-md text-on-surface-variant">
            <span>Estimated Duties &amp; Tax</span>
            <span>£840.00</span>
          </div>
          <div className="flex justify-between text-headline-sm font-bold text-primary pt-4">
            <span>Total</span>
            <span>£5,040.00</span>
          </div>
        </div>

        <div className="bg-primary/5 p-6 space-y-3">
          <div className="flex items-center gap-3 text-on-secondary-fixed-variant">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            <span className="text-label-sm font-bold">SILVANUS LIFETIME GUARANTEE</span>
          </div>
          <p className="text-label-sm text-on-surface-variant leading-relaxed">Each timepiece is backed by our lifetime artisan service commitment, handcrafted with sustainable materials from managed forests.</p>
        </div>
      </div>
    </aside>
  );
}
