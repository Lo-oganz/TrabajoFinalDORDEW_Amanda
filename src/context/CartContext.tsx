import { createContext, useContext, useEffect, useMemo, useState } from "react";

// Tipos de datos
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  size?: string;
  format?: string;
  tag?: string;
  color?: string;
};

export type CartItem = { product: Product; qty: number };

type CartCtx = {
  items: CartItem[]; // productos en el carrito
  add: (p: Product) => void; // añadir producto
  inc: (id: string) => void; // incrementar cantidad
  dec: (id: string) => void; // decrementar cantidad
  remove: (id: string) => void; // eliminar producto
  clear: () => void; // vaciar carrito
  count: number; // número total de productos
  total: number; // precio total
};

// Contexto
const Ctx = createContext<CartCtx | null>(null); // contexto para el carrito

// Proveedor de contexto
export function CartProvider({ children }: { children: React.ReactNode }) {
  // Estado de los items del carrito, inicializado desde localStorage si existe
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("cart:alt-fashion:v1") || "[]");
    } catch {
      return [];
    }
  });

  // Guardar en localStorage y actualizar título del documento cada vez que items cambian
  useEffect(() => {
    localStorage.setItem("cart:alt-fashion:v1", JSON.stringify(items));
    const c = items.reduce((a, it) => a + it.qty, 0);
    document.title = c ? `(${c}) Alt Fashion Store` : "Alt Fashion Store";
  }, [items]);

  // Funciones para modificar el carrito
 
  // Añadir producto
  const add = (p: Product) => {
    if (p.stock === 0) return; // no añadir si está agotado
    setItems(prev => {
      const i = prev.findIndex(it => it.product.id === p.id);
      if (i >= 0) {
        const copy = [...prev];
        if (copy[i].qty < p.stock) {
          copy[i] = { ...copy[i], qty: copy[i].qty + 1 }; // aumentar cantidad
        }
        return copy;
      }
      return [...prev, { product: p, qty: 1 }]; // añadir nuevo producto
    });
  };

  // Incrementar cantidad
  const inc = (id: string) =>
    setItems(prev =>
      prev.map(i =>
        i.product.id === id && i.qty < i.product.stock
          ? { ...i, qty: i.qty + 1 }
          : i
      )
    );

  // Decrementar cantidad
  const dec = (id: string) =>
    setItems(prev =>
      prev
        .map(i =>
          i.product.id === id
            ? { ...i, qty: Math.max(1, i.qty - 1) }
            : i
        )
        .filter(i => i.qty > 0) // eliminar si qty llega a 0
    );

  // Eliminar producto
  const remove = (id: string) =>
    setItems(prev => prev.filter(i => i.product.id !== id));

  // Vaciar carrito
  const clear = () => setItems([]);

  // Valores derivados con useMemo para optimizar renderizados

  // Cantidad total de productos
  const count = useMemo(
    () => items.reduce((a, it) => a + it.qty, 0),
    [items]
  );

  // Precio total
  const total = useMemo(
    () => items.reduce((a, it) => a + it.product.price * it.qty, 0),
    [items]
  );

  // Proveedor de contexto
  return (
    <Ctx.Provider value={{ items, add, inc, dec, remove, clear, count, total }}>
      {children}
    </Ctx.Provider>
  );
}

// Hook personalizado para consumir el carrito
export function useCart() {
  const ctx = useContext(Ctx); // leer contexto
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
