import Link from "next/link";
import Image from "next/image";
import photoProfil from "../public/images/photo-profil.png";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ContactCta from "./components/ContactCta";

const previewProjects = [
  {
    num: "01",
    category: "GEN-AI OPS",
    title: "Landing page demande de devis (envoi devis automatique)",
    description:
      "Maison Buna qui est une entreprise qui vend du café avait besoin d'une landing page où les clients pouvaient effectuer des demandes de devis avec un envoi automatique des devis au format PDF par mail.",
    contexte: "Scale-up SaaS",
    resultat: "Outil livré",
    tags: ["CLAUDE CODE", "OPENAI", "PRO"],
    href: "/projets/maison-buna",
  },
  {
    num: "02",
    category: "PRODUCT OWNERSHIP",
    title: "StoryForge AI : Générateur d'user stories",
    description:
      "Outil qui permet de générer des user stories contextualisé avec la mise en place d'un RAG",
    contexte: "Fintech Tier 1",
    resultat: "Zero Downtime",
    tags: ["JIRA", "SQL", "PERSO"],
    href: "/projets/storyforge-ai",
  },
  {
    num: "03",
    category: "LLM INTEGRATION",
    title: "Assistant Support Client RAG",
    description:
      "Implémentation d'une base de connaissance vectorielle pour automatiser 60% des tickets de support niveau 1.",
    contexte: "E-commerce",
    resultat: "-30% OpEx",
    tags: ["PINECONE", "LANGCHAIN", "PYTHON"],
    href: "/projets/support-rag",
  },
];

const flowSteps = [
  {
    icon: "bolt",
    title: "Déclencheur",
    description: "Webhook, Email, Nouveau Record Airtable",
    variant: "default",
  },
  {
    icon: "psychology",
    title: "Logique IA",
    description: "LLM Processing, RAG, Extraction de Données",
    variant: "accent",
  },
  {
    icon: "output",
    title: "Résultat",
    description: "Notification Slack, Update CRM, Mail Client",
    variant: "default",
  },
];

const expertiseCards = [
  {
    title: "Discovery & Cadrage",
    description:
      "Analyse des besoins, ateliers, parcours utilisateurs, définition des KPIs.",
  },
  {
    title: "Coordination",
    description:
      "Interface entre métiers, direction et équipes techniques, gestion des parties prenantes.",
  },
  {
    title: "Maquettes & Spécifications",
    description:
      "Rédaction de user stories, critères d'acceptation, wireframes et accompagnement des développeurs.",
  },
  {
    title: "IA & Automatisation",
    description:
      "Prototypage rapide, intégration d'outils IA, workflows automatisés pour optimiser les processus produit.",
  },
];

const methodSteps = [
  {
    num: "01",
    title: "Comprendre",
    description:
      "Identifier le problème, les utilisateurs et la valeur recherchée.",
  },
  {
    num: "02",
    title: "Cadrer",
    description:
      "Transformer le besoin en parcours, fonctionnalités et critères de réussite.",
  },
  {
    num: "03",
    title: "Prototyper",
    description:
      "Tester rapidement une solution, notamment avec l'IA et les outils de prototypage.",
  },
  {
    num: "04",
    title: "Livrer et apprendre",
    description:
      "Collaborer avec les équipes techniques, tester, mesurer et itérer.",
  },
];

