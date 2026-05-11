import React from 'react';

export default function PaymentForm() {
  return (
    <div className="space-y-8">
      <div className="flex items-baseline justify-between border-b border-outline-variant pb-4">
        <h2 className="text-headline-sm font-headline-sm text-primary italic">Payment Method</h2>
        <span className="material-symbols-outlined text-outline">lock</span>
      </div>
      
      <div className="space-y-4">
        {/* Credit Card Option */}
        <div className="border border-outline-variant p-6 ambient-glow bg-surface-container-lowest">
          <label className="flex items-center gap-4 cursor-pointer mb-8">
            <input type="radio" name="payment" className="w-4 h-4 text-primary border-outline-variant focus:ring-0" defaultChecked />
            <span className="text-label-md text-primary">CREDIT / DEBIT CARD</span>
            <div className="ml-auto flex gap-2">
              <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
            </div>
          </label>
          
          {/* Mock Razorpay/Stripe fields */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            <div className="col-span-2 border-b border-tertiary/20 py-2">
              <label className="block text-label-sm text-outline mb-1">CARDHOLDER NAME</label>
              <input type="text" className="w-full bg-transparent border-none p-0 text-body-md text-primary placeholder:text-outline-variant focus:ring-0 font-label-md" placeholder="JULIAN THORNE" />
            </div>
            <div className="col-span-2 border-b border-tertiary/20 py-2">
              <label className="block text-label-sm text-outline mb-1">CARD NUMBER</label>
              <input type="text" className="w-full bg-transparent border-none p-0 text-body-md text-primary placeholder:text-outline-variant focus:ring-0 tracking-widest font-label-md" placeholder="**** **** **** 8829" />
            </div>
            <div className="border-b border-tertiary/20 py-2">
              <label className="block text-label-sm text-outline mb-1">EXPIRY DATE</label>
              <input type="text" className="w-full bg-transparent border-none p-0 text-body-md text-primary placeholder:text-outline-variant focus:ring-0 font-label-md" placeholder="MM / YY" />
            </div>
            <div className="border-b border-tertiary/20 py-2">
              <label className="block text-label-sm text-outline mb-1">CVC</label>
              <input type="text" className="w-full bg-transparent border-none p-0 text-body-md text-primary placeholder:text-outline-variant focus:ring-0 font-label-md" placeholder="***" />
            </div>
          </div>
        </div>
        
        {/* Cash on Delivery Option */}
        <label className="flex items-center gap-4 border border-outline-variant p-6 hover:bg-surface-container-low transition-colors cursor-pointer group">
          <input type="radio" name="payment" className="w-4 h-4 text-primary border-outline-variant focus:ring-0" />
          <span className="text-label-md text-outline group-hover:text-primary transition-colors">CASH ON DELIVERY</span>
          <span className="material-symbols-outlined ml-auto text-outline group-hover:text-primary transition-colors">payments</span>
        </label>
      </div>
    </div>
  );
}
