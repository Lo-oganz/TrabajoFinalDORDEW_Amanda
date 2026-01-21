// src/pages/Carrito.tsx
import { useCart } from "../context/CartContext";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";

type Props = { fmt: (n: number) => string };

export default function CarritoPage({ fmt }: Props) {
  const { items, inc, dec, remove, clear, total } = useCart();

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Carrito</h2>

      {items.length === 0 ? (
        <Card><CardContent>Tu carrito está vacío.</CardContent></Card>
      ) : (
        <Card>
          <CardHeader><CardTitle>Resumen</CardTitle></CardHeader>
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
              <button className="rounded bg-emerald-600 px-3 py-2 text-sm hover:bg-emerald-700">Confirmar reserva</button>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
