import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { count } = useCart();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `hover:underline ${isActive ? "text-white" : "text-slate-300"}`;

  return (
    <header
      className="sticky top-0 z-20"
      style={{
        backgroundImage: 'url(/topbar.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-6xl h-20 flex items-center justify-between">
        {/* Logo más a la izquierda */}
        <Link to="/catalogo" className="-ml-6 h-18"> 
          <img src="/logo.png" alt="Vocaloid Store" className="h-full object-contain" />
        </Link>

        <nav className="flex gap-6 text-sm">
          <NavLink to="/catalogo" className={linkClass}>Principal</NavLink>
          <NavLink to="/galeria" className={linkClass}>Galería</NavLink>
          <NavLink to="/info" className={linkClass}>Curiosidades</NavLink>
        </nav>

        <Link
          to="/carrito"
          className="px-4 py-1 scene-border scene-glow hover:bg-[var(--pink-main)] hover:text-black"
        >
          Carrito ({count})
        </Link>
      </div>

    </header>
  );
}
