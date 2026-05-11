# Smartwatch E-Commerce App — Complete Implementation Plan

> **Continuation of existing foundation:** HTML monolith apps (`consumer.html`, `admin.html`), Next.js migration toolkit (`convert.py`, `extract_theme.js`, `fix_style.py`, `generate_admin.py`), and infrastructure (`next.config.ts`, `eslint.config.mjs`) are already in place.

---

## Overview

This plan covers three major layers:

1. **Next.js Frontend** — Migrate all HTML views into App Router pages + smartwatch-specific UI
2. **Node.js Backend** — RESTful API with Express.js
3. **Supabase Database** — PostgreSQL schema, auth, storage, and real-time features

---

## Phase 1 — Next.js Frontend Migration & Enhancement

### 1.1 Project Structure

```
smartwatch-store/
├── src/
│   ├── app/
│   │   ├── (consumer)/             # Consumer-facing routes (route group)
│   │   │   ├── layout.tsx          # Consumer shell: Navbar + Footer
│   │   │   ├── page.tsx            # Home / Landing
│   │   │   ├── catalog/
│   │   │   │   └── page.tsx        # Product catalog with filters
│   │   │   ├── products/
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx    # Product detail page
│   │   │   ├── cart/
│   │   │   │   └── page.tsx        # Cart view
│   │   │   ├── checkout/
│   │   │   │   └── page.tsx        # Checkout flow (multi-step)
│   │   │   ├── profile/
│   │   │   │   └── page.tsx        # User profile + order history
│   │   │   ├── compare/
│   │   │   │   └── page.tsx        # Smartwatch comparison tool
│   │   │   ├── wishlist/
│   │   │   │   └── page.tsx        # Wishlist page
│   │   │   ├── contact/
│   │   │   │   └── page.tsx        # Contact page (from contact.html)
│   │   │   └── support/
│   │   │       └── page.tsx        # Support/FAQ page (from support.html)
│   │   ├── (admin)/                # Admin route group
│   │   │   ├── layout.tsx          # Admin shell: Sidebar + Header
│   │   │   ├── admin/
│   │   │   │   ├── page.tsx        # Dashboard overview
│   │   │   │   ├── products/
│   │   │   │   │   └── page.tsx    # Product management
│   │   │   │   ├── orders/
│   │   │   │   │   └── page.tsx    # Order management
│   │   │   │   ├── inventory/
│   │   │   │   │   └── page.tsx    # Stock/inventory tracker
│   │   │   │   ├── users/
│   │   │   │   │   └── page.tsx    # Customer management
│   │   │   │   ├── analytics/
│   │   │   │   │   └── page.tsx    # Sales analytics
│   │   │   │   ├── coupons/
│   │   │   │   │   └── page.tsx    # Coupon/discount manager
│   │   │   │   └── banners/
│   │   │   │       └── page.tsx    # Banner/CMS manager
│   │   ├── api/                    # Next.js API Routes (proxy to backend)
│   │   │   ├── auth/
│   │   │   │   ├── login/route.ts
│   │   │   │   └── register/route.ts
│   │   │   └── [...proxy]/route.ts # Catch-all proxy to Express backend
│   │   ├── auth/
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── globals.css             # Tailwind + theme tokens (from extract_theme.js)
│   │   └── layout.tsx              # Root layout
│   ├── components/
│   │   ├── ui/                     # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   └── Toast.tsx
│   │   ├── product/
│   │   │   ├── ProductCard.tsx     # Smartwatch card with specs preview
│   │   │   ├── ProductGrid.tsx     # Responsive grid layout
│   │   │   ├── ProductFilter.tsx   # Brand / price / feature filters
│   │   │   ├── ProductGallery.tsx  # Multi-image gallery with zoom
│   │   │   ├── SpecsTable.tsx      # Smartwatch specs comparison table
│   │   │   └── WatchModelBadge.tsx # Brand/model badge component
│   │   ├── cart/
│   │   │   ├── CartDrawer.tsx      # Slide-in cart sidebar
│   │   │   ├── CartItem.tsx
│   │   │   └── CartSummary.tsx
│   │   ├── checkout/
│   │   │   ├── StepIndicator.tsx   # Multi-step checkout progress
│   │   │   ├── AddressForm.tsx
│   │   │   ├── PaymentForm.tsx
│   │   │   └── OrderReview.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Top nav with cart icon + search
│   │   │   ├── Footer.tsx
│   │   │   ├── AdminSidebar.tsx    # Collapsible admin sidebar
│   │   │   └── MobileNav.tsx      # Bottom tab bar for mobile
│   │   └── home/
│   │       ├── HeroBanner.tsx      # Hero with featured smartwatch
│   │       ├── FeaturedProducts.tsx
│   │       ├── BrandLogos.tsx      # Brand strip (Apple, Samsung, Garmin, etc.)
│   │       ├── DealOfDay.tsx       # Countdown timer deal section
│   │       └── Testimonials.tsx
│   ├── hooks/
│   │   ├── useCart.ts              # Cart state (Zustand)
│   │   ├── useAuth.ts              # Auth state from Supabase
│   │   ├── useWishlist.ts
│   │   └── useSearch.ts            # Debounced product search
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts           # Browser Supabase client
│   │   │   └── server.ts           # Server-side Supabase client
│   │   ├── api.ts                  # Axios instance for Node.js backend
│   │   └── utils.ts                # Helpers: formatPrice, slugify, etc.
│   ├── store/
│   │   ├── cartStore.ts            # Zustand cart store
│   │   └── authStore.ts            # Zustand auth store
│   └── types/
│       ├── product.ts
│       ├── order.ts
│       └── user.ts
├── next.config.ts                  # Already configured (update for API rewrites)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

### 1.2 HTML-to-Next.js Migration Steps

Run `convert.py` for each existing view, then apply the steps below.

**Step 1 — Home Page (`page.tsx`)**

```bash
# Already partially done by convert.py, now enhance:
python convert.py --input raw/home.html --output src/app/(consumer)/page.tsx
```

Replace static content with dynamic data:
- `HeroBanner` fetches featured product from `/api/products?featured=true`
- `FeaturedProducts` fetches from `/api/products?limit=8&sort=popular`
- `DealOfDay` fetches active promotions from `/api/promotions/active`

**Step 2 — Catalog Page**

```bash
python convert.py --input raw/catalog.html --output src/app/(consumer)/catalog/page.tsx
```

Add:
- URL-based filtering: `?brand=apple&priceMin=5000&priceMax=20000&features=gps`
- `ProductFilter` sidebar (desktop) + bottom sheet (mobile)
- Infinite scroll or pagination from `/api/products`
- Sort options: Price Low-High, High-Low, Newest, Popular, Rating

**Step 3 — Product Detail Page**

```bash
python convert.py --input raw/product-detail.html \
  --output src/app/(consumer)/products/[slug]/page.tsx
