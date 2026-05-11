import React from 'react';

export default function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <nav className="mb-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant -z-10"></div>
        
        <div className="flex flex-col items-center gap-3 bg-background px-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm ${currentStep >= 1 ? 'bg-primary text-on-primary' : 'border border-outline text-outline'}`}>1</div>
          <span className={`text-label-sm ${currentStep >= 1 ? 'text-primary font-bold' : 'text-outline'}`}>Shipping</span>
        </div>
        
        <div className="flex flex-col items-center gap-3 bg-background px-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm ${currentStep >= 2 ? 'bg-primary text-on-primary' : 'border border-outline text-outline'}`}>2</div>
          <span className={`text-label-sm ${currentStep >= 2 ? 'text-primary font-bold' : 'text-outline'}`}>Payment</span>
        </div>
        
        <div className="flex flex-col items-center gap-3 bg-background px-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm ${currentStep >= 3 ? 'bg-primary text-on-primary' : 'border border-outline text-outline'}`}>3</div>
          <span className={`text-label-sm ${currentStep >= 3 ? 'text-primary font-bold' : 'text-outline'}`}>Review</span>
        </div>
      </div>
    </nav>
  );
}
