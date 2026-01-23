export default function Footer() {
  return (
    <footer
      className="
        sticky bottom-0 z-20
        border-t border-white/10
        bg-cover bg-center
      "
      style={{ backgroundImage: 'url(/footer.png)' }}
    >
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-400 text-center">
      </div>
    </footer>
  );
}