```

Add smartwatch-specific sections:
- `ProductGallery` with 360° view support
- `SpecsTable`: battery life, display size, water resistance rating, sensors
- Compatible devices section (iOS / Android)
- EMI/financing options widget
- "Compare with similar" button → links to `/compare`
- Real-time stock status from Supabase

**Step 4 — Cart Page**

Convert and wire to `useCart` Zustand store. Add:
- Coupon code input → validates against `/api/coupons/validate`
- Estimated delivery date display
- Upsell: "Customers also bought" (watch bands, screen protectors)

**Step 5 — Checkout Page (Multi-Step)**

Three steps with `StepIndicator`:
1. **Delivery Address** — Google Maps autocomplete or manual input
2. **Payment** — Razorpay/Stripe integration (see Backend Phase 3)
3. **Review & Place Order** — order summary with COD or prepaid selection

**Step 6 — Auth Pages**

Use Supabase Auth UI or custom forms:
```tsx
// src/app/auth/login/page.tsx
import { createClient } from '@/lib/supabase/client'

// Supabase handles sessions via cookies automatically
const supabase = createClient()
await supabase.auth.signInWithPassword({ email, password })
```

Support:
- Email/password login
- Google OAuth (one-click)
- OTP / magic link for mobile users

**Step 7 — Contact & Support Pages**

Migrate `contact.html` and `support.html`:
- Contact form → POST to `/api/support/contact`
- Support page → FAQ accordion + live chat widget (Crisp or Tawk.to)
- Email template (`email-template.html`) → used in Node.js nodemailer

**Step 8 — Admin Pages**

Run `generate_admin.py` output as base, then connect real APIs:
```bash
python generate_admin.py --enhance
```

Connect each admin view:
| Admin Page | API Endpoint | Features |
|---|---|---|
| Products | `GET/POST /api/admin/products` | CRUD, bulk import CSV |
| Orders | `GET/PATCH /api/admin/orders` | Status update, filter by date |
| Inventory | `GET/PATCH /api/admin/inventory` | Low-stock alerts, restock |
| Users | `GET /api/admin/users` | Ban user, view order history |
| Analytics | `GET /api/admin/analytics` | Charts: revenue, units sold |
| Coupons | `GET/POST /api/admin/coupons` | Create, expire, usage stats |
| Banners | `GET/POST /api/admin/banners` | Image upload to Supabase Storage |

---

### 1.3 Smartwatch-Specific Frontend Features

**Watch Comparison Tool (`/compare`)**
- Select up to 3 watches
- Side-by-side `SpecsTable`: display, battery, GPS, health sensors, price
- Highlight winning spec in green

**Size Finder Widget**
- Wrist size quiz (Small/Medium/Large)
- Recommends case size (40mm / 44mm / 46mm)

**Deal of the Day**
- Countdown timer component with live updates
- Fetch from `/api/promotions/deal-of-day`

**Color & Strap Variant Selector**
- Visual swatch selector on product detail
- Updates product image and price dynamically
- Stock check per variant from Supabase real-time

---

### 1.4 State Management (Zustand)

```bash
npm install zustand
```

```typescript
// src/store/cartStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  productId: string
  variantId: string
  name: string
  price: number
  quantity: number
  image: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (variantId: string) => void
  updateQuantity: (variantId: string, qty: number) => void
  clearCart: () => void
  total: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(i => i.variantId === item.variantId)
          if (existing) {
            return { items: state.items.map(i =>
              i.variantId === item.variantId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            )}
          }
          return { items: [...state.items, item] }
        }),
      removeItem: (variantId) =>
        set((state) => ({ items: state.items.filter(i => i.variantId !== variantId) })),
      updateQuantity: (variantId, qty) =>
        set((state) => ({ items: state.items.map(i =>
          i.variantId === variantId ? { ...i, quantity: qty } : i
        )})),
      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    { name: 'cart-storage' }
  )
)
```

---

### 1.5 Next.js Configuration Updates

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,         // Enable optimization (remove old setting)
    domains: ['your-project.supabase.co'],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.BACKEND_URL}/api/v1/:path*`,
      },
    ]
  },
}

export default nextConfig
```

---

## Phase 2 — Node.js Backend (Express.js API)

### 2.1 Backend Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── products.controller.ts
│   │   ├── orders.controller.ts
│   │   ├── cart.controller.ts
│   │   ├── coupons.controller.ts
│   │   ├── reviews.controller.ts
│   │   ├── payments.controller.ts
│   │   ├── support.controller.ts
│   │   └── admin/
│   │       ├── analytics.controller.ts
│   │       ├── inventory.controller.ts
│   │       └── users.controller.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── products.routes.ts
│   │   ├── orders.routes.ts
│   │   ├── cart.routes.ts
│   │   ├── coupons.routes.ts
│   │   ├── reviews.routes.ts
│   │   ├── payments.routes.ts
│   │   ├── support.routes.ts
│   │   └── admin.routes.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts       # Verify Supabase JWT
│   │   ├── admin.middleware.ts      # Check admin role
│   │   ├── rateLimit.middleware.ts  # Rate limiting
│   │   ├── validate.middleware.ts   # Zod schema validation
│   │   └── error.middleware.ts      # Global error handler
│   ├── services/
│   │   ├── supabase.service.ts      # Supabase admin client
│   │   ├── payment.service.ts       # Razorpay/Stripe integration
│   │   ├── email.service.ts         # Nodemailer + email templates
│   │   ├── inventory.service.ts     # Stock management logic
│   │   └── analytics.service.ts    # Revenue/sales aggregation
│   ├── lib/
│   │   ├── supabase.ts             # Supabase service-role client
│   │   └── mailer.ts               # Nodemailer config
│   ├── types/
│   │   └── index.ts
│   └── app.ts                      # Express app setup
├── .env
├── package.json
└── tsconfig.json
```

