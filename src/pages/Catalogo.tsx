// src/pages/Catalogo.tsx
import { Card, CardImage, CardTitle, CardContent } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { useCart, type Product } from "../context/CartContext";
import { useState } from "react";
import SortBar from "../components/ui/SortBar.tsx";

type Props = {
  products: Product[];
  cartTotal: string;
};

export default function CatalogoPage({ products }: Props) {
  const { add } = useCart();
  const [sortBy, setSortBy] = useState<"price" | "name" | "tag">("price");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  // Ordenar productos según sortBy y sortDir
  const sortedProducts = [...products].sort((a, b) => {
    let cmp = 0;
    if (sortBy === "price") cmp = a.price - b.price;
    if (sortBy === "name") cmp = a.name.localeCompare(b.name);
    if (sortBy === "tag") cmp = (a.tag || "").localeCompare(b.tag || "");
    return sortDir === "asc" ? cmp : -cmp;
  });

  return (
    <section id="catalogo" className="space-y-6 px-4 sm:px-6 lg:px-0">
      <h1 className="text-2xl font-bold text-center">Vocaloid & UTAU — Catálogo de Figuras</h1>

      {/* Barra de ordenación */}
      <SortBar
        sortBy={sortBy}
        sortDir={sortDir}
        onChange={({ sortBy, sortDir }) => {
          setSortBy(sortBy);
          setSortDir(sortDir);
        }}
      />

      {/* Grid de productos */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sortedProducts.map((p) => (
          <Card
            key={p.id}
            className="transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-4 text-center space-y-2">
              <CardTitle>{p.name}</CardTitle>
              <CardContent>
                <p>{p.description}</p>
                <p className="text-sm text-slate-400">
                  Tamaño: {p.size} | Formato: {p.format}
                </p>
                <p className="text-lg font-bold mt-1">€{p.price.toFixed(2)}</p>
                {p.stock === 0 && (
                  <p className="text-red-500 font-bold">Agotado</p>
                )}
              </CardContent>

              <Button
                variant="buy"
                size="md"
                onClick={() => add(p)}
                disabled={p.stock === 0}
              >
                Comprar
              </Button>
            </div>
          </Card>
        ))}
      </section>
    </section>
  );
}
