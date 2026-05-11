import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProductBase {
  id: string;
  name: string;
  price: number;
  image: string;
  specs: Record<string, string>;
}

interface CompareState {
  products: ProductBase[];
  addProduct: (product: ProductBase) => void;
  removeProduct: (id: string) => void;
  clearComparison: () => void;
}

export const useCompare = create<CompareState>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (product) => set((state) => {
        if (state.products.length >= 3) {
          // Limit comparison to 3 products
          return { products: [...state.products.slice(1), product] };
        }
        if (state.products.find(p => p.id === product.id)) {
          return state; // Already exists
        }
        return { products: [...state.products, product] };
      }),
      removeProduct: (id) => set((state) => ({
        products: state.products.filter(p => p.id !== id)
      })),
      clearComparison: () => set({ products: [] })
    }),
    {
      name: 'silvanus-compare-storage',
    }
  )
);