---

### 2.2 Dependencies

```bash
# Initialize backend
mkdir backend && cd backend
npm init -y
npm install express cors helmet morgan dotenv
npm install @supabase/supabase-js
npm install zod
npm install razorpay            # Payment gateway
npm install nodemailer          # Email
npm install express-rate-limit  # Rate limiting
npm install jsonwebtoken        # JWT verification
npm install -D typescript @types/express @types/node @types/nodemailer ts-node nodemon
```

---

### 2.3 Express App Setup

```typescript
// backend/src/app.ts
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { authRoutes } from './routes/auth.routes'
import { productRoutes } from './routes/products.routes'
import { orderRoutes } from './routes/orders.routes'
import { cartRoutes } from './routes/cart.routes'
import { couponRoutes } from './routes/coupons.routes'
import { paymentRoutes } from './routes/payments.routes'
import { supportRoutes } from './routes/support.routes'
import { adminRoutes } from './routes/admin.routes'
import { errorMiddleware } from './middleware/error.middleware'
import { rateLimiter } from './middleware/rateLimit.middleware'

const app = express()

app.use(helmet())
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }))
app.use(morgan('dev'))
app.use(express.json())
app.use(rateLimiter)

// Public routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/support', supportRoutes)

// Protected routes (require Supabase JWT)
app.use('/api/v1/cart', cartRoutes)
app.use('/api/v1/orders', orderRoutes)
app.use('/api/v1/coupons', couponRoutes)
app.use('/api/v1/payments', paymentRoutes)

// Admin routes (require admin role)
app.use('/api/v1/admin', adminRoutes)

// Global error handler
app.use(errorMiddleware)

export { app }
```

---

### 2.4 Auth Middleware (Supabase JWT Verification)

```typescript
// backend/src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'Unauthorized' })

  const { data: { user }, error } = await supabase.auth.getUser(token)
  if (error || !user) return res.status(401).json({ error: 'Invalid token' })

  req.user = user
  next()
}

export async function adminMiddleware(req: Request, res: Response, next: NextFunction) {
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', req.user.id)
    .single()

  if (profile?.role !== 'admin') return res.status(403).json({ error: 'Forbidden' })
  next()
}
```

---

### 2.5 Full API Endpoint Reference

#### Auth Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/auth/register` | Create account (email + password) |
| POST | `/api/v1/auth/login` | Login → returns Supabase session |
| POST | `/api/v1/auth/logout` | Revoke session |
| POST | `/api/v1/auth/forgot-password` | Send reset email |
| POST | `/api/v1/auth/reset-password` | Update password with token |
| GET | `/api/v1/auth/me` | Get current user profile |

#### Products Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/products` | List products (filter, sort, paginate) |
| GET | `/api/v1/products/:slug` | Get product by slug |
| GET | `/api/v1/products/featured` | Get featured watches |
| GET | `/api/v1/products/search?q=` | Full-text search |
| GET | `/api/v1/products/:id/reviews` | Get product reviews |
| POST | `/api/v1/products/:id/reviews` | Submit review (auth required) |

**Query parameters for product listing:**
```
?brand=apple,samsung
&priceMin=5000&priceMax=30000
&features=gps,heart-rate,ecg
&waterResistance=5atm
&sort=price_asc|price_desc|newest|popular|rating
&page=1&limit=20
```

#### Orders Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/orders` | Place new order |
| GET | `/api/v1/orders` | Get user's orders |
| GET | `/api/v1/orders/:id` | Get order details |
| PATCH | `/api/v1/orders/:id/cancel` | Cancel order |
| GET | `/api/v1/orders/:id/track` | Get tracking info |

#### Coupons Endpoint

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/coupons/validate` | Validate coupon code + return discount |

#### Payments Endpoints (Razorpay)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/payments/create-order` | Create Razorpay order |
| POST | `/api/v1/payments/verify` | Verify payment signature |
| POST | `/api/v1/payments/webhook` | Razorpay webhook handler |

#### Support Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/support/contact` | Submit contact form |
| GET | `/api/v1/support/faqs` | Get FAQ list |

#### Admin Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET/POST | `/api/v1/admin/products` | List / create products |
| PUT/DELETE | `/api/v1/admin/products/:id` | Update / delete product |
| POST | `/api/v1/admin/products/bulk-import` | CSV import |
| GET | `/api/v1/admin/orders` | All orders (filter by status/date) |
| PATCH | `/api/v1/admin/orders/:id/status` | Update order status |
| GET | `/api/v1/admin/inventory` | Stock levels per variant |
| PATCH | `/api/v1/admin/inventory/:variantId` | Update stock |
| GET | `/api/v1/admin/users` | All customers |
| GET | `/api/v1/admin/analytics/revenue` | Revenue data (daily/monthly) |
| GET | `/api/v1/admin/analytics/top-products` | Best-selling watches |
| GET/POST | `/api/v1/admin/coupons` | Manage coupons |
| GET/POST | `/api/v1/admin/banners` | Manage banners |

---

### 2.6 Payment Integration (Razorpay)

```typescript
// backend/src/services/payment.service.ts
import Razorpay from 'razorpay'
import crypto from 'crypto'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function createOrder(amount: number, orderId: string) {
  return await razorpay.orders.create({
    amount: amount * 100,          // Convert to paise
    currency: 'INR',
    receipt: orderId,
    notes: { orderId },
  })
}

export function verifyPayment(
  razorpayOrderId: string,
  razorpayPaymentId: string,
  razorpaySignature: string
): boolean {
  const body = razorpayOrderId + '|' + razorpayPaymentId
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(body)
    .digest('hex')
  return expectedSignature === razorpaySignature
}
```

