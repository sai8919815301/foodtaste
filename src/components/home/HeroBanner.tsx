import React from 'react';

export default function HeroBanner() {
  return (
    <section className="relative h-[795px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" data-alt="Hero" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP0tfOqVcn7KkeqiUh8e-eFN_25MjZYKIR9SRH6LxNheJlvLtxSdZ0ofr5gANjYv41ed507YYfz884cT6OzUE06VUC7vKbnP6iLoKQ7bWi7Mk8Fx_uUU2JZ-ME8SDkvy1u933ECwJ8PlXh3vtiwt5ZFAhw7knWaeFq9_F_h5aMBOjrqEBp-9FOewSyqKh3NICruwKcNp4S4L7uCHZVCs8K-bIk9neDDSZg3BbEEHdjXpDnfjA0TlbOfv60SK8yr8wgPMc7NQVmcHwX"/>
        <div className="absolute inset-0 bg-primary/20 backdrop-brightness-90"></div>
      </div>
      <div className="relative z-10 text-center px-margin-mobile max-w-3xl">
        <p className="text-white/80 font-label-md tracking-[0.3em] uppercase mb-6">Established in the Shadows</p>
        <h1 className="text-white font-display-lg-mobile md:text-display-lg mb-8 leading-tight">Timepiece for the Discerning Soul</h1>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="bg-primary text-on-primary px-12 py-4 text-label-md tracking-widest hover:tracking-[0.2em] transition-all duration-500 rounded-none w-full md:w-auto">
            EXPLORE COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
}
