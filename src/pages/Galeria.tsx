// src/pages/Habitaciones.tsx
import { Card, CardTitle, CardContent } from "../components/ui/Card.tsx";
import { useState } from "react";
import SortBar from "../components/ui/SortBar.tsx";

export default function HabitacionesPage() {
  // Estados para la ordenación
  const [sortBy, setSortBy] = useState<"price" | "name" | "tag">("price");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Habitaciones</h2>

      {/* Ordenación */}
      <SortBar
        sortBy={sortBy}
        sortDir={sortDir}
        onChange={({ sortBy, sortDir }) => {
          setSortBy(sortBy);
          setSortDir(sortDir);
        }}
      />

      {/* Información general */}
      <Card>
        <CardContent className="text-slate-300 space-y-2">
          <p>
            Nuestro hotel dispone de una amplia variedad de habitaciones diseñadas para
            garantizar tu descanso y comodidad. Todas las estancias cuentan con climatización,
            baño privado, conexión Wi-Fi gratuita y servicio de habitaciones.
          </p>
          <p>
            Puedes complementar tu estancia con servicios adicionales como spa, desayuno buffet
            o cena romántica, disponibles en el catálogo.
          </p>
        </CardContent>
      </Card>

      {/* Tipos de habitaciones */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Suite Deluxe */}
        <Card className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
            alt="Suite Deluxe Vista Mar"
            className="h-40 w-full object-cover"
          />
          <CardContent className="text-slate-300">
            <p>
              Amplia habitación con cama king size, terraza privada y vistas panorámicas al mar.
              Ideal para escapadas románticas y estancias de lujo.
            </p>
          </CardContent>
        </Card>

        {/* Habitación Doble */}
        <Card className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1200"
            alt="Habitación Doble"
            className="h-40 w-full object-cover"
          />
          <CardContent className="text-slate-300">
            <p>
              Perfecta para parejas o amigos, equipada con dos camas individuales o una doble.
              Espacio acogedor y funcional, con decoración moderna.
            </p>
          </CardContent>
        </Card>

        {/* Habitación Familiar */}
        <Card className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&q=80&w=1200"
            alt="Habitación Familiar"
            className="h-40 w-full object-cover"
          />
          <CardContent className="text-slate-300">
            <p>
              Espaciosa habitación para familias, con capacidad para cuatro personas. Dispone de
              zona de estar, sofá cama y servicios adaptados para niños.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