---

### 2.7 Email Service (Nodemailer)

```typescript
// backend/src/services/email.service.ts
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendOrderConfirmation(to: string, order: any) {
  // Use email-template.html as base template
  const template = fs.readFileSync(
    path.join(__dirname, '../../templates/email-template.html'), 'utf-8'
  )
  const html = template
    .replace('{{ORDER_ID}}', order.id)
    .replace('{{CUSTOMER_NAME}}', order.customer_name)
    .replace('{{TOTAL}}', `₹${order.total}`)

  await transporter.sendMail({
    from: `"ChronoShop" <${process.env.SMTP_USER}>`,
    to,
    subject: `Order Confirmed — #${order.id}`,
    html,
  })
}

export async function sendShippingNotification(to: string, trackingUrl: string) {
  await transporter.sendMail({
    from: `"ChronoShop" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Your smartwatch has shipped! 📦',
    html: `<p>Track your order: <a href="${trackingUrl}">${trackingUrl}</a></p>`,
  })
}
```

---

## Phase 3 — Supabase Database

### 3.1 Setup

```bash
# Install Supabase CLI
npm install -g supabase

# Link to your project
supabase login
supabase init
supabase link --project-ref YOUR_PROJECT_REF
```

Install client SDK:
```bash
npm install @supabase/supabase-js
```

Create `.env` in both frontend and backend:
```env
# Frontend (.env.local)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Backend (.env)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

### 3.2 Database Schema (SQL Migrations)

Run these in **Supabase → SQL Editor** or as migration files in `supabase/migrations/`.

```sql
-- ============================================================
-- MIGRATION: 001_initial_schema.sql
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ──────────────────────────────────────────────
-- PROFILES (extends Supabase auth.users)
-- ──────────────────────────────────────────────
CREATE TABLE profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name   TEXT,
  phone       TEXT,
  role        TEXT DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
  avatar_url  TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE handle_new_user();

-- ──────────────────────────────────────────────
-- ADDRESSES
-- ──────────────────────────────────────────────
CREATE TABLE addresses (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id      UUID REFERENCES profiles(id) ON DELETE CASCADE,
  label        TEXT DEFAULT 'Home',   -- Home / Work / Other
  full_name    TEXT NOT NULL,
  phone        TEXT NOT NULL,
  line1        TEXT NOT NULL,
  line2        TEXT,
  city         TEXT NOT NULL,
  state        TEXT NOT NULL,
  pincode      TEXT NOT NULL,
  is_default   BOOLEAN DEFAULT FALSE,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ──────────────────────────────────────────────
-- BRANDS
-- ──────────────────────────────────────────────
CREATE TABLE brands (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT NOT NULL UNIQUE,
  slug        TEXT NOT NULL UNIQUE,
  logo_url    TEXT,
  description TEXT
);

-- ──────────────────────────────────────────────
-- CATEGORIES
-- ──────────────────────────────────────────────
CREATE TABLE categories (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT NOT NULL,
  slug        TEXT NOT NULL UNIQUE,
  parent_id   UUID REFERENCES categories(id),
  description TEXT
);

-- Seed categories
INSERT INTO categories (name, slug) VALUES
  ('Smart Watches', 'smart-watches'),
  ('Fitness Trackers', 'fitness-trackers'),
  ('Kids Watches', 'kids-watches'),
  ('Luxury Smart Watches', 'luxury-smart-watches');

-- ──────────────────────────────────────────────
-- PRODUCTS (Smartwatches)
-- ──────────────────────────────────────────────
CREATE TABLE products (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brand_id            UUID REFERENCES brands(id),
  category_id         UUID REFERENCES categories(id),
  name                TEXT NOT NULL,
  slug                TEXT NOT NULL UNIQUE,
  description         TEXT,
  short_description   TEXT,
  base_price          NUMERIC(10,2) NOT NULL,
  sale_price          NUMERIC(10,2),
  is_featured         BOOLEAN DEFAULT FALSE,
  is_active           BOOLEAN DEFAULT TRUE,
  -- Smartwatch Specs
  display_size        TEXT,         -- e.g. "1.9 inch"
  display_type        TEXT,         -- AMOLED / LCD / E-Ink
  battery_life        TEXT,         -- e.g. "18 hours"
  water_resistance    TEXT,         -- e.g. "5 ATM", "IP68"
  os_compatibility    TEXT[],       -- ['iOS', 'Android']
  connectivity        TEXT[],       -- ['Bluetooth 5.0', 'Wi-Fi', 'LTE']
  health_sensors      TEXT[],       -- ['Heart Rate', 'SpO2', 'ECG', 'GPS']
  case_material       TEXT,         -- Aluminum / Stainless Steel / Titanium
  weight_grams        INTEGER,
  -- SEO
  meta_title          TEXT,
  meta_description    TEXT,
  -- Timestamps
  created_at          TIMESTAMPTZ DEFAULT NOW(),
  updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- ──────────────────────────────────────────────
-- PRODUCT VARIANTS (Color + Strap combinations)
-- ──────────────────────────────────────────────
CREATE TABLE product_variants (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id    UUID REFERENCES products(id) ON DELETE CASCADE,
  color_name    TEXT NOT NULL,       -- "Midnight Black"
  color_hex     TEXT,                -- "#1a1a1a"
  strap_type    TEXT,                -- "Silicone" / "Metal" / "Nylon"
  case_size_mm  INTEGER,             -- 40 / 44 / 46
  sku           TEXT UNIQUE NOT NULL,
  price_delta   NUMERIC(10,2) DEFAULT 0, -- Price adjustment from base
  stock         INTEGER DEFAULT 0,
  images        TEXT[],              -- Array of image URLs
  is_active     BOOLEAN DEFAULT TRUE,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ──────────────────────────────────────────────
-- PRODUCT IMAGES (Additional gallery images)
-- ──────────────────────────────────────────────
CREATE TABLE product_images (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id  UUID REFERENCES products(id) ON DELETE CASCADE,
  url         TEXT NOT NULL,
  alt_text    TEXT,
  sort_order  INTEGER DEFAULT 0,
  is_primary  BOOLEAN DEFAULT FALSE
);

-- ──────────────────────────────────────────────
-- ORDERS
-- ──────────────────────────────────────────────
CREATE TABLE orders (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id             UUID REFERENCES profiles(id),
  address_id          UUID REFERENCES addresses(id),
  status              TEXT DEFAULT 'pending'
                      CHECK (status IN ('pending','confirmed','processing',
                                        'shipped','delivered','cancelled','refunded')),
  payment_status      TEXT DEFAULT 'unpaid'
                      CHECK (payment_status IN ('unpaid','paid','failed','refunded')),
  payment_method      TEXT,          -- razorpay / cod
  razorpay_order_id   TEXT,
  razorpay_payment_id TEXT,
  subtotal            NUMERIC(10,2) NOT NULL,
  discount            NUMERIC(10,2) DEFAULT 0,
  shipping_charge     NUMERIC(10,2) DEFAULT 0,
  total               NUMERIC(10,2) NOT NULL,
  coupon_code         TEXT,
  notes               TEXT,
  tracking_number     TEXT,
  estimated_delivery  DATE,
  placed_at           TIMESTAMPTZ DEFAULT NOW(),
  updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- ──────────────────────────────────────────────
-- ORDER ITEMS
-- ──────────────────────────────────────────────
CREATE TABLE order_items (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id    UUID REFERENCES orders(id) ON DELETE CASCADE,
  variant_id  UUID REFERENCES product_variants(id),
  product_id  UUID REFERENCES products(id),
  quantity    INTEGER NOT NULL,
  unit_price  NUMERIC(10,2) NOT NULL,
  total_price NUMERIC(10,2) NOT NULL,
  -- Snapshot of product at time of purchase
  product_snapshot JSONB
);

-- ──────────────────────────────────────────────
-- COUPONS
-- ──────────────────────────────────────────────
CREATE TABLE coupons (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code            TEXT NOT NULL UNIQUE,
  type            TEXT CHECK (type IN ('percentage', 'fixed')),
  value           NUMERIC(10,2) NOT NULL,
  min_order_value NUMERIC(10,2) DEFAULT 0,
  max_uses        INTEGER,
  used_count      INTEGER DEFAULT 0,
  valid_from      TIMESTAMPTZ DEFAULT NOW(),
  valid_until     TIMESTAMPTZ,
  is_active       BOOLEAN DEFAULT TRUE,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ──────────────────────────────────────────────
-- REVIEWS
-- ──────────────────────────────────────────────
CREATE TABLE reviews (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id  UUID REFERENCES products(id) ON DELETE CASCADE,
  user_id     UUID REFERENCES profiles(id),
  order_id    UUID REFERENCES orders(id),
  rating      INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  title       TEXT,
  body        TEXT,
  images      TEXT[],
  is_verified BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ──────────────────────────────────────────────
-- WISHLISTS
-- ──────────────────────────────────────────────
CREATE TABLE wishlists (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID REFERENCES profiles(id) ON DELETE CASCADE,
  product_id  UUID REFERENCES products(id) ON DELETE CASCADE,
  variant_id  UUID REFERENCES product_variants(id),
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, product_id)
);

-- ──────────────────────────────────────────────
-- PROMOTIONS / BANNERS
-- ──────────────────────────────────────────────
CREATE TABLE banners (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title       TEXT,
  subtitle    TEXT,
  image_url   TEXT NOT NULL,
  link_url    TEXT,
  position    TEXT DEFAULT 'hero',   -- hero / midpage / sidebar
  sort_order  INTEGER DEFAULT 0,
  is_active   BOOLEAN DEFAULT TRUE,
  valid_from  TIMESTAMPTZ DEFAULT NOW(),
  valid_until TIMESTAMPTZ
);

CREATE TABLE promotions (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name            TEXT NOT NULL,
  type            TEXT CHECK (type IN ('deal_of_day', 'flash_sale', 'seasonal')),
  product_id      UUID REFERENCES products(id),
  discounted_price NUMERIC(10,2),
  ends_at         TIMESTAMPTZ NOT NULL,
  is_active       BOOLEAN DEFAULT TRUE
);

-- ──────────────────────────────────────────────
-- INVENTORY LOGS (Audit trail)
-- ──────────────────────────────────────────────
CREATE TABLE inventory_logs (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  variant_id  UUID REFERENCES product_variants(id),
  change      INTEGER NOT NULL,       -- Positive = restock, Negative = sale
  reason      TEXT,                   -- 'sale' / 'restock' / 'adjustment'
  reference   TEXT,                   -- Order ID or restock PO number
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ──────────────────────────────────────────────
-- INDEXES
-- ──────────────────────────────────────────────
CREATE INDEX idx_products_brand ON products(brand_id);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_variants_product ON product_variants(product_id);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_reviews_product ON reviews(product_id);
CREATE INDEX idx_wishlists_user ON wishlists(user_id);

-- ──────────────────────────────────────────────
-- FULL-TEXT SEARCH
-- ──────────────────────────────────────────────
ALTER TABLE products ADD COLUMN fts_vector TSVECTOR
  GENERATED ALWAYS AS (
    to_tsvector('english', coalesce(name,'') || ' ' || coalesce(description,'') || ' ' || coalesce(short_description,''))
  ) STORED;

CREATE INDEX idx_products_fts ON products USING GIN(fts_vector);
```

---

### 3.3 Row-Level Security (RLS) Policies

```sql
-- ============================================================
-- MIGRATION: 002_rls_policies.sql
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- PROFILES: Users can only read/update their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE USING (auth.uid() = id);

-- ADDRESSES: Users manage only their own addresses
CREATE POLICY "Users manage own addresses"
  ON addresses FOR ALL USING (auth.uid() = user_id);

-- ORDERS: Users can only see their own orders
CREATE POLICY "Users view own orders"
  ON orders FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users create own orders"
  ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);

-- WISHLISTS: Users manage own wishlist
CREATE POLICY "Users manage own wishlist"
  ON wishlists FOR ALL USING (auth.uid() = user_id);

-- REVIEWS: Anyone can read; only authenticated users can write
CREATE POLICY "Reviews are publicly readable"
  ON reviews FOR SELECT USING (true);

CREATE POLICY "Authenticated users can write reviews"
  ON reviews FOR INSERT WITH CHECK (auth.uid() = user_id);

-- PRODUCTS: Publicly readable
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Products publicly readable"
  ON products FOR SELECT USING (is_active = true);

-- Admins bypass RLS via service role key (backend uses service role)
```

---

### 3.4 Supabase Storage Buckets

```sql
-- Run in Supabase SQL Editor or via the dashboard
INSERT INTO storage.buckets (id, name, public) VALUES
  ('product-images', 'product-images', true),
  ('banner-images', 'banner-images', true),
  ('review-images', 'review-images', true),
  ('avatars', 'avatars', true);
```

Storage policies:
```sql
-- Public read for product/banner images
CREATE POLICY "Public read product-images"
  ON storage.objects FOR SELECT USING (bucket_id = 'product-images');

-- Authenticated uploads for reviews
CREATE POLICY "Auth upload review-images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'review-images' AND auth.role() = 'authenticated');

-- Users can upload their own avatars
CREATE POLICY "Auth upload avatars"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
```

---

### 3.5 Supabase Real-Time Subscriptions

Enable real-time on stock and orders in Supabase dashboard → **Database → Replication** and add:
- `product_variants` (for live stock updates on product pages)
- `orders` (for admin order dashboard live updates)

**Frontend usage example:**
```typescript
// hooks/useStockSubscription.ts
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export function useStockSubscription(variantId: string) {
  const supabase = createClient()
  const [stock, setStock] = useState<number | null>(null)

  useEffect(() => {
    const channel = supabase
      .channel(`stock:${variantId}`)
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'product_variants',
        filter: `id=eq.${variantId}`,
      }, (payload) => {
        setStock(payload.new.stock)
      })
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [variantId])

  return stock
}
```

---

### 3.6 Supabase Edge Functions

Deploy these for server-side logic without the backend (optional, alternative to Node.js for specific tasks):

```bash
# Create edge function
supabase functions new send-order-confirmation

# Deploy
supabase functions deploy send-order-confirmation --no-verify-jwt
```

**Recommended Edge Functions:**
- `send-order-confirmation` — triggered by order insert
- `update-inventory` — triggered by order_items insert
- `expire-coupons` — scheduled daily via pg_cron

```sql
-- Schedule coupon expiry using pg_cron (enable in Supabase dashboard)
SELECT cron.schedule(
  'expire-coupons',
  '0 0 * * *',  -- Daily at midnight
  $$UPDATE coupons SET is_active = FALSE WHERE valid_until < NOW()$$
);
```

---

## Phase 4 — Smartwatch-Specific Features

### 4.1 Watch Comparison Tool

```tsx
// src/app/(consumer)/compare/page.tsx
// Allows selecting up to 3 watches to compare side-by-side

const COMPARE_SPECS = [
  'display_size', 'display_type', 'battery_life',
  'water_resistance', 'health_sensors', 'connectivity',
  'case_material', 'weight_grams', 'os_compatibility'
]
```

### 4.2 Size Finder Quiz

```tsx
// src/components/product/SizeFinder.tsx
// Step 1: Measure wrist in cm
// Step 2: Recommend 40mm (< 17cm), 44mm (17-19cm), 46mm (> 19cm)
// Step 3: Filter catalog by recommended size
```

### 4.3 Health Features Filter

Special filter group on `/catalog`:
- ❤️ Heart Rate Monitor
- 🩸 SpO2 / Blood Oxygen
- ⚡ ECG / EKG
- 📍 Built-in GPS
- 😴 Sleep Tracking
- 🏃 Activity Tracking
- 💧 Water Resistant (5 ATM / 10 ATM)

---

## Phase 5 — Environment Variables

```env
# .env (Backend)
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=your-razorpay-secret

# SMTP (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password

# .env.local (Frontend)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxx
BACKEND_URL=http://localhost:5000
```

---

## Phase 6 — Test Cases

### 6.1 Frontend Tests (Jest + React Testing Library)

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

**`__tests__/components/ProductCard.test.tsx`**
```typescript
import { render, screen } from '@testing-library/react'
import { ProductCard } from '@/components/product/ProductCard'

const mockProduct = {
  id: '1',
  name: 'Apple Watch Series 9',
  base_price: 41900,
  sale_price: 38900,
  images: ['/watch.jpg'],
  slug: 'apple-watch-series-9',
}

describe('ProductCard', () => {
  it('renders product name', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('Apple Watch Series 9')).toBeInTheDocument()
  })

  it('shows sale price when available', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('₹38,900')).toBeInTheDocument()
  })

  it('shows original price with strikethrough', () => {
    render(<ProductCard product={mockProduct} />)
    const originalPrice = screen.getByText('₹41,900')
    expect(originalPrice).toHaveStyle('text-decoration: line-through')
  })
})
```

**`__tests__/store/cartStore.test.ts`**
```typescript
import { useCartStore } from '@/store/cartStore'
import { renderHook, act } from '@testing-library/react'

const mockItem = {
  productId: 'p1',
  variantId: 'v1',
  name: 'Samsung Galaxy Watch 6',
  price: 28999,
  quantity: 1,
  image: '/watch.jpg'
}

describe('Cart Store', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart()
  })

  it('adds item to cart', () => {
    const { result } = renderHook(() => useCartStore())
    act(() => result.current.addItem(mockItem))
    expect(result.current.items).toHaveLength(1)
  })

  it('increments quantity for duplicate item', () => {
    const { result } = renderHook(() => useCartStore())
    act(() => { result.current.addItem(mockItem); result.current.addItem(mockItem) })
    expect(result.current.items[0].quantity).toBe(2)
  })

  it('calculates total correctly', () => {
    const { result } = renderHook(() => useCartStore())
    act(() => result.current.addItem({ ...mockItem, quantity: 2 }))
    expect(result.current.total()).toBe(57998)
  })

  it('removes item from cart', () => {
    const { result } = renderHook(() => useCartStore())
    act(() => { result.current.addItem(mockItem); result.current.removeItem('v1') })
    expect(result.current.items).toHaveLength(0)
  })
})
```

**`__tests__/hooks/useSearch.test.ts`**
```typescript
import { renderHook, act } from '@testing-library/react'
import { useSearch } from '@/hooks/useSearch'

