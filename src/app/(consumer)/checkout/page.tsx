import React from 'react';
import StepIndicator from '@/components/checkout/StepIndicator';
import AddressForm from '@/components/checkout/AddressForm';
import PaymentForm from '@/components/checkout/PaymentForm';
import OrderReview from '@/components/checkout/OrderReview';

export default function CheckoutPage() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container">
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <StepIndicator currentStep={2} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <section className="lg:col-span-7 space-y-16">
            <AddressForm />
            <PaymentForm />
            
            <div className="flex items-center justify-between pt-8">
              <button className="flex items-center gap-2 text-label-sm text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                RETURN TO CART
              </button>
              <button className="bg-primary text-on-primary px-12 py-4 text-label-md hover:tracking-widest transition-all duration-300 ambient-glow">
                PLACE ORDER
              </button>
            </div>
          </section>
          
          <OrderReview />
        </div>
      </main>
    </div>
  );
}
