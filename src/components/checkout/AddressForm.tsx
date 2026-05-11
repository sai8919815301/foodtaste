import React from 'react';

export default function AddressForm() {
  return (
    <div className="space-y-8">
      <div className="flex items-baseline justify-between border-b border-outline-variant pb-4">
        <h2 className="text-headline-sm font-headline-sm text-primary italic">Shipping Details</h2>
        <button className="text-label-sm text-on-secondary-fixed-variant hover:tracking-widest transition-all">ADD NEW ADDRESS</button>
      </div>
      
      {/* Address Form */}
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-label-sm mb-2">FULL NAME</label>
          <input type="text" className="w-full bg-surface-container border border-outline-variant p-3 focus:outline-none focus:border-primary" placeholder="Enter your full name"/>
        </div>
        <div className="col-span-2">
          <label className="block text-label-sm mb-2">ADDRESS</label>
          <input type="text" className="w-full bg-surface-container border border-outline-variant p-3 focus:outline-none focus:border-primary mb-2" placeholder="Start typing your address (Google Maps Autocomplete)"/>
          <input type="text" className="w-full bg-surface-container border border-outline-variant p-3 focus:outline-none focus:border-primary" placeholder="Apartment, suite, etc. (optional)"/>
        </div>
        <div>
          <label className="block text-label-sm mb-2">CITY</label>
          <input type="text" className="w-full bg-surface-container border border-outline-variant p-3 focus:outline-none focus:border-primary"/>
        </div>
        <div>
          <label className="block text-label-sm mb-2">POSTAL CODE</label>
          <input type="text" className="w-full bg-surface-container border border-outline-variant p-3 focus:outline-none focus:border-primary"/>
        </div>
      </form>
    </div>
  );
}
