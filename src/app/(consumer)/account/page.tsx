'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/useAuth';

export default function AccountPage() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return null; // Or a loading spinner
  }

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen">
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Profile Header Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20 animate-fade-in">
          <div className="nature-border w-40 h-40 flex-shrink-0 relative overflow-hidden rounded-full border-2 border-primary p-1">
            <img 
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" 
              alt={user.name || 'User Profile'} 
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || 'User')}&background=1a3c34&color=ffffff&size=128`}
            />
          </div>
          <div className="text-center md:text-left flex-grow">
            <p className="text-label-sm font-label-sm text-on-secondary-container tracking-widest mb-2 uppercase">Welcoming Back</p>
            <h2 className="text-display-lg font-display-lg text-primary mb-4">{user.name || 'Julian Silvanus'}</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]" data-icon="workspace_premium" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <span className="text-label-md font-label-md">Artisan Level I: Sapling</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">calendar_today</span>
                <span className="text-label-sm font-label-sm">Member since {new Date().getFullYear()}</span>
              </div>
              <button 
                onClick={() => { logout(); router.push('/'); }}
                className="text-label-sm font-bold text-error hover:underline uppercase tracking-widest ml-auto"
              >
                Logout
              </button>
            </div>
          </div>
        </section>

        {/* Bento Grid Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Artisan Tier / Loyalty */}
          <div className="md:col-span-8 bg-surface-container-low p-10 rounded-xl ambient-glow relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-headline-sm font-headline-sm text-primary mb-6">Tier Progression</h3>
              <div className="flex justify-between items-end mb-4">
                <span className="text-label-sm font-label-sm text-on-surface-variant">Current: Sapling</span>
                <span className="text-label-sm font-label-sm text-on-surface-variant">Next: Silver Birch</span>
              </div>
              <div className="w-full h-[2px] bg-outline-variant mb-8 relative">
                <div className="absolute left-0 top-0 h-full bg-primary w-[15%] transition-all duration-1000"></div>
                <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface"></div>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-lg">
                Your journey with Silvanus & Co. has just begun. Complete your first commission to unlock the next artisan tier.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="md:col-span-4 bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-headline-sm font-headline-sm mb-2">Vault Value</h3>
              <p className="text-display-lg font-display-lg">$0.00</p>
            </div>
            <div className="flex items-center gap-4 border-t border-on-primary/20 pt-6">
              <div>
                <p className="text-label-sm font-label-sm opacity-70">Watches</p>
                <p className="text-headline-sm font-headline-sm">00</p>
              </div>
              <div className="w-px h-8 bg-on-primary/20"></div>
              <div>
                <p className="text-label-sm font-label-sm opacity-70">Orders</p>
                <p className="text-headline-sm font-headline-sm">00</p>
              </div>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <a className="group flex items-center justify-between p-8 bg-surface-container-high rounded-xl hover:bg-secondary-container transition-colors duration-300" href="#">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary">history</span>
                <span className="text-label-md font-label-md">Order History</span>
              </div>
              <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">arrow_forward</span>
            </a>
            <a className="group flex items-center justify-between p-8 bg-surface-container-high rounded-xl hover:bg-secondary-container transition-colors duration-300" href="#">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="text-label-md font-label-md">Address Book</span>
              </div>
              <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">arrow_forward</span>
            </a>
            <a className="group flex items-center justify-between p-8 bg-surface-container-high rounded-xl hover:bg-secondary-container transition-colors duration-300" href="#">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary">payments</span>
                <span className="text-label-md font-label-md">Payment Methods</span>
              </div>
              <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">arrow_forward</span>
            </a>
          </div>

          {/* Recent Activity Table */}
          <div className="md:col-span-8 bg-white/50 backdrop-blur-sm p-10 rounded-xl ambient-glow">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-headline-sm font-headline-sm text-primary">Recent Activity</h3>
              <button className="text-label-sm font-label-sm text-on-secondary-container border-b border-on-secondary-container hover:tracking-widest transition-all">VIEW ALL</button>
            </div>
            <div className="text-center py-10">
              <p className="text-on-surface-variant text-body-md">No recent activity found. Start your collection today.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
