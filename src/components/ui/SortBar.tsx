// src/components/ui/SortBar.tsx

import type { Product } from "../../context/CartContext";

type SortBy = "price" | "name";
type SortDir = "asc" | "desc";

export type Filters = {
  sortBy: SortBy;
  sortDir: SortDir;
  tag?: string;
};

type SortBarProps = {
  value: Filters;
  onChange: (value: Filters) => void;
  products?: Product[];
};

export default function SortBar({ value, onChange }: SortBarProps) {
  return (
    <div
      className="
        flex flex-wrap
        items-center justify-center
        gap-4
        rounded-xl
        border-4 border-black
        bg-gradient-to-br
        from-pink-600 via-pink-500 to-fuchsia-500
        px-6 py-4
        shadow-[0_0_20px_rgba(255,20,147,0.6)]
        text-sm
      "
    >
      {/* Ordenar por */}
      <select
        value={value.sortBy}
        onChange={(e) =>
          onChange({ ...value, sortBy: e.target.value as SortBy })
        }
        className="
          rounded-md
          border-2 border-black
          bg-pink-300
          px-3 py-1.5
          font-extrabold
          text-pink-900
          drop-shadow
          focus:outline-none focus:ring-2 focus:ring-fuchsia-400
        "
      >
        <option value="price">Precio</option>
        <option value="name">Nombre</option>
      </select>

      {/* Dirección */}
      <select
        value={value.sortDir}
        onChange={(e) =>
          onChange({ ...value, sortDir: e.target.value as SortDir })
        }
        className="
          rounded-md
          border-2 border-black
          bg-pink-300
          px-3 py-1.5
          font-extrabold
          text-pink-900
          drop-shadow
          focus:outline-none focus:ring-2 focus:ring-fuchsia-400
        "
      >
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>

      {/* Estilo */}
      <select
        value={value.tag || ""}
        onChange={(e) =>
          onChange({ ...value, tag: e.target.value || undefined })
        }
        className="
          rounded-md
          border-2 border-black
          bg-pink-300
          px-3 py-1.5
          font-extrabold
          text-pink-900
          drop-shadow
          focus:outline-none focus:ring-2 focus:ring-fuchsia-400
        "
      >
        <option value="">Todos los estilos</option>
        <option value="Scene">Scene</option>
        <option value="Gyaru">Gyaru</option>
        <option value="Emo">Emo</option>
        <option value="Kawaii">Kawaii</option>
        <option value="Cyber">Cyber</option>
      </select>
    </div>
  );
}
