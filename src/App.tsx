import { useEffect, useMemo, useState } from "react";

// componentes de layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// páginas
import CatalogoPage from "./pages/Catalogo";
import GaleriaPage from "./pages/Galeria";
import CarritoPage from "./pages/Carrito";

// contexto carrito + tipos
import { useCart, type Product } from "./context/CartContext";

// util moneda
const fmt = (n: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);

// Rutas disponibles
type Page = "/catalogo" | "/galeria" | "/info" | "/carrito";

// Leer la ruta actual
function readPathname(): Page {
  const p = location.pathname.toLowerCase();
  if (p === "/galeria" || p === "/info" || p === "/carrito") return p;
  return "/catalogo";
}

export default function App() {
  const [page, setPage] = useState<Page>(readPathname());

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

  // Todas las figuritas que se van a vender (Por ahora)
  const [products] = useState<Product[]>([
    {
      id: "miku",
      name: "Hatsune Miku",
      characterType: "Vocaloid",
      company: "Crypton Future Media",
      voiceProvider: "Saki Fujita",
      group: "Crypton 6",
      description:
        "La vocaloid más icónica del mundo. Símbolo de la música digital y la creatividad de internet.",
      shortBio: "Optimista, energética y siempre lista para cantar con su voz clara y brillante.",
      famousSongs: ["World is Mine", "Rolling Girl", "Tell Your World"],
      price: 89.99,
      image: "/hatsune.png",
      tag: "Classic",
    },
    {
      id: "rin",
      name: "Kagamine Rin",
      characterType: "Vocaloid",
      company: "Crypton Future Media",
      voiceProvider: "Asami Shimoda",
      group: "Crypton 6",
      description: "Vocaloid con voz potente y brillante, ideal para canciones rápidas y explosivas.",
      shortBio: "Divertida, vivaz y a veces traviesa, siempre junto a su hermano Len.",
      famousSongs: ["Meltdown", "Kokoro", "Electric Angel"],
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop",
      tag: "Energetic",
    },
    {
      id: "len",
      name: "Kagamine Len",
      characterType: "Vocaloid",
      company: "Crypton Future Media",
      voiceProvider: "Asami Shimoda",
      group: "Crypton 6",
      description: "Vocaloid masculino de carácter rebelde y emocional.",
      shortBio: "Sensible y protector con Rin, a veces juguetón y travieso.",
      famousSongs: ["Servant of Evil", "Kokoro", "Electric Angel"],
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1618331835717-8014df9b8fd2?q=80&w=1200&auto=format&fit=crop",
      tag: "Classic",
    },
    {
      id: "luka",
      name: "Megurine Luka",
      characterType: "Vocaloid",
      company: "Crypton Future Media",
      voiceProvider: "Yū Asakawa",
      group: "Crypton 6",
      description: "Vocaloid bilingüe con tono maduro y elegante, perfecta para baladas.",
      shortBio: "Madura y elegante, con un aura tranquila y seductora.",
      famousSongs: ["Just Be Friends", "Luka Luka Night Fever", "Double Lariat"],
      price: 84.99,
      image:
        "https://images.unsplash.com/photo-1601758123927-196c9e1d02b4?q=80&w=1200&auto=format&fit=crop",
      tag: "Elegant",
    },
    {
      id: "gumi",
      name: "GUMI",
      characterType: "Vocaloid",
      company: "Internet Co., Ltd.",
      voiceProvider: "Megumi Nakajima",
      group: "Vocaloid General",
      description:
        "Vocaloid extremadamente versátil y expresiva, muy usada en pop y rock.",
      shortBio: "Amigable y adaptable, puede interpretar casi cualquier estilo musical.",
      famousSongs: ["Mozaik Role", "Matryoshka", "Butterfly on Your Right Shoulder"],
      price: 74.99,
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop",
      tag: "Pop",
    },
    {
      id: "teto",
      name: "Kasane Teto",
      characterType: "UTAU",
      company: "Fanmade",
      voiceProvider: "Utane Teto",
      group: "UTAU Classic",
      description:
        "Utau legendaria que nació como meme y se convirtió en icono.",
      shortBio:
        "Extrovertida y carismática, famosa por su voz peculiar y divertida.",
      famousSongs: ["Teto Roll", "Otsukimi Recital", "Love is War (cover)"],
      price: 69.99,
      image: "/teto.png",
      tag: "Legend",
    },
    {
      id: "defoko",
      name: "Defoko",
      characterType: "UTAU",
      company: "UTAU",
      voiceProvider: "Default",
      group: "UTAU Classic",
      description: "La voz por defecto de UTAU. Minimalista, nostálgica y clásica.",
      shortBio: "Simple, retro y muy querida por la comunidad UTAU.",
      famousSongs: ["Default Song 1", "Default Song 2"],
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop",
      tag: "Classic",
    },
  ]);

  // Carrito
  const { total } = useCart();
  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-light)]">
      <Header />

      <main className="mx-auto max-w-6xl p-6">
        {page === "/catalogo" && (
          <CatalogoPage
            products={products} // <-- TODOS los productos
            cartTotal={fmt(total)}
          />
        )}

        {page === "/galeria" && <GaleriaPage />}
        {page === "/carrito" && <CarritoPage fmt={fmt} />}
      </main>

      <Footer />
    </div>
  );
}
