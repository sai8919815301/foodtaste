'use client';

import { useEffect } from 'react';
import { onUserChange } from '@/lib/authService';
import { useAuth } from '@/store/useAuth';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { login, logout } = useAuth();

  useEffect(() => {
    const unsubscribe = onUserChange((user) => {
      if (user) {
        login({
          id: user.uid,
          email: user.email || '',
          name: user.displayName || user.email?.split('@')[0] || 'User',
          role: 'customer', // Default role
        });
      } else {
        logout();
      }
    });

    return () => unsubscribe();
  }, [login, logout]);

  return <>{children}</>;
}