describe('useSearch Hook', () => {
  it('debounces search query', async () => {
    const { result } = renderHook(() => useSearch())
    act(() => result.current.setQuery('apple'))
    expect(result.current.isLoading).toBe(true)
  })
})
```

---

### 6.2 Backend Tests (Jest + Supertest)

```bash
cd backend
npm install -D jest supertest @types/supertest ts-jest
```

**`__tests__/routes/products.test.ts`**
```typescript
import request from 'supertest'
import { app } from '../src/app'

describe('GET /api/v1/products', () => {
  it('returns 200 with product list', async () => {
    const res = await request(app).get('/api/v1/products')
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('data')
    expect(Array.isArray(res.body.data)).toBe(true)
  })

  it('filters by brand', async () => {
    const res = await request(app).get('/api/v1/products?brand=apple')
    expect(res.status).toBe(200)
    res.body.data.forEach((p: any) => {
      expect(p.brand.slug).toBe('apple')
    })
  })

  it('paginates correctly', async () => {
    const res = await request(app).get('/api/v1/products?page=1&limit=5')
    expect(res.body.data.length).toBeLessThanOrEqual(5)
  })
})

describe('GET /api/v1/products/:slug', () => {
  it('returns product by slug', async () => {
    const res = await request(app).get('/api/v1/products/apple-watch-series-9')
    expect(res.status).toBe(200)
    expect(res.body.slug).toBe('apple-watch-series-9')
  })

  it('returns 404 for unknown slug', async () => {
    const res = await request(app).get('/api/v1/products/nonexistent-watch')
    expect(res.status).toBe(404)
  })
})
```

**`__tests__/routes/coupons.test.ts`**
```typescript
import request from 'supertest'
import { app } from '../src/app'

