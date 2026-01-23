import { useEffect, useState } from "react";

// componentes de layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// páginas
import CatalogoPage from "./pages/Catalogo";
import HomePage from "./pages/Home";
import CarritoPage from "./pages/Carrito";

// productos
import { products } from "./data/product.tsx";

// Formateo de moneda
const fmt = (n: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);

// Tipos de rutas posibles
type Page = "/home" | "/catalogo" | "/carrito";

// Determina la página inicial según la URL
function readPathname(): Page {
  const p = location.pathname.toLowerCase();
  if (p === "/catalogo"|| p === "/carrito") return p;
  return "/home"; // fallback
}

export default function App() {
  // Estado de la página actual
  const [page, setPage] = useState<Page>(readPathname());

  // Manejo de navegación y clicks en enlaces internos
  useEffect(() => {
    // Listener para cambios de historial (back/forward)
    const onNav = () => setPage(readPathname());
    window.addEventListener("popstate", onNav);

    // Listener para clicks en enlaces internos (SPA)
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      e.preventDefault(); // evita recarga de página
      history.pushState({}, "", href); // actualiza la URL
      setPage(readPathname()); // actualiza estado
      window.scrollTo(0, 0); // scroll al top
    };
    window.addEventListener("click", onClick);

    // Cleanup al desmontar
    return () => {
      window.removeEventListener("popstate", onNav);
      window.removeEventListener("click", onClick);
    };
  }, []); // Se ejecuta solo al montar

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-light)]">
      {/* Header común */}
      <Header />

      {/* Contenido principal */}
      <main className="mx-auto max-w-6xl p-6">
        {page === "/catalogo" && <CatalogoPage products={products} />}
        {page === "/home" && <HomePage />}
        {page === "/carrito" && <CarritoPage fmt={fmt} />}
      </main>

      {/* Footer común */}
      <Footer />
    </div>
  );
}
