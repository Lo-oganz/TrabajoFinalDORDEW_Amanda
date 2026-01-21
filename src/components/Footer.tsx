// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-400">
        © {new Date().getFullYear()} Hotel — Todos los derechos reservados.
      </div>
    </footer>
  );
}
