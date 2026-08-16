export default function SiteFooter() {
  return (
    <footer className="bg-surface-dark py-12 text-paper border-t border-[#3f465c]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 flex flex-wrap justify-between items-center gap-6">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-paper">Eden Sahilé</span>
          <span className="font-mono text-[11px] text-accent-soft/85 uppercase">© 2026, EDEN SAHILE</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="font-mono text-xs text-paper eslink">LINKEDIN</a>
          <a href="#" className="font-mono text-xs text-paper eslink">GITHUB</a>
          <a href="#" className="font-mono text-xs text-paper eslink">TWITTER</a>
          <a href="#" className="font-mono text-xs text-paper eslink">MENTIONS LÉGALES</a>
        </div>
      </div>
    </footer>
  );
}
