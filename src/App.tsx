import { useEffect, useMemo, useState } from "react";

// componentes de layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// páginas
import CatalogoPage from "./pages/Catalogo";
import HomePage from "./pages/Home";
import CarritoPage from "./pages/Carrito";

// productos
import { products } from "./data/product.tsx";

// contexto carrito + tipos
import { useCart, type Product } from "./context/CartContext";

// util moneda
const fmt = (n: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);

// Rutas disponibles
type Page = "/catalogo" | "/home" | "/info" | "/carrito";

// Leer la ruta actual
function readPathname(): Page {
  const p = location.pathname.toLowerCase();
  if (p === "/home" || p === "/info" || p === "/carrito") return p;
  return "/catalogo";
}

export default function App() {
  const [page, setPage] = useState<Page>(readPathname());

  // Carrito
  const { total } = useCart();

  // manejo de navegación y clicks en enlaces internos
  useEffect(() => {
    const onNav = () => setPage(readPathname());
    window.addEventListener("popstate", onNav);

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

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-light)]">
      <Header />

      <main className="mx-auto max-w-6xl p-6">
        {page === "/catalogo" && (
          <CatalogoPage
            products={products}
            cartTotal={fmt(total)}
          />
        )}

        {page === "/home" && <HomePage />}
        {page === "/carrito" && <CarritoPage fmt={fmt} />}
      </main>

      <Footer />
    </div>
  );
}

