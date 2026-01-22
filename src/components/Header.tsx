import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { count } = useCart();
  const location = useLocation();

  // Botón de navegación
  const NavButton = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => {
    const isActive = location.pathname === to;

    return (
      <Link to={to}>
        <button
          className={`
            relative
            px-6 py-2
            font-bold
            text-black
            rounded-xl
            border-4 border-black
            shadow-lg
            transition-transform duration-200
            transform hover:scale-105 active:scale-95
            ${isActive ? "ring-2 ring-offset-2 ring-pink-400" : ""}
          `}
          style={{
            backgroundImage: "url(/buttonheader.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="relative z-10">{children}</span>
        </button>
      </Link>
    );
  };

  return (
    <header
      className="sticky top-0 z-20"
      style={{
        backgroundImage: 'url(/topbar.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-6xl h-20 flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/home" className="-ml-6">
          <div
            className="
              h-16 w-16
              rounded-full
              border-10 border-pink-400
              shadow-[0_0_20px_rgba(255,20,147,0.9)]
              overflow-hidden
              bg-black
              transition-transform duration-200
              hover:scale-110
            "
          >
            <img
              src="/logo.png"
              alt="Store Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>


        {/* Navegación */}
        <nav className="flex gap-4">
          <NavButton to="/home">Home</NavButton>
          <NavButton to="/catalogo">Catalog</NavButton>
        </nav>

        {/* Carrito solo con icono */}
        <Link to="/carrito">
          <button
            className="
              relative
              p-3
              rounded-full
              bg-black
              shadow-[0_0_15px_rgba(255,0,128,0.8)]
              hover:shadow-[0_0_25px_rgba(255,0,128,1)]
              transition-all duration-200
              transform hover:scale-110 active:scale-95
            "
          >
            <FaShoppingCart className="text-xl" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-black text-xs w-5 h-5 rounded-full grid place-items-center font-bold">
                {count}
              </span>
            )}
          </button>
        </Link>
      </div>
    </header>
  );
}