describe('POST /api/v1/coupons/validate', () => {
  it('validates a valid coupon', async () => {
    const res = await request(app)
      .post('/api/v1/coupons/validate')
      .set('Authorization', 'Bearer valid_jwt_token')
      .send({ code: 'SAVE10', cartTotal: 20000 })
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('discount')
  })

  it('rejects expired coupon', async () => {
    const res = await request(app)
      .post('/api/v1/coupons/validate')
      .set('Authorization', 'Bearer valid_jwt_token')
      .send({ code: 'EXPIRED', cartTotal: 20000 })
    expect(res.status).toBe(400)
    expect(res.body.error).toMatch(/expired/i)
  })

  it('rejects coupon below minimum order value', async () => {
    const res = await request(app)
      .post('/api/v1/coupons/validate')
      .set('Authorization', 'Bearer valid_jwt_token')
      .send({ code: 'SAVE500', cartTotal: 100 })
    expect(res.status).toBe(400)
    expect(res.body.error).toMatch(/minimum/i)
  })
})
```

**`__tests__/routes/orders.test.ts`**
```typescript
import request from 'supertest'
import { app } from '../src/app'

describe('POST /api/v1/orders', () => {
  it('creates order for authenticated user', async () => {
    const res = await request(app)
      .post('/api/v1/orders')
      .set('Authorization', 'Bearer valid_user_jwt')
      .send({
        items: [{ variantId: 'v1', quantity: 1 }],
        addressId: 'addr1',
        paymentMethod: 'razorpay'
      })
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('orderId')
    expect(res.body).toHaveProperty('razorpayOrderId')
  })

  it('rejects order without auth', async () => {
    const res = await request(app).post('/api/v1/orders').send({})
    expect(res.status).toBe(401)
  })

  it('returns 400 if item is out of stock', async () => {
    const res = await request(app)
      .post('/api/v1/orders')
      .set('Authorization', 'Bearer valid_user_jwt')
      .send({ items: [{ variantId: 'out_of_stock_variant', quantity: 1 }] })
    expect(res.status).toBe(400)
    expect(res.body.error).toMatch(/stock/i)
  })
})
```

**`__tests__/services/payment.service.test.ts`**
```typescript
import { verifyPayment } from '../src/services/payment.service'

