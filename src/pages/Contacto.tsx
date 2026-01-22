// src/pages/Contacto.tsx
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";

export default function Contacto() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Contacto</h1>

      <Card>
        <CardHeader>
          <CardTitle>Cómo contactarnos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-slate-300">
          <p>Email: reservas@hotel.example</p>
          <p>Teléfono: 900 000 000</p>
          <p>Horario: 9:00 — 20:00</p>
        </CardContent>
      </Card>
    </div>
  );
}
