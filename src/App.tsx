// src/App.tsx
import { useEffect, useMemo, useState } from "react";

// componentes de layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// páginas
import CatalogoPage from "./pages/Catalogo";
import HabitacionesPage from "./pages/Habitaciones";
import SpaPage from "./pages/Spa";
import ContactoPage from "./pages/Contacto";
import CarritoPage from "./pages/Carrito";

// contexto carrito + tipos
import { useCart, type Product } from "./context/CartContext";

// util moneda
const fmt = (n: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);

type Page = "/catalogo" | "/habitaciones" | "/spa" | "/contacto" | "/carrito";

function readPathname(): Page {
  const p = location.pathname.toLowerCase();
  if (p === "/habitaciones" || p === "/spa" || p === "/contacto" || p === "/carrito") return p;
  return "/catalogo";
}

export default function App() {
  // Router muy simple por pathname
  const [page, setPage] = useState<Page>(readPathname());
  useEffect(() => {
    const onNav = () => setPage(readPathname());
    window.addEventListener("popstate", onNav);
    // interceptar clicks en <a> internos
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      e.preventDefault();
      history.pushState({}, "", href);
      setPage(readPathname());
      window.scrollTo(0, 0);
    };
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", onNav);
      window.removeEventListener("click", onClick);
    };
  }, []);

  // Datos del catálogo
  const [products] = useState<Product[]>([
    {
      id: "suite-deluxe",
      name: "Suite Deluxe Vista Mar",
      description: "Amplia habitación con cama king size, terraza privada y vistas.",
      price: 180,
      tag: "Habitación",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "spa-premium",
      name: "Spa Premium 90 min",
      description: "Aromaterapia y jacuzzi exclusivo.",
      price: 45,
      tag: "Spa",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "dinner-romantic",
      name: "Cena Romántica",
      description: "Cena gourmet para dos con vino.",
      price: 70,
      tag: "Restaurante",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "pool-day",
      name: "Acceso Piscina Infinity",
      description: "Día de piscina + cóctel bienvenida.",
      price: 25,
      tag: "Ocio",
      image:
        "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "breakfast-buffet",
      name: "Desayuno Buffet Internacional",
      description: "Productos locales, fruta fresca y repostería.",
      price: 18,
      tag: "Restaurante",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1200",
    },
      {
     id: "breakfast-buffet-med",
     name: "Desayuno Buffet Mediterráneo",
     description: "Variedad de productos locales, frutas de temporada y repostería artesanal .",
     price: 17,
     tag: "Restaurante",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200"

    },
  ]);

  // Orden catálogo
  type SortBy = "price" | "name" | "tag";
  type SortDir = "asc" | "desc";
  const [sortBy, setSortBy] = useState<SortBy>("price");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const sortedProducts = useMemo(() => {
    const arr = [...products];
    arr.sort((a, b) => {
      const av = sortBy === "price" ? a.price : (a as any)[sortBy]?.toString().toLowerCase();
      const bv = sortBy === "price" ? b.price : (b as any)[sortBy]?.toString().toLowerCase();
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  }, [products, sortBy, sortDir]);

  // Carrito (solo para el total formateado)
  const { total } = useCart();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl p-6">
        {page === "/catalogo" && (
          <CatalogoPage
            products={sortedProducts}
            sortBy={sortBy}
            sortDir={sortDir}
            setSortBy={setSortBy}
            setSortDir={setSortDir}
            cartTotal={fmt(total)}  // <<— solo total formateado
          />
        )}

        {page === "/habitaciones" && <HabitacionesPage />}
        {page === "/spa" && <SpaPage />}
        {page === "/contacto" && <ContactoPage />}
        {page === "/carrito" && <CarritoPage fmt={fmt} />}
      </main>

      <Footer />
    </div>
  );
}
