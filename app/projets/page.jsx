'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactCta from '../components/ContactCta';

const projects = [
  {
    id: 'maison-buna',
    category: 'genai-ops',
    categoryLabel: 'Gen-AI Ops',
    num: '01',
    title: 'Landing page demande de devis (envoi devis automatique)',
    summary:
      "Maison Buna, une entreprise qui vend du café, avait besoin d'une landing page où les clients pouvaient effectuer des demandes de devis avec un envoi automatique des devis au format PDF par mail.",
    contexte: 'Scale-up SaaS',
    resultat: 'Outil livré',
    tags: ['CLAUDE CODE', 'OPENAI', 'PRO'],
    href: '/projets/maison-buna',
  },
  {
    id: 'storyforge-ai',
    category: 'product-ownership',
    categoryLabel: 'Product Ownership',
    num: '02',
    title: "StoryForge AI : générateur de user stories contextualisé par IA",
    summary:
      "Outil qui transforme un brief métier en user stories structurées, enrichies par un pipeline RAG sur la documentation d'un client.",
    contexte: 'Projet personnel',
    resultat: 'En production',
    tags: ['REACT', 'CLAUDE API', 'PINECONE'],
    href: '/projets/storyforge-ai',
  },
  {
    id: 'support-rag',
    category: 'llm-integration',
    categoryLabel: 'LLM Integration',
    num: '03',
    title: 'Assistant Support Client RAG',
    summary:
      "Implémentation d'une base de connaissance vectorielle pour automatiser 60% des tickets de support niveau 1.",
    contexte: 'E-commerce',
    resultat: '-30% OpEx',
    tags: ['PINECONE', 'LANGCHAIN', 'PYTHON'],
    href: '/projets/support-rag',
  },
  {
    id: 'automatisation-make',
    category: 'automatisation',
    categoryLabel: 'Automatisation',
    num: '04',
    title: 'Automatisation du suivi de recette (Make)',
    summary:
      "Workflow Make qui surveille un Google Sheet de recette, crée automatiquement une carte Trello pour chaque bug KO et renvoie le lien de traçabilité dans le fichier source.",
    contexte: 'Mission chez Amalivre',
    resultat: 'Déployé',
    tags: ['GOOGLE SHEETS', 'MAKE', 'TRELLO'],
    href: '/projets/automatisation-make',
  },
];

const categories = [...new Set(projects.map((p) => p.category))].map((catKey) => {
  const sample = projects.find((p) => p.category === catKey);
  return {
    key: catKey,
    label: sample.categoryLabel,
    count: projects.filter((p) => p.category === catKey).length,
  };
});

export default function ProjetsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((s) => ({ ...s, [id]: !s[id] }));
  };

  const filtered = activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory);

  const catButtonClass = (active) =>
    `flex items-center justify-between gap-2 px-3 py-2.5 text-left w-full text-sm transition-colors cursor-pointer ${
      active ? 'bg-accent text-white' : 'bg-transparent text-paper hover:bg-white/8'
    }`;

  return (
    <div>
      <SiteHeader />

      <main>
        {/* Titre page */}
        <section className="bg-surface-mid py-12">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
            <span className="font-mono text-accent uppercase tracking-[0.08em] block mb-4 text-[13px]">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl leading-[1.15] tracking-tight font-extrabold mb-4">
              Tous les projets
            </h1>
            <p className="text-lg leading-relaxed text-muted max-w-[640px] m-0">
              Études de cas techniques : cadrage produit, automatisations et outils IA construits sur mesure.
            </p>
          </div>
        </section>

        {/* Filtres + Liste */}
        <section className="bg-surface-dark py-12 text-paper">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 flex flex-wrap gap-10 items-start">
            {/* Sidebar filtres */}
            <aside className="w-full lg:w-[220px] flex-shrink-0 lg:sticky lg:top-[100px]">
              <span className="font-mono text-accent-soft uppercase tracking-[0.08em] block mb-4 text-xs">
                Filtrer par catégorie
              </span>
              <div className="flex flex-row flex-wrap lg:flex-col gap-1">
                <button onClick={() => setActiveCategory('all')} className={catButtonClass(activeCategory === 'all')}>
                  <span>Tous les projets</span>
                  <span className="font-mono text-xs opacity-60">{projects.length}</span>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={catButtonClass(activeCategory === cat.key)}
                  >
                    <span>{cat.label}</span>
                    <span className="font-mono text-xs opacity-60">{cat.count}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Liste */}
            <div className="flex-1 min-w-[280px] flex flex-col border-t border-white/10">
              {filtered.map((proj) => {
                const isExpanded = !!expanded[proj.id];
                return (
                  <div key={proj.id} className="border-b border-white/10 py-6 px-4 hover:bg-white/5 transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div className="flex-1 min-w-[240px]">
                        <span className="font-mono text-accent-soft text-[11px] uppercase tracking-wide block mb-2">
                          {proj.num} / {proj.categoryLabel}
                        </span>
                        <h2 className="text-[19px] font-semibold mb-2">{proj.title}</h2>
                        <p className="text-accent-soft m-0 leading-relaxed text-sm max-w-[620px]">{proj.summary}</p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <button
                          onClick={() => toggleExpand(proj.id)}
                          aria-label="Voir les détails"
                          className="bg-transparent border border-white/20 text-paper w-11 h-11 flex items-center justify-center hover:border-white/50 transition-colors cursor-pointer"
                        >
                          <span className="msym text-xl">{isExpanded ? 'expand_less' : 'expand_more'}</span>
                        </button>
                        <Link
                          href={proj.href}
                          className="bg-accent text-white px-5 py-2.5 font-semibold text-[13px] whitespace-nowrap hover:bg-accent-hover transition-colors"
                        >
                          Voir le projet
                        </Link>
                      </div>
                    </div>
                    {isExpanded && (
                      <div className="mt-5 pt-5 border-t border-white/8 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
                        <div>
                          <span className="opacity-60 text-xs block mb-1">Contexte</span>
                          <span className="text-sm">{proj.contexte}</span>
                        </div>
                        <div>
                          <span className="opacity-60 text-xs block mb-1">Résultat</span>
                          <span className="text-sm text-accent-soft">{proj.resultat}</span>
                        </div>
                        <div className="sm:col-span-full flex flex-wrap gap-2 mt-1">
                          {proj.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 font-mono text-[10px]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              {filtered.length === 0 && (
                <div className="py-12 px-4 text-center text-accent-soft text-sm">
                  Aucun projet dans cette catégorie pour le moment.
                </div>
              )}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>

      <SiteFooter />
    </div>
  );
}
