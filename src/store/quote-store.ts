import { create } from "zustand";

export interface QuoteFormProduct {
  productId?: string;
  productName?: string;
}

interface QuoteStore {
  isOpen: boolean;
  product: QuoteFormProduct | null;
  open: (product?: QuoteFormProduct) => void;
  close: () => void;
}

export const useQuoteStore = create<QuoteStore>((set) => ({
  isOpen: false,
  product: null,
  open: (product) => set({ isOpen: true, product: product ?? null }),
  close: () => set({ isOpen: false, product: null }),
}));
