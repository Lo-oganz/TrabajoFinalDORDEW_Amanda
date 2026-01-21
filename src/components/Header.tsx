import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { count } = useCart();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `hover:underline ${isActive ? "text-white" : "text-slate-300"}`;

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link to="/catalogo" className="font-bold">Hotel G201</Link>
        <nav className="flex gap-6 text-sm">
          <NavLink to="/catalogo" className={linkClass}>Catálogo</NavLink>
          <NavLink to="/habitaciones" className={linkClass}>Habitaciones</NavLink>
          <NavLink to="/spa" className={linkClass}>Spa</NavLink>
          <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
        </nav>
        <Link
          to="/carrito"
          className="text-sm rounded-lg px-3 py-1 bg-emerald-600 hover:bg-emerald-700"
        >
          Carrito ({count})
        </Link>
      </div>
    </header>
  );
}
