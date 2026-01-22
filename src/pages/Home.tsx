import {
  StyleCard,
  StyleCardImage,
  StyleCardTitle,
  StyleCardContent,
} from "../components/ui/StyleCard.tsx";
import { styles } from "../data/styles.tsx";

export default function HomePage() {
  return (
    <section className="space-y-6">
      {/* Información general */}
      <div className="rounded-xl border-2 border-pink-400/30 bg-black/60 px-6 py-4 text-pink-100 leading-relaxed">
        <p>
          Estos 8 estilos son una introducción breve para el maravilloso mundo
          de la moda alternativa! Cada estilo tiene su propia personalidad y
          estética, desde lo colorido y exagerado hasta lo oscuro y rebelde.
        </p>
      </div>

      {/* Grid de estilos */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {styles.map((s) => (
          <StyleCard key={s.id}>
            <StyleCardImage src={s.image} alt={s.name} />
            <StyleCardTitle>{s.name}</StyleCardTitle>
            <StyleCardContent>{s.description}</StyleCardContent>
            <StyleCardContent>{s.shortBio}</StyleCardContent>
          </StyleCard>
        ))}
      </div>
    </section>
  );
}
