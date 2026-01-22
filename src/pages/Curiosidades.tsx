// src/pages/Spa.tsx
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";

export default function SpaPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Spa</h2>

      {/* Información general */}
      <Card>
        <CardHeader>
          <CardTitle>Bienestar y relajación</CardTitle>
        </CardHeader>
        <CardContent className="text-slate-300 space-y-2">
          <p>
            Sumérgete en una experiencia de bienestar única. Nuestro spa combina tratamientos 
            terapéuticos, aromas naturales y tecnología de relajación para revitalizar cuerpo y mente.
          </p>
          <p>
            Todos los servicios pueden añadirse como extras desde el catálogo o reservarse directamente 
            durante tu estancia.
          </p>
        </CardContent>
      </Card>

      {/* Servicios destacados */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Circuito de aguas */}
        <Card className="overflow-hidden">
          <img
        src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"









            alt="Circuito de aguas"
            className="h-40 w-full object-cover"
          />
          <CardHeader>
            <CardTitle>Circuito de Aguas</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p>
              Disfruta de un recorrido relajante por jacuzzi, sauna finlandesa, baño turco y piscina 
              de hidromasaje con vistas al jardín zen.
            </p>
          </CardContent>
        </Card>

        {/* Masaje relajante */}
        <Card className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80&w=1200"
            alt="Masaje relajante"
            className="h-40 w-full object-cover"
          />
          <CardHeader>
            <CardTitle>Masaje Relajante</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p>
              Tratamiento corporal de 60 minutos con aceites esenciales y técnicas de aromaterapia 
              para eliminar el estrés y mejorar la circulación.
            </p>
          </CardContent>
        </Card>

        {/* Spa Premium */}
        <Card className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200"
            alt="Spa Premium"
            className="h-40 w-full object-cover"
          />
          <CardHeader>
            <CardTitle>Spa Premium 90 min</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p>
              Experiencia completa con exfoliación, masaje corporal y acceso privado al jacuzzi. 
              Perfecto para parejas o momentos especiales.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
