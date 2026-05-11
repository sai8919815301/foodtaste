'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loginUser, loginWithGoogle } from '@/lib/authService';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const user = await loginUser(email, password);
      setSuccess(`Welcome back! Redirecting...`);
      setTimeout(() => router.push('/'), 1500);
    } catch (err: unknown) {
      const firebaseErr = err as { code?: string; message?: string };
      if (firebaseErr.code === 'auth/user-not-found' || firebaseErr.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.');
      } else if (firebaseErr.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else {
        setError(firebaseErr.message || 'Something went wrong.');
      }
    }
    setLoading(false);
  }

  async function handleGoogleLogin() {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      setSuccess('Logged in with Google! Redirecting...');
      setTimeout(() => router.push('/'), 1500);
    } catch (err: unknown) {
      const firebaseErr = err as { message?: string };
      setError(firebaseErr.message || 'Google login failed.');
    }
    setLoading(false);
  }

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-body-md overflow-x-hidden">
      {/* Hero Background Wrapper */}
      <div className="fixed inset-0 z-0">
        <img className="w-full h-full object-cover opacity-60 scale-110 blur-sm" alt="Forest background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnYfKsfvcjewmk9cMkm-XJ5FwGQ-s7p9Wh-zqnKaTEFG1S4l_23XAHZREzitoRlRakYr842PSDnTFj6memkDINSChzEn3DMCGph4fz_r4Yn-bUIhUZLDw1UkZD3VgKCKCX8t26zRTZvF1PMRzCP1UZUCIm_hZKsjxgWE8qsfuK3rGKDqZpi2esjNt6qrxr6JXGD53eHTDTni9YjS25HgUYWCxL2Eu-DF2nk6DA3ivbG4T7Maf6Lu-9ZS-433sehTq87K2jdADWQM1S"/>
      </div>
      {/* Top Branding Anchor */}
      <header className="fixed top-0 w-full z-50 flex justify-center py-gutter">
        <Link href="/" className="text-headline-md font-headline-md tracking-widest text-primary">SILVANUS &amp; CO.</Link>
      </header>
      {/* Main Content Canvas */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-32">
        <div className="max-w-md w-full glass-panel rounded-xl p-10 ambient-glow bg-surface-container/80 backdrop-blur-md">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-headline-sm font-headline-sm text-primary mb-2">Welcome Back</h2>
            <p className="text-body-md text-on-surface-variant italic">Enter the grove of horological excellence.</p>
          </div>
          {/* Login Tabs/Options */}
          <div className="space-y-6">
            {/* Error / Success Messages */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-body-sm">
                ❌ {error}
              </div>
            )}
            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-body-sm">
                ✅ {success}
              </div>
            )}

            {/* Social Login */}
            <button 
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full py-4 px-6 rounded-full border border-outline-variant flex items-center justify-center gap-3 bg-white/50 hover:bg-white transition-all duration-300 hover:tracking-widest group disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-primary">login</span>
              <span className="text-label-md text-primary">Continue with Google</span>
            </button>
            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-outline-variant"></div>
              <span className="flex-shrink mx-4 text-label-sm text-outline uppercase tracking-widest">Or</span>
              <div className="flex-grow border-t border-outline-variant"></div>
            </div>
            {/* Form */}
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-label-sm text-outline uppercase tracking-tighter" htmlFor="email">Email</label>
                <input 
                  className="w-full bg-transparent py-3 border-b border-outline-variant text-body-md placeholder:text-outline-variant focus:outline-none focus:border-primary transition-all" 
                  id="email" 
                  placeholder="Enter your email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-label-sm text-outline uppercase tracking-tighter" htmlFor="password">Secret Key</label>
                <input 
                  className="w-full bg-transparent py-3 border-b border-outline-variant text-body-md placeholder:text-outline-variant focus:outline-none focus:border-primary transition-all" 
                  id="password" 
                  placeholder="••••••••" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between items-center text-label-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded-none border-outline text-primary focus:ring-0" type="checkbox"/>
                  <span className="text-on-surface-variant group-hover:text-primary transition-colors">Remember identity</span>
                </label>
                <a className="text-outline hover:text-primary transition-colors underline underline-offset-4" href="#">Lost access?</a>
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-primary-container text-on-primary-container py-5 px-8 rounded-full text-label-md hover:tracking-widest transition-all duration-500 ambient-glow active:scale-95 disabled:opacity-50"
              >
                {loading ? 'SIGNING IN...' : 'BEGIN JOURNEY'}
              </button>
            </form>
            {/* Registration CTA */}
            <div className="mt-12 pt-8 border-t border-outline-variant/30 text-center space-y-4">
              <p className="text-body-md text-on-surface-variant">New to the heritage?</p>
              <Link href="/auth/register" className="block w-full border border-primary text-primary py-4 px-8 rounded-full text-label-md hover:bg-primary hover:text-on-primary hover:tracking-widest transition-all duration-500">
                JOIN THE INNER CIRCLE
              </Link>
            </div>
          </div>
        </div>
      </main>
      {/* Footer Component */}
      <footer className="relative z-10 w-full bg-primary text-on-primary">
        <div className="px-margin-desktop py-12 flex flex-col items-center gap-8 max-w-container-max mx-auto">
          <div className="text-display-lg-mobile font-display-lg-mobile opacity-20 tracking-[0.3em]">SILVANUS</div>
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <a className="text-label-sm text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors uppercase tracking-widest" href="#">Sustainability</a>
            <a className="text-label-sm text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors uppercase tracking-widest" href="#">Craftsmanship</a>
            <a className="text-label-sm text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors uppercase tracking-widest" href="#">Service Centers</a>
            <a className="text-label-sm text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors uppercase tracking-widest" href="#">Privacy Policy</a>
          </nav>
          <div className="text-label-sm text-on-primary/50 text-center tracking-wider">
            © 2024 SILVANUS &amp; CO. HOROLOGY. HANDCRAFTED IN THE FOREST.
          </div>
        </div>
      </footer>
    </div>
  );
}
