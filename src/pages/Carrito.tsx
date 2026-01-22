// src/pages/Carrito.tsx
import { useCart } from "../context/CartContext";
import { Card, CardContent } from "../components/ui/Card";
import { useState } from "react";

type Props = { fmt: (n: number) => string };

export default function CarritoPage({ fmt }: Props) {
  const { items, inc, dec, remove, clear, total } = useCart();
  const [compraRealizada, setCompraRealizada] = useState(false);

  const handleCompra = () => {
    clear(); // vaciar carrito
    setCompraRealizada(true); // mostrar mensaje
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Carrito</h2>

      {items.length === 0 ? (
        <Card><CardContent>Tu carrito está vacío.</CardContent></Card>
      ) : (
        <Card>
          <CardContent className="space-y-4">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-slate-400 text-sm">{fmt(product.price)} · {product.tag}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="h-8 w-8 rounded bg-slate-800" onClick={() => dec(product.id)}>-</button>
                  <span className="min-w-6 text-center">{qty}</span>
                  <button className="h-8 w-8 rounded bg-slate-800" onClick={() => inc(product.id)}>+</button>
                  <button className="ml-2 text-sm text-red-400 hover:underline" onClick={() => remove(product.id)}>Quitar</button>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-2">
              <strong>Total</strong>
              <strong>{fmt(total)}</strong>
            </div>

            <div className="flex gap-2">
              <button className="rounded bg-slate-700 px-3 py-2 text-sm" onClick={clear}>Vaciar</button>
              <button
                className="rounded bg-emerald-600 px-3 py-2 text-sm hover:bg-emerald-700"
                onClick={handleCompra}
              >
                Confirmar compra
              </button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mensaje de compra realizada */}
      {compraRealizada && (
        <h3
          className="text-3xl font-extrabold text-center px-2 mt-4 drop-shadow-lg uppercase"
          style={{
            color: "#ff0084", // rosa chillón
            WebkitTextStroke: "0.6px black",
          }}
        >
          ¡Compra realizada correctamente!
        </h3>
      )}
    </section>
  );
}
