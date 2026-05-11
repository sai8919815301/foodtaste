import React from 'react';

export default function AdminDashboardPage() {
  return (
    <>
      {/* Dashboard Header */}
      <header className="mb-16">
        <h2 className="text-headline-md font-headline-md text-primary mb-2">Operational Overview</h2>
        <p className="text-on-surface-variant text-body-md max-w-2xl">The heartbeat of Silvanus &amp; Co. crafting excellence through data. Monitoring precision, heritage, and growth in real-time.</p>
      </header>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-8 bg-surface-container-low rounded-xl ambient-glow group hover:bg-secondary-container transition-all duration-500 border border-outline-variant/30">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-full bg-primary-container/10">
              <span className="material-symbols-outlined text-primary">payments</span>
            </div>
            <span className="text-label-sm font-label-sm text-on-secondary-fixed-variant bg-secondary-fixed px-3 py-1 rounded-full">+12.4%</span>
          </div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-widest">Total Revenue</p>
          <h3 className="text-headline-sm font-headline-sm text-primary group-hover:tracking-wider transition-all duration-500">€ 482,900.00</h3>
        </div>
        
        <div className="p-8 bg-surface-container-low rounded-xl ambient-glow group hover:bg-secondary-container transition-all duration-500 border border-outline-variant/30">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-full bg-primary-container/10">
              <span className="material-symbols-outlined text-primary">group</span>
            </div>
            <span className="text-label-sm font-label-sm text-on-secondary-fixed-variant bg-secondary-fixed px-3 py-1 rounded-full">+4.2%</span>
          </div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-widest">Active Collectors</p>
          <h3 className="text-headline-sm font-headline-sm text-primary group-hover:tracking-wider transition-all duration-500">12,482</h3>
        </div>
        
        <div className="p-8 bg-surface-container-low rounded-xl ambient-glow group hover:bg-secondary-container transition-all duration-500 border border-outline-variant/30">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-full bg-primary-container/10">
              <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
            </div>
            <span className="text-label-sm font-label-sm text-tertiary-fixed-dim bg-tertiary-container px-3 py-1 rounded-full">Optimal</span>
          </div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-widest">Stock Units</p>
          <h3 className="text-headline-sm font-headline-sm text-primary group-hover:tracking-wider transition-all duration-500">842 Pieces</h3>
        </div>
      </section>

      {/* Main Analytics Section: Bento Grid Hybrid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 p-10 bg-surface-container-lowest rounded-xl border border-outline-variant/30 ambient-glow min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h4 className="text-headline-sm font-headline-sm text-primary">Monthly Performance</h4>
            <div className="flex gap-4">
              <button className="text-label-sm font-label-sm px-4 py-2 border-b border-primary text-primary">REVENUE</button>
              <button className="text-label-sm font-label-sm px-4 py-2 text-on-surface-variant hover:text-primary transition-colors">ACQUISITION</button>
            </div>
          </div>
          <div className="flex-grow flex items-end justify-between gap-4 px-2">
            <div className="w-full bg-surface-container-high h-[40%] rounded-t-sm hover:bg-primary transition-colors duration-500 group relative">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-label-sm font-label-sm opacity-0 group-hover:opacity-100 transition-opacity">JAN</span>
            </div>
            <div className="w-full bg-surface-container-high h-[60%] rounded-t-sm hover:bg-primary transition-colors duration-500 group relative">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-label-sm font-label-sm opacity-0 group-hover:opacity-100 transition-opacity">FEB</span>
            </div>
            <div className="w-full bg-surface-container-high h-[55%] rounded-t-sm hover:bg-primary transition-colors duration-500 group relative"></div>
            <div className="w-full bg-surface-container-high h-[85%] rounded-t-sm hover:bg-primary transition-colors duration-500 group relative"></div>
            <div className="w-full bg-primary h-[95%] rounded-t-sm relative">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-label-sm font-label-sm text-primary font-bold">MAY</span>
            </div>
            <div className="w-full bg-surface-container-high h-[70%] rounded-t-sm hover:bg-primary transition-colors duration-500 group relative"></div>
            <div className="w-full bg-surface-container-high h-[65%] rounded-t-sm hover:bg-primary transition-colors duration-500 group relative"></div>
            <div className="w-full bg-surface-container-high h-[80%] rounded-t-sm hover:bg-primary transition-colors duration-500 group relative"></div>
          </div>
        </div>

        <div className="lg:col-span-4 rounded-xl overflow-hidden relative group min-h-[400px]">
          <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Featured Movement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU8VNouDKNfevPW7x24xNwvNzvgQxy7XMTgOx1DFUH5LSqjuZQIrO0J272cj_McgNQO-38vsnK3yhBWmbgXifv8b7fr5a4B7i2xuXjt1necVxI4fYrAJbEccK1bm8vmmSbMQtqfWtykfuMS2jqRujYiQOf_fsJc11OEQlTbP9O7KX4y4wP5loP9bfXmocroEqG8cBZzBNdJcvhWqUalMwYWFoG_Lmh1qjVIcQrwIpk69EO_E_BIdrhd15wmsHGeHMSQP1AYBW6u8w7"/>
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-label-sm font-label-sm text-secondary-fixed mb-2 uppercase tracking-[0.2em]">Featured Movement</p>
            <h4 className="text-headline-sm font-headline-sm text-on-primary mb-4">Caliber-S Heritage</h4>
            <button className="px-6 py-2 border border-secondary-fixed/50 text-secondary-fixed text-label-md font-label-md hover:bg-secondary-fixed hover:text-primary transition-all duration-300">VIEW SPECS</button>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="lg:col-span-12 mt-8 p-10 bg-surface rounded-xl border border-outline-variant/30 ambient-glow overflow-x-auto">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-headline-sm font-headline-sm text-primary">Recent Orders</h4>
            <span className="text-label-md font-label-md text-on-surface-variant cursor-pointer hover:text-primary transition-colors">View All Archive →</span>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/20">
                <th className="py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Collector</th>
                <th className="py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Timepiece</th>
                <th className="py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Date</th>
                <th className="py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Status</th>
                <th className="py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest text-right">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-fixed-dim"></div>
                    <span className="font-medium text-primary">Alexander Van Der Post</span>
                  </div>
                </td>
                <td className="py-6 text-on-surface-variant">Silva-01 Tourbillon</td>
                <td className="py-6 text-on-surface-variant">Oct 12, 2024</td>
                <td className="py-6">
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-fixed-variant text-label-sm font-label-sm rounded-full">Shipped</span>
                </td>
                <td className="py-6 text-right font-semibold text-primary">€ 14,200.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
