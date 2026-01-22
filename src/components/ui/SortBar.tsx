// src/components/SortBar.tsx
import React from "react";

type SortBy = "price" | "name" | "tag";
type SortDir = "asc" | "desc";

type SortBarProps = {
  sortBy: SortBy;
  sortDir: SortDir;
  onChange: (value: { sortBy: SortBy; sortDir: SortDir }) => void;
};

export default function SortBar({ sortBy, sortDir, onChange }: SortBarProps) {
  return (
    <div className="flex items-center gap-4 text-sm">
      {/* Ordenar por */}
      <div className="flex items-center gap-2">
        <label className="whitespace-nowrap">Ordenar por:</label>
        <select
          value={sortBy}
          onChange={(e) =>
            onChange({
              sortBy: e.target.value as SortBy,
              sortDir,
            })
          }
          className="rounded-md bg-slate-800 px-2 py-1"
        >
          <option value="price">Precio</option>
          <option value="name">Nombre</option>
          <option value="tag">Categoría</option>

        </select>
      </div>

      {/* Dirección */}
      <div className="flex items-center gap-2">
        <label className="whitespace-nowrap">Dirección:</label>
        <select
          value={sortDir}
          onChange={(e) =>
            onChange({
              sortBy,
              sortDir: e.target.value as SortDir,
            })
          }
          className="rounded-md bg-slate-800 px-2 py-1"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
}