describe('Payment Service', () => {
  it('correctly verifies a valid Razorpay signature', () => {
    const orderId = 'order_test123'
    const paymentId = 'pay_test456'
    // In tests, use a known secret and pre-computed signature
    const result = verifyPayment(orderId, paymentId, 'valid_signature')
    expect(result).toBe(true)
  })

  it('rejects tampered payment signature', () => {
    const result = verifyPayment('order_abc', 'pay_xyz', 'tampered_signature')
    expect(result).toBe(false)
  })
})
```

---

### 6.3 End-to-End Tests (Playwright)

```bash
npm install -D @playwright/test
npx playwright install
```

**`e2e/checkout-flow.spec.ts`**
```typescript
import { test, expect } from '@playwright/test'

test.describe('Complete checkout flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Login
    await page.click('[data-testid="nav-login"]')
    await page.fill('[name="email"]', 'test@example.com')
    await page.fill('[name="password"]', 'TestPass123!')
    await page.click('[type="submit"]')
    await expect(page.locator('[data-testid="nav-profile"]')).toBeVisible()
  })

  test('adds watch to cart and proceeds to checkout', async ({ page }) => {
    await page.goto('/catalog')
    await page.click('[data-testid="product-card"]:first-child')
    await expect(page.locator('[data-testid="product-title"]')).toBeVisible()
    await page.click('[data-testid="add-to-cart"]')
    await expect(page.locator('[data-testid="cart-count"]')).toHaveText('1')
    await page.click('[data-testid="go-to-cart"]')
    await page.click('[data-testid="proceed-checkout"]')
    await expect(page).toHaveURL('/checkout')
  })

  test('validates address form fields', async ({ page }) => {
    await page.goto('/checkout')
    await page.click('[data-testid="place-order"]')
    await expect(page.locator('[data-testid="error-pincode"]')).toBeVisible()
  })
})
```

**`e2e/product-search.spec.ts`**
```typescript
import { test, expect } from '@playwright/test'

