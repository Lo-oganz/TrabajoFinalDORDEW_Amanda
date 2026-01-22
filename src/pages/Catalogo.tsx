// src/pages/Catalogo.tsx
import { Card, CardImage, CardTitle, CardContent } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { useCart, type Product } from "../context/CartContext";

type Props = {
  products: Product[];
  cartTotal: string;
};

export default function CatalogoPage({ products }: Props) {
  const { add } = useCart();

  return (
    <section id="catalogo" className="space-y-6 px-4 sm:px-6 lg:px-0">
      <h1 className="text-2xl font-bold text-center">Vocaloid & UTAU — Catálogo de Figuras</h1>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <Card
            key={p.id}
            className="transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {p.image ? (
              <CardImage src={p.image} alt={p.name} />
            ) : (
              <div className="h-40 w-full bg-slate-800/40 grid place-items-center text-slate-400">
                (Sin imagen)
              </div>
            )}

            <div className="p-4 text-center space-y-2">
              <CardTitle>{p.name}</CardTitle>
              <CardContent>{p.shortBio}</CardContent>
              <Button variant="buy" size="md" onClick={() => add(p)}>
                Comprar
              </Button>
            </div>
          </Card>
        ))}
      </section>
    </section>
  );
}
