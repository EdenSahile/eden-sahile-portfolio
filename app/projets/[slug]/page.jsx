import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import ContactCta from '../../components/ContactCta';
import ProjectCarousel from '../../components/ProjectCarousel';
import { projects, getProjectBySlug } from '../projectsData';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Eden Sahilé`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div>
      <SiteHeader />

      <main>
        {/* Retour */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 pt-8">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 font-mono text-[13px] tracking-wide text-muted eslink"
          >
            <span className="msym text-[18px]">arrow_back</span>
            RETOUR AUX PROJETS
          </Link>
        </div>

        {/* Hero projet */}
        <section className="bg-surface-mid pt-10 pb-12">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
            <span className="font-mono text-accent text-[13px] uppercase tracking-[0.08em] block mb-4">
              {project.num} / {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl leading-[1.15] tracking-tight font-extrabold max-w-[800px] mb-4">
              {project.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted mb-8 max-w-[720px]">{project.description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-ink/5 border border-line font-mono text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.demoHref && (
                <a
                  href={project.demoHref}
                  className="bg-accent text-white px-6 py-2.5 font-semibold text-sm inline-flex items-center gap-2 hover:bg-accent-hover transition-colors"
                >
                  Voir la démo
                  <span className="msym text-base">open_in_new</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Image + Meta */}
        <section className="py-12 bg-paper">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">
            <ProjectCarousel images={project.images} />

            <div className="border border-line p-8 flex flex-col gap-5">
              <div className="flex justify-between border-b border-line pb-4">
                <span className="font-mono text-xs text-muted uppercase">Contexte</span>
                <span className="font-semibold text-right">{project.meta.contexte}</span>
              </div>
              <div className="flex justify-between border-b border-line pb-4">
                <span className="font-mono text-xs text-muted uppercase">Usage</span>
                <span className="font-semibold text-right">{project.meta.usage}</span>
              </div>
              <div className="flex justify-between border-b border-line pb-4">
                <span className="font-mono text-xs text-muted uppercase">Rôle</span>
                <span className="font-semibold text-right">{project.meta.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-xs text-muted uppercase">Résultat</span>
                <span className="font-semibold text-accent text-right">{project.meta.resultat}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contexte / Objectif / Solution */}
        <section className="py-12 bg-surface-light">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface-card border border-line p-8">
              <span className="msym text-accent text-[32px] block mb-4">flag</span>
              <h2 className="text-lg font-semibold mb-3">Contexte</h2>
              <p className="text-sm text-muted leading-relaxed m-0">{project.contexte}</p>
            </div>
            <div className="bg-surface-card border border-line p-8">
              <span className="msym text-accent text-[32px] block mb-4">target</span>
              <h2 className="text-lg font-semibold mb-3">Objectif</h2>
              <p className="text-sm text-muted leading-relaxed m-0">{project.objectif}</p>
            </div>
            <div className="bg-surface-card border border-line p-8">
              <span className="msym text-accent text-[32px] block mb-4">build</span>
              <h2 className="text-lg font-semibold mb-3">Solution</h2>
              <p className="text-sm text-muted leading-relaxed m-0">{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Résultat concret */}
        {project.resultatConcret && (
          <section className="py-12 bg-paper">
            <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
              <div className="border border-line p-6 md:p-12 bg-surface-card">
                <span className="font-mono text-accent uppercase tracking-[0.08em] block mb-4 text-[13px]">
                  Résultat concret
                </span>
                <p className="text-base leading-relaxed text-muted m-0 max-w-[800px]">{project.resultatConcret}</p>
              </div>
            </div>
          </section>
        )}

        <ContactCta />
      </main>

      <SiteFooter />
    </div>
  );
}
