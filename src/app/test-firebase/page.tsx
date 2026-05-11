'use client';

import { useState } from 'react';
import { registerUser, loginUser, logoutUser } from '@/lib/authService';
import { addProduct, getProducts } from '@/lib/dbService';
import { db } from '@/lib/firebase';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';

interface LogEntry {
  type: 'success' | 'error' | 'info';
  message: string;
}

const TEST_EMAIL = 'test@silvanus.co';
const TEST_PASSWORD = 'Test@1234';

export default function FirebaseTestPage() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const log = (type: LogEntry['type'], message: string) => {
    setLogs(prev => [...prev, { type, message }]);
  };

  const clearLogs = () => setLogs([]);

  // ── Step 1: Create test user ───────────────────────────────────────────────
  async function createTestUser() {
    setLoading(true);
    log('info', '⏳ Creating test user...');
    try {
      const user = await registerUser(TEST_EMAIL, TEST_PASSWORD, 'Test User');
      log('success', `✅ User created! UID: ${user.uid}`);
      log('success', `   Email: ${user.email}`);
    } catch (err: unknown) {
      const error = err as { code?: string; message?: string };
      if (error.code === 'auth/email-already-in-use') {
        log('info', `ℹ️  User already exists — trying to login instead...`);
        try {
          const user = await loginUser(TEST_EMAIL, TEST_PASSWORD);
          log('success', `✅ Logged in! UID: ${user.uid}`);
        } catch (loginErr: unknown) {
          const le = loginErr as { message?: string };
          log('error', `❌ Login failed: ${le.message}`);
        }
      } else {
        log('error', `❌ ${error.message}`);
      }
    }
    setLoading(false);
  }

  // ── Step 2: Seed test products ─────────────────────────────────────────────
  async function seedProducts() {
    setLoading(true);
    log('info', '⏳ Seeding test products into Firestore...');
    const products = [
      {
        name: 'The Evergreen GMT',
        price: 8450,
        category: 'Heritage',
        featured: true,
        stock: 12,
        description: 'A dual-time mechanical masterpiece forged for the modern wanderer.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmgalLAICL04uKopGbWqLsvrEmTqldnQew0ZXDJA4iCpUEoQpM2Q1PgnY5kyi7bfGOytxHFtnAjB2i4lWQGZrJL8ctqCHV5p7RQrLym2LBKfxDf42lBHnXQzpF4b5RAyQcTAwtmjP8fzgQbxW1RzOyDodRAi9-JvFY8y14enWdEUnObOUlaB8A-W1OurcTuIgAfUASeRyzz8JBe0kURKNO1GBUybbXcD4jQV9W27WzWnDleqZaDezEXKCd6Kx15mk3K619ROtImFYf',
        createdAt: new Date().toISOString(),
      },
      {
        name: 'The Midnight Chronograph',
        price: 6200,
        category: 'Sport',
        featured: true,
        stock: 8,
        description: 'A premium chronograph built for precision and elegance.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ5YbEYNh6clW8BkYNzJJ6WxQU2c2WICuso_13euLD87kFdba7YlEu7YvsCmRrvZbP2dc2LstwyAcuZdh_-wVc0a3G1eaNLzskxjW8KRQ7LUFs93onWrBgLPdVHQixLn8VttmuOLnbPVXTA8jftxrLdvGX3lsr3NP4ZFa76AeRBg7eoCO0fKA2hDBVBLEB6O1ZIS60tBIe1fA3UE_vurxR0-k625rOeEpDQ__uPomY2r7Rkz94Nzbk83io_NawaaqhiqyDsdq0ogZ0',
        createdAt: new Date().toISOString(),
      },
      {
        name: 'The Solstice Minimalist',
        price: 6700,
        category: 'Dress',
        featured: false,
        stock: 5,
        description: 'Clean white enamel dial and thin bronze hands.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-irbrb4VkjSqB5bfPdmOeFruLHNUC19XqRB4M1MLkP6GX5nmQwOvOZxFLvfC8TdA-Ml-sRCHKA7EwUbdtNvW2RWtYbkyYQf-sxWprqkhfcnaw3qF159kZVU6tqfrzDrrIYQRN8X4WjtcV0quHYmZFLKjuJ97xHxRNgloO4aJCs0r7KrCtXLF7bVSnjnX5X05Cmzofdsm422Hu8dCoCPaTQ96OG1dPaPQZf5V1lMdK673otQ0ppRdKfnOEwTvu9D4SZw4TFVkskx9X',
        createdAt: new Date().toISOString(),
      },
    ];

    try {
      for (const product of products) {
        const ref = await addProduct(product);
        log('success', `✅ Added: "${product.name}" (ID: ${ref.id})`);
      }
      log('success', `🎉 ${products.length} products seeded to Firestore!`);
    } catch (err: unknown) {
      const error = err as { message?: string };
      log('error', `❌ Failed to seed products: ${error.message}`);
    }
    setLoading(false);
  }

  // ── Step 3: Read products back ─────────────────────────────────────────────
  async function readProducts() {
    setLoading(true);
    log('info', '⏳ Reading products from Firestore...');
    try {
      const products = await getProducts();
      if (products.length === 0) {
        log('info', 'ℹ️  No products found. Run "Seed Products" first.');
      } else {
        log('success', `✅ Found ${products.length} product(s) in Firestore:`);
        products.forEach((p: Record<string, unknown>) => {
          log('info', `   • ${p.name} — $${p.price} (stock: ${p.stock})`);
        });
      }
    } catch (err: unknown) {
      const error = err as { message?: string };
      log('error', `❌ Failed to read: ${error.message}`);
    }
    setLoading(false);
  }

  // ── Step 4: Logout ─────────────────────────────────────────────────────────
  async function handleLogout() {
    setLoading(true);
    try {
      await logoutUser();
      log('success', '✅ Logged out successfully.');
    } catch (err: unknown) {
      const error = err as { message?: string };
      log('error', `❌ ${error.message}`);
    }
    setLoading(false);
  }

  // ── Step 5: Full test suite ────────────────────────────────────────────────
  async function runAllTests() {
    clearLogs();
    log('info', '🚀 Running full Firebase test suite...');
    log('info', '─────────────────────────────────────');
    await createTestUser();
    await seedProducts();
    await readProducts();
    log('info', '─────────────────────────────────────');
    log('success', '🏁 All tests complete! Check Firebase Console to confirm.');
  }

  const logColors: Record<LogEntry['type'], string> = {
    success: 'text-green-400',
    error: 'text-red-400',
    info: 'text-on-surface-variant',
  };

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen pt-20 px-8 max-w-4xl mx-auto">
      <h1 className="text-headline-md font-headline-md text-primary mb-2 tracking-widest">🔥 Firebase Test Console</h1>
      <p className="text-on-surface-variant text-body-md mb-10">
        Use these tools to verify your Firebase connection is working.
        All actions will be reflected live in your{' '}
        <a href="https://console.firebase.google.com/project/watch-today-29032" target="_blank" rel="noreferrer" className="text-primary underline hover:opacity-80">
          Firebase Console →
        </a>
      </p>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <button
          onClick={runAllTests}
          disabled={loading}
          className="col-span-2 md:col-span-3 py-4 bg-primary text-on-primary text-label-md uppercase tracking-widest hover:opacity-90 transition disabled:opacity-50"
        >
          ▶ Run All Tests
        </button>
        <button
          onClick={createTestUser}
          disabled={loading}
          className="py-3 border border-primary text-primary text-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition disabled:opacity-50"
        >
          1. Create Test User
        </button>
        <button
          onClick={seedProducts}
          disabled={loading}
          className="py-3 border border-primary text-primary text-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition disabled:opacity-50"
        >
          2. Seed Products
        </button>
        <button
          onClick={readProducts}
          disabled={loading}
          className="py-3 border border-primary text-primary text-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition disabled:opacity-50"
        >
          3. Read Products
        </button>
        <button
          onClick={handleLogout}
          disabled={loading}
          className="py-3 border border-outline-variant text-on-surface-variant text-label-sm uppercase tracking-widest hover:bg-surface-container transition disabled:opacity-50"
        >
          Logout
        </button>
        <button
          onClick={clearLogs}
          disabled={loading}
          className="py-3 border border-outline-variant text-on-surface-variant text-label-sm uppercase tracking-widest hover:bg-surface-container transition disabled:opacity-50"
        >
          Clear Logs
        </button>
      </div>

      {/* Test Credentials Card */}
      <div className="bg-surface-container-low border border-outline-variant p-6 mb-8">
        <h2 className="text-label-md font-bold text-primary mb-4 uppercase tracking-widest">Test Account Credentials</h2>
        <div className="grid grid-cols-2 gap-4 text-body-md">
          <div>
            <span className="text-on-surface-variant text-label-sm block mb-1">EMAIL</span>
            <code className="text-primary">{TEST_EMAIL}</code>
          </div>
          <div>
            <span className="text-on-surface-variant text-label-sm block mb-1">PASSWORD</span>
            <code className="text-primary">{TEST_PASSWORD}</code>
          </div>
        </div>
      </div>

      {/* Log Output */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-6 min-h-[300px] font-mono text-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="text-label-sm text-on-surface-variant uppercase tracking-widest">Output Log</span>
          {loading && <span className="text-primary text-label-sm animate-pulse">● Running...</span>}
        </div>
        {logs.length === 0 ? (
          <p className="text-outline">Click a button above to start testing...</p>
        ) : (
          <div className="space-y-1">
            {logs.map((entry, i) => (
              <p key={i} className={logColors[entry.type]}>
                {entry.message}
              </p>
            ))}
          </div>
        )}
      </div>

      <p className="text-label-sm text-on-surface-variant mt-6 text-center">
        This page is for development only. Remove it before deploying to production.
      </p>
    </div>
  );
}
