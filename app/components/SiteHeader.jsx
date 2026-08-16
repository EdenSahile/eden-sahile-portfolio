import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 py-3 md:h-20 md:py-0 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 bg-surface-light">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-ink tracking-tight">Eden Sahilé</span>
          <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-accent">Product Owner IA</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-6">
          <Link href="/projets" className="font-mono text-[13px] tracking-wide text-muted eslink">
            PROJETS
          </Link>
          <Link href="/#expertise" className="font-mono text-[13px] tracking-wide text-muted eslink">
            EXPERTISE
          </Link>
          <a href="#" className="font-mono text-[13px] tracking-wide text-muted eslink">
            CV
          </a>
          <Link
            href="/#contact"
            className="bg-accent text-white px-6 py-2 text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
