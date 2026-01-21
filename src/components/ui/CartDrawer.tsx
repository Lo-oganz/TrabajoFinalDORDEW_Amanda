import React from "react";
import type { Product } from "./ui/Cards";

export type CartItem = { product: Product; qty: number };

type CartDrawerProps = {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onInc: (id: string) => void;
  onDec: (id: string) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
};

const fmt = (n: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);

export default function CartDrawer({
  open,
  items,
  onClose,
  onInc,
  onDec,
  onRemove,
  onClear,
}: CartDrawerProps) {
  const total = items.reduce((acc, it) => acc + it.product.price * it.qty, 0);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`absolute right-0 top-0 h-full w-[360px] max-w-[90vw] bg-slate-900 text-slate-100 shadow-2xl ring-1 ring-white/10 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-lg font-semibold">🛒 Carrito</h2>
          <button
            onClick={onClose}
            className="rounded-md px-3 py-1.5 bg-slate-800 hover:bg-slate-700"
          >
            ✕
          </button>
        </header>

        <div className="p-4 space-y-3 max-h-[calc(100vh-200px)] overflow-auto">
          {items.length === 0 ? (
            <p className="text-slate-400">Tu carrito está vacío.</p>
          ) : (
            items.map((it) => (
              <div
                key={it.product.id}
                className="flex items-start justify-between gap-3 rounded-lg border border-white/10 p-3"
              >
                <div className="min-w-0">
                  <p className="font-medium truncate">{it.product.name}</p>
                  <p className="text-sm text-slate-400">{fmt(it.product.price)}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => onDec(it.product.id)}
                      className="h-7 w-7 rounded bg-slate-800 hover:bg-slate-700"
                    >
                      −
                    </button>
                    <span className="w-6 text-center">{it.qty}</span>
                    <button
                      onClick={() => onInc(it.product.id)}
                      className="h-7 w-7 rounded bg-slate-800 hover:bg-slate-700"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemove(it.product.id)}
                      className="ml-2 text-sm text-rose-400 hover:text-rose-300"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
                <div className="shrink-0 font-semibold">{fmt(it.product.price * it.qty)}</div>
              </div>
            ))
          )}
        </div>

        <footer className="p-4 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{fmt(total)}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClear}
              disabled={items.length === 0}
              className="flex-1 rounded-lg border border-white/15 px-4 py-2 hover:bg-white/5 disabled:opacity-50"
            >
              Vaciar
            </button>
            <button
              disabled={items.length === 0}
              onClick={() => alert("🧾 Proceder al pago (demo)")}
              className="flex-1 rounded-lg bg-emerald-600 px-4 py-2 font-medium hover:bg-emerald-700 disabled:opacity-50"
            >
              Pagar
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
}
