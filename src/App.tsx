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

// páginas nuevas (placeholder)
function GaleriaPage() {
  return <div className="text-center text-lg text-slate-200" >Página Galería (a implementar)</div>;
}
function InfoPage() {
  return <div className="text-center text-lg text-slate-200">Página Curiosidades (a implementar)</div>;
}

// contexto carrito + tipos
import { useCart, type Product } from "./context/CartContext";

// util moneda
const fmt = (n: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);

// Actualizamos Page para incluir nuevas rutas
type Page =
  | "/catalogo"
  | "/galeria"
  | "/info"
  | "/habitaciones"
  | "/spa"
  | "/contacto"
  | "/carrito";

function readPathname(): Page {
  const p = location.pathname.toLowerCase();
  if (
    p === "/galeria" ||
    p === "/info" ||
    p === "/habitaciones" ||
    p === "/spa" ||
    p === "/contacto" ||
    p === "/carrito"
  ) return p;
  return "/catalogo";
}

export default function App() {
  const [page, setPage] = useState<Page>(readPathname());

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
    description: "La vocaloid más icónica del mundo. Símbolo de la música digital y la creatividad de internet.",
    shortBio: "Optimista, energética y siempre lista para cantar con su voz clara y brillante.",
    famousSongs: ["World is Mine", "Rolling Girl", "Tell Your World"],
    price: 89.99,
    image: "https://images.unsplash.com/photo-1611605698335-6b2f9c8b3f6b?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1618331835717-8014df9b8fd2?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1601758123927-196c9e1d02b4?q=80&w=1200&auto=format&fit=crop",
    tag: "Elegant",
  },
  {
    id: "gumi",
    name: "GUMI",
    characterType: "Vocaloid",
    company: "Internet Co., Ltd.",
    voiceProvider: "Megumi Nakajima",
    group: "Vocaloid General",
    description: "Vocaloid extremadamente versátil y expresiva, muy usada en pop y rock.",
    shortBio: "Amigable y adaptable, puede interpretar casi cualquier estilo musical.",
    famousSongs: ["Mozaik Role", "Matryoshka", "Butterfly on Your Right Shoulder"],
    price: 74.99,
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop",
    tag: "Pop",
  },
  {
    id: "teto",
    name: "Kasane Teto",
    characterType: "UTAU",
    company: "Fanmade",
    voiceProvider: "Utane Teto",
    group: "UTAU Classic",
    description: "Utau legendaria que nació como meme y se convirtió en icono.",
    shortBio: "Extrovertida y carismática, famosa por su voz peculiar y divertida.",
    famousSongs: ["Teto Roll", "Otsukimi Recital", "Love is War (cover)"],
    price: 69.99,
    image: "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop",
    tag: "Classic",
  },
  {
    id: "ritsu",
    name: "Namine Ritsu",
    characterType: "UTAU",
    company: "Fanmade",
    voiceProvider: "Ritsu",
    group: "UTAU General",
    description: "Utau de voz potente y grave, perfecta para temas intensos.",
    shortBio: "Oscura y misteriosa, con mucha presencia en canciones intensas.",
    famousSongs: ["Ritsu Dark Song 1", "Ritsu Dark Song 2"],
    price: 59.99,
    image: "https://images.unsplash.com/photo-1603993097397-89e2b5c3bcd5?q=80&w=1200&auto=format&fit=crop",
    tag: "Dark",
  },
  {
    id: "momo",
    name: "Momone Momo",
    characterType: "UTAU",
    company: "Fanmade",
    voiceProvider: "Momo",
    group: "UTAU General",
    description: "Utau suave y dulce, ideal para canciones tranquilas.",
    shortBio: "Dulce, alegre y relajante, perfecta para melodías calmadas.",
    famousSongs: ["Momo Soft Song 1", "Momo Soft Song 2"],
    price: 54.99,
    image: "https://images.unsplash.com/photo-1610878180933-123728745d22?q=80&w=1200&auto=format&fit=crop",
    tag: "Soft",
  },
  {
    id: "renri",
    name: "Yamine Renri",
    characterType: "UTAU",
    company: "Fanmade",
    voiceProvider: "Renri",
    group: "UTAU Modern",
    description: "Utau moderna con tono natural y emocional.",
    shortBio: "Versátil y emocional, perfecta para covers y canciones originales.",
    famousSongs: ["Renri Indie Song 1", "Renri Indie Song 2"],
    price: 64.99,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
    tag: "Indie",
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

  // Carrito
  const { total } = useCart();

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-light)]">
      <Header />

      <main className="mx-auto max-w-6xl p-6">
        {page === "/catalogo" && (
          <CatalogoPage
            products={sortedProducts}
            sortBy={sortBy}
            sortDir={sortDir}
            setSortBy={setSortBy}
            setSortDir={setSortDir}
            cartTotal={fmt(total)}
          />
        )}
        {page === "/galeria" && <GaleriaPage />}
        {page === "/info" && <InfoPage />}
        {page === "/habitaciones" && <HabitacionesPage />}
        {page === "/spa" && <SpaPage />}
        {page === "/contacto" && <ContactoPage />}
        {page === "/carrito" && <CarritoPage fmt={fmt} />}
      </main>

      <Footer />
    </div>
  );
}