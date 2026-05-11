import React from 'react';

export default function ProductFilter() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-32 space-y-10">
        <div>
          <h3 className="text-label-md font-label-md text-primary mb-6 border-b border-outline-variant pb-2">REFINE BY</h3>
          
          {/* Brand */}
          <div className="mb-8">
            <h4 className="text-label-sm font-label-sm text-on-surface-variant mb-4">BRAND</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded-sm border-outline text-secondary focus:ring-secondary w-4 h-4" type="checkbox" defaultChecked />
                <span className="text-body-md group-hover:text-primary transition-colors">Silvanus Heritage</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded-sm border-outline text-secondary focus:ring-secondary w-4 h-4" type="checkbox" />
                <span className="text-body-md group-hover:text-primary transition-colors">Forester Series</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded-sm border-outline text-secondary focus:ring-secondary w-4 h-4" type="checkbox" />
                <span className="text-body-md group-hover:text-primary transition-colors">Lumina Peak</span>
              </label>
            </div>
          </div>
          
          {/* Price */}
          <div className="mb-8">
            <h4 className="text-label-sm font-label-sm text-on-surface-variant mb-4">PRICE RANGE</h4>
            <input className="w-full h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer" max="50000" min="1000" step="500" type="range" />
            <div className="flex justify-between mt-2 text-label-sm font-label-sm text-on-surface-variant">
              <span>$1,000</span>
              <span>$50,000+</span>
            </div>
          </div>
          
          {/* Movement */}
          <div className="mb-8">
            <h4 className="text-label-sm font-label-sm text-on-surface-variant mb-4">MOVEMENT</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 border border-outline rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
                <span className="text-body-md text-primary">Automatic</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 border border-outline rounded-full group-hover:border-primary transition-colors"></div>
                <span className="text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Manual Wind</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 border border-outline rounded-full group-hover:border-primary transition-colors"></div>
                <span className="text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Quartz</span>
              </label>
            </div>
          </div>
          
          {/* Strap */}
          <div className="mb-8">
            <h4 className="text-label-sm font-label-sm text-on-surface-variant mb-4">STRAP TYPE</h4>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 border border-secondary text-on-surface bg-secondary-container text-label-sm font-label-sm rounded-full">Genuine Leather</button>
              <button className="px-4 py-2 border border-outline-variant text-on-surface-variant hover:border-secondary text-label-sm font-label-sm rounded-full transition-colors">Alligator</button>
              <button className="px-4 py-2 border border-outline-variant text-on-surface-variant hover:border-secondary text-label-sm font-label-sm rounded-full transition-colors">Stainless Steel</button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
