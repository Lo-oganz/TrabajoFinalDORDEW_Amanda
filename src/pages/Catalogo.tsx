// src/pages/Catalogo.tsx
import React from "react";
import SortBar from "../components/ui/SortBar";
import Cards from "../components/ui/Cards";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { useCart, type Product } from "../context/CartContext";

type SortBy = "price" | "name" | "tag";
type SortDir = "asc" | "desc";

type Props = {
  products: Product[];
  sortBy: SortBy;
  sortDir: SortDir;
  setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
  setSortDir: React.Dispatch<React.SetStateAction<SortDir>>;
  cartTotal: string; // total ya formateado desde App
};

export default function CatalogoPage({
  products,
  sortBy,
  sortDir,
  setSortBy,
  setSortDir,
  cartTotal,
}: Props) {
  const { add, count } = useCart();

  return (
    <section id="catalogo" className="space-y-6">
      {/* Título sin botón extra de carrito */}
      <h1 className="text-2xl font-bold">Hotel — Catálogo</h1>

      {/* Ordenación */}
      <SortBar
        sortBy={sortBy}
        sortDir={sortDir}
        onChange={({ sortBy, sortDir }) => {
          setSortBy(sortBy);
          setSortDir(sortDir);
        }}
      />

      {/* Resumen superior */}
      <Card>
        <CardHeader>
          <CardTitle>Resumen</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="text-slate-300">
            Artículos: <span className="font-medium text-slate-100">{count}</span>
          </p>
          <p className="text-slate-300">
            Total: <span className="font-semibold text-slate-100">{cartTotal}</span>
          </p>
        </CardContent>
      </Card>

      {/* Grid de productos */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Cards
            key={p.id}
            product={p}
            onAddToCart={add}
            onBuyNow={(pp) => {
              add(pp);
              location.assign("/carrito");
            }}
          />
        ))}
      </section>
    </section>
  );
}
