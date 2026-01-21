import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Product = {
  id: string; name: string; description: string; price: number;
  image?: string; tag?: string;
};
export type CartItem = { product: Product; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (p: Product) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
  total: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("cart:v1") || "[]"); } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("cart:v1", JSON.stringify(items));
    const c = items.reduce((a, it) => a + it.qty, 0);
    document.title = c ? `(${c}) Hotel` : "Hotel";
  }, [items]);

  const add = (p: Product) =>
    setItems(prev => {
      const i = prev.findIndex(it => it.product.id === p.id);
      if (i >= 0) { const copy = [...prev]; copy[i] = { ...copy[i], qty: copy[i].qty + 1 }; return copy; }
      return [...prev, { product: p, qty: 1 }];
    });

  const inc    = (id: string) => setItems(prev => prev.map(i => i.product.id === id ? { ...i, qty: i.qty + 1 } : i));
  const dec    = (id: string) => setItems(prev => prev.map(i => i.product.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i).filter(i => i.qty > 0));
  const remove = (id: string) => setItems(prev => prev.filter(i => i.product.id !== id));
  const clear  = () => setItems([]);

  const count = useMemo(() => items.reduce((a, it) => a + it.qty, 0), [items]);
  const total = useMemo(() => items.reduce((a, it) => a + it.product.price * it.qty, 0), [items]);

  return <Ctx.Provider value={{ items, add, inc, dec, remove, clear, count, total }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