export default function Home() {
  return (
    <div>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="min-h-[78vh] flex flex-col justify-center bg-surface-mid relative">
          <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-20 py-12">
            <div className="max-w-[720px]">
              <div className="inline-block px-3 py-1 border border-accent mb-3">
                <span className="font-mono text-accent text-xs uppercase tracking-[0.08em]">
                  PRODUCT OWNER · AI PRODUCT · AUTOMATISATION
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl leading-[1.15] tracking-tight font-extrabold my-3 mb-6">
                Product Owner spécialisée dans les produits augmentés par
                l&apos;<span className="text-accent">IA</span>
              </h1>
              <p className="text-lg leading-relaxed text-muted mb-12 max-w-[640px]">
                Je conçois et fais évoluer des produits digitaux de la
                découverte à la livraison, en combinant Product Ownership, IA,
                automatisation et compréhension technique.
                <br />
                Je construis également des prototypes et outils IA pour
                transformer des problématiques métier en solutions concrètes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:edensahile28@gmail.com"
                  className="bg-accent text-white px-8 py-4 font-semibold text-base inline-flex items-center gap-2 hover:bg-accent-hover transition-colors"
                >
                  Me contacter
                  <span className="msym text-[18px]">send</span>
                </a>
                <a
                  href="#"
                  className="border border-ink text-ink px-8 py-4 font-semibold text-base inline-flex items-center gap-2 hover:bg-ink hover:text-paper transition-colors"
                >
                  Voir mon CV
                  <span className="msym text-[18px]">description</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projets */}
        <section id="projets" className="bg-surface-dark py-12 text-paper">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
              <div>
                <span className="font-mono text-accent-soft uppercase tracking-[0.08em] block mb-2 text-[13px]">
                  Portfolio
                </span>
                <h2 className="text-2xl font-semibold m-0">
                  Produits & réalisations
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {previewProjects.map((project) => (
                <Link
                  key={project.href}
                  href={project.href}
                  className="p-8 border border-white/10 bg-[#424754]/15 flex flex-col h-full hover:border-accent/60 transition-colors"
                >
                  <span className="font-mono text-accent-soft text-xs mb-4 block">
                    {project.num} / {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-accent-soft mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-6 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2 mb-4">
                      <span className="opacity-60">Contexte</span>
                      <span>{project.contexte}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="opacity-60">Résultat</span>
                      <span className="text-accent-soft">
                        {project.resultat}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 border border-white/10 font-mono text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-24 flex justify-center">
              <Link
                href="/projets"
                className="border border-white/20 text-paper px-10 py-4 font-mono uppercase tracking-[0.08em] text-[13px] hover:border-white/50 transition-colors"
              >
                Voir tous les projets
              </Link>
            </div>
          </div>
        </section>

        {/* Automatisation */}
        <section className="py-12 bg-surface-light">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="text-center mb-12">
              <span className="font-mono text-accent uppercase tracking-[0.08em] block mb-2 text-[13px]">
                Automatisations
              </span>
              <h2 className="text-2xl font-semibold m-0">
                Le Flux Intelligent
              </h2>
            </div>
            <div className="border border-line p-6 md:p-12 lg:p-16 bg-surface-card">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-6">
                {flowSteps.map((step, idx) => (
                  <div key={step.title} className="contents">
                    <div
                      className={
                        step.variant === "accent"
                          ? "text-center p-6 bg-accent text-white"
                          : "text-center p-6 border border-line"
                      }
                    >
                      <span
                        className={`msym text-4xl block mb-4 ${
                          step.variant === "accent"
                            ? "text-white"
                            : "text-accent"
                        }`}
                      >
                        {step.icon}
                      </span>
                      <h3
                        className={`font-mono font-bold text-xs uppercase mb-2 ${
                          step.variant === "accent"
                            ? "text-accent-soft"
                            : "text-ink"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-xs m-0 ${step.variant === "accent" ? "text-white/80" : "text-muted"}`}
                      >
                        {step.description}
                      </p>
                    </div>
                    {idx < flowSteps.length - 1 && (
                      <span className="msym hidden md:block text-muted justify-self-center">
                        arrow_forward
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="py-12 bg-surface-mid">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square bg-[#f0eded] overflow-hidden">
              <Image
                src={photoProfil}
                alt="Eden Sahilé"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="absolute bottom-8 left-8 bg-accent text-white p-6">
                <span className="text-4xl font-extrabold block">
                  IA x Produit
                </span>
                <span className="font-mono text-xs uppercase">
                  PROTOTYPAGE · AUTOMATISATION · DELIVERY
                </span>
              </div>
            </div>
            <div>
              <span className="font-mono text-accent uppercase tracking-[0.08em] block mb-2 text-[13px]">
                Expertise
              </span>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Du cadrage à la mise en production
              </h2>
              <div className="text-lg leading-relaxed text-muted mb-6 space-y-4">
                <p>
                  En tant que Product Owner, j&apos;ai piloté des produits
                  complexes dans le secteur du livre et de l&apos;édition :
                  plateformes ebook, abonnements, e-commerce, facturation, EDI
                  et intégrations métier.
                </p>
                <p>
                  Mon rôle ne s&apos;arrête pas à la rédaction de user stories :
                  je cadre les besoins, j&apos;aligne les parties prenantes, je
                  conçois les parcours utilisateurs et j&apos;accompagne la
                  livraison jusqu&apos;à la mise en production.
                </p>
                <p>
                  Aujourd&apos;hui, j&apos;enrichis cette approche avec
                  l&apos;IA et l&apos;automatisation pour accélérer
                  l&apos;exploration, le prototypage et les workflows produit.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertiseCards.map((card) => (
                  <div key={card.title} className="p-6 border border-line">
                    <h3 className="text-base font-semibold mb-2 text-accent">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted m-0">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section className="py-12 bg-surface-light">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="text-center mb-12">
              <span className="font-mono text-accent uppercase tracking-[0.08em] block mb-2 text-[13px]">
                Workflow
              </span>
              <h2 className="text-2xl font-semibold m-0">
                Une Méthodologie en 4 Étapes
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodSteps.map((step) => (
                <div key={step.num} className="relative">
                  <span className="text-6xl font-extrabold text-line/30 absolute -top-4 -left-2">
                    {step.num}
                  </span>
                  <div className="pt-8">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed m-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCta
          description="Vous recherchez une Product Owner capable de faire le lien entre métier, produit et technologies IA ?"
          buttonLabel="Me contacter"
        />
      </main>

      <SiteFooter />
    </div>
  );
}