test('search returns relevant products', async ({ page }) => {
  await page.goto('/')
  await page.fill('[data-testid="search-input"]', 'Apple Watch')
  await page.waitForSelector('[data-testid="search-results"]')
  const results = await page.locator('[data-testid="search-result-item"]').count()
  expect(results).toBeGreaterThan(0)
})

test('filter by brand narrows results', async ({ page }) => {
  await page.goto('/catalog')
  await page.click('[data-testid="filter-brand-samsung"]')
  await page.waitForSelector('[data-testid="product-card"]')
  const cards = await page.locator('[data-testid="product-card"]').all()
  for (const card of cards) {
    await expect(card.locator('[data-testid="brand-name"]')).toHaveText('Samsung')
  }
})
```

**`e2e/admin.spec.ts`**
```typescript
import { test, expect } from '@playwright/test'

test.describe('Admin panel', () => {
  test.beforeEach(async ({ page }) => {
    // Login as admin
    await page.goto('/auth/login')
    await page.fill('[name="email"]', 'admin@chronoshop.com')
    await page.fill('[name="password"]', 'AdminPass123!')
    await page.click('[type="submit"]')
    await page.goto('/admin')
  })

  test('admin dashboard loads with stats', async ({ page }) => {
    await expect(page.locator('[data-testid="kpi-revenue"]')).toBeVisible()
    await expect(page.locator('[data-testid="kpi-orders"]')).toBeVisible()
  })

  test('can create a new product', async ({ page }) => {
    await page.goto('/admin/products')
    await page.click('[data-testid="add-product"]')
    await page.fill('[name="name"]', 'Test Watch Pro')
    await page.fill('[name="base_price"]', '15000')
    await page.click('[data-testid="save-product"]')
    await expect(page.locator('text=Test Watch Pro')).toBeVisible()
  })
})
```

---

### 6.4 Database Tests (Supabase local testing)

```bash
# Start local Supabase instance
supabase start

# Run migration tests
supabase db reset

# Seed test data
psql postgresql://postgres:postgres@localhost:54322/postgres -f seed.sql
```

**`supabase/tests/database.test.sql`**
```sql
-- Test: New user gets a profile automatically
DO $$
DECLARE v_user_id UUID := uuid_generate_v4();
BEGIN
  INSERT INTO auth.users (id, email) VALUES (v_user_id, 'test@test.com');
  ASSERT (SELECT COUNT(*) FROM profiles WHERE id = v_user_id) = 1,
    'Profile should be auto-created on user insert';
END $$;

-- Test: Stock cannot go negative
DO $$
BEGIN
  UPDATE product_variants SET stock = -1 WHERE id = (SELECT id FROM product_variants LIMIT 1);
  ASSERT false, 'Should have raised an error';
EXCEPTION WHEN check_violation THEN
  RAISE NOTICE 'Correctly prevented negative stock';
END $$;

-- Test: Full-text search works
DO $$
DECLARE result_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO result_count FROM products
  WHERE fts_vector @@ to_tsquery('english', 'apple');
  ASSERT result_count > 0, 'FTS should return results for apple';
END $$;
```

---

## Phase 7 — Deployment

### 7.1 Frontend (Vercel)

```bash
# Connect GitHub repo to Vercel
# Set environment variables in Vercel dashboard:
# NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
# NEXT_PUBLIC_RAZORPAY_KEY_ID, BACKEND_URL
vercel deploy --prod
```

### 7.2 Backend (Railway / Render)

```bash
# Railway deployment
railway login
railway init
railway add
railway up

# Or use Render with render.yaml:
# services:
#   - type: web
#     name: smartwatch-api
#     env: node
#     buildCommand: npm install && npm run build
#     startCommand: npm start
```

### 7.3 Supabase (Already hosted)
- Enable Email Auth in Supabase → **Authentication → Providers**
- Enable Google OAuth (Client ID + Secret from Google Cloud Console)
- Set Site URL and Redirect URLs in Supabase → **Authentication → URL Configuration**
- Enable real-time for `product_variants` and `orders` tables

---

## Quick Start Checklist

```
✅ Phase 0 (Done): HTML apps, convert.py, generate_admin.py, next.config.ts

□ Phase 1.1: Run convert.py for all 9 consumer views
□ Phase 1.2: Set up Zustand stores (cart + auth)
□ Phase 1.3: Build ProductCard, ProductFilter, CartDrawer components
□ Phase 1.4: Implement multi-step Checkout
□ Phase 1.5: Connect product pages to Supabase real-time stock

□ Phase 2.1: Initialize backend/ folder with Express + TypeScript
□ Phase 2.2: Implement auth middleware (Supabase JWT)
□ Phase 2.3: Build all API routes (products, orders, coupons)
□ Phase 2.4: Integrate Razorpay payment + webhook
□ Phase 2.5: Wire email service with email-template.html

□ Phase 3.1: Run SQL migrations in Supabase
□ Phase 3.2: Enable RLS policies
□ Phase 3.3: Create storage buckets
□ Phase 3.4: Enable real-time on product_variants and orders
□ Phase 3.5: Set up pg_cron for coupon expiry

□ Phase 4: Build Watch Comparison, Size Finder, Deal of Day
□ Phase 5: Configure all .env files

□ Phase 6.1: Write + run Jest/RTL frontend unit tests
□ Phase 6.2: Write + run Supertest backend API tests
□ Phase 6.3: Write + run Playwright E2E tests
□ Phase 6.4: Run Supabase SQL tests locally

□ Phase 7: Deploy frontend to Vercel, backend to Railway
```

---

*Document version: 1.0 — Smartwatch E-Commerce Implementation Plan*
