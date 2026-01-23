// src/pages/Catalogo.tsx
import { Card, CardTitle, CardContent } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { useCart, type Product } from "../context/CartContext";
import { useState, useMemo } from "react";
import SortBar, { type Filters } from "../components/ui/SortBar";

type Props = {
  products: Product[];
};

export default function CatalogoPage({ products }: Props) {
  const { add } = useCart(); // Hook de contexto para añadir productos al carrito

  // Estado local para filtros
  const [filters, setFilters] = useState<Filters>({
    sortBy: "price",
    sortDir: "asc",
  });

  // Filtrado y ordenamiento memoizado para optimizar render
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // 🔎 Filtrar por estilo
    if (filters.tag) {
      list = list.filter(p => p.tag === filters.tag);
    }

    // ↕️ Ordenar por precio o nombre
    list.sort((a, b) => {
      let cmp = 0;
      if (filters.sortBy === "price") cmp = a.price - b.price;
      if (filters.sortBy === "name") cmp = a.name.localeCompare(b.name);
      return filters.sortDir === "asc" ? cmp : -cmp;
    });

    return list;
  }, [products, filters]); // se recalcula solo si cambian productos o filtros

  return (
    <section id="catalogo" className="space-y-6 px-4 sm:px-6 lg:px-0">
      {/* Título */}
      <h1 className="text-3xl font-extrabold text-center text-pink-400 drop-shadow-lg uppercase">
        ALTERNATE CLOTHING
      </h1>

      {/* Barra de filtros */}
      <SortBar value={filters} onChange={setFilters} products={[]} />

      {/* Grid de productos */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((p) => (
          <Card key={p.id}>
            <div className="p-4 text-center space-y-2">
              <CardTitle>{p.name}</CardTitle>

              <CardContent>
                <p>{p.description}</p>

                {/* Mostrar tamaño y formato si existen */}
                {(p.size || p.format) && (
                  <p className="text-sm text-slate-400">
                    {p.size && <>Tamaño: {p.size}</>}
                    {p.size && p.format && " | "}
                    {p.format && <>Formato: {p.format}</>}
                  </p>
                )}

                <p className="text-lg font-bold mt-1">€{p.price.toFixed(2)}</p>

                {/* Mensaje de agotado */}
                {p.stock === 0 && (
                  <p className="text-red-500 font-bold uppercase">Agotado</p>
                )}
              </CardContent>

              {/* Botón para añadir al carrito */}
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
