'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      name: 'FlowDiff-Pro',
      description: 'Plateforme de commande pour libraires avec authentification et base de données Supabase.',
      tags: ['React', 'Node.js', 'Supabase', 'PostgreSQL'],
      link: 'https://book-flow-omega.vercel.app/login',
      detailLink: '/projects/flowdiff-pro',
    },
  ];

  const experience = [
    {
      role: 'Product Owner',
      company: 'Amalivre',
      duration: 'Mai 2023 - Présent',
      description:
        'Pilotage de 4 produits (e-commerce, ebooks, facturation, abonnements) | 6 développeurs | 4 équipes. Mise en place de Scrum, modernisation du site (monolithe → micro-services React/Next.js), migration progressive des modules.',
      highlights: [
        'Facturation optimisée (2j → 1h)',
        'Implémentation Scrum réussie',
        'Refonte site ebooks avec changement prestataire',
      ],
    },
    {
      role: 'Chargée de diffusion numérique / Cheffe de projet web',
      company: 'Amalivre',
      duration: 'Sept 2022 - Mai 2023',
      description:
        'Gestion des ebooks, catalogue numérique, refonte site web, pilotage de projets agiles avec les développeurs.',
      highlights: [
        'Pilotage refonte site ebooks',
        'Supervision évolutions e-commerce',
        'Gestion catalogue numérique intégration FTP',
      ],
    },
  ];

  const skills = {
    'Product & Agilité': ['Scrum', 'Kanban', 'Backlog', 'Priorisation', 'User stories', 'Recette', 'Roadmap'],
    'Tech & Dev': ['React', 'Node.js', 'ViteJS', 'API REST', 'PostgreSQL', 'Git', 'Github', 'Automatisation (Make, n8n)'],
    'UX & Design': ['Figma', 'Adobe XD', 'Wireframes', 'Prototypes', 'User testing'],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            eden.dev
          </div>

          <nav className="hidden md:flex gap-8">
            {['À propos', 'Projets', 'Expérience', 'Compétences'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace('à ', '')}`}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-900 px-6 py-4 space-y-3">
            {['À propos', 'Projets', 'Expérience', 'Compétences'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace('à ', '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-slate-300 hover:text-blue-400"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Eden Sahilé
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-6">
              Product Owner technique | UX Design | Full-Stack JS
            </p>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Je comprends le code (React, Node.js), je conçois les interfaces (Figma) et je traduis les besoins métier en user stories.
              <br />
              Cette vision globale me permet de fluidifier la collaboration dev/métier et d'accélérer la delivery.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="#projets"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Voir mes projets
            </a>
            <a
              href="https://linkedin.com/in/edensahile-99b088112"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-slate-400 hover:text-slate-200 transition-all flex items-center gap-2"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-12">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <p className="text-xs text-slate-400 uppercase tracking-wide">Impact</p>
              <p className="text-2xl font-bold text-white mt-2">2j → 1h</p>
              <p className="text-xs text-slate-400 mt-1">Facturation optimisée</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <p className="text-xs text-slate-400 uppercase tracking-wide">Produits</p>
              <p className="text-2xl font-bold text-white mt-2">4</p>
              <p className="text-xs text-slate-400 mt-1">En pilotage simultané</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 col-span-2 md:col-span-1">
              <p className="text-xs text-slate-400 uppercase tracking-wide">Expérience</p>
              <p className="text-2xl font-bold text-white mt-2">3+</p>
              <p className="text-xs text-slate-400 mt-1">Ans en Product</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12">Projets</h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                </div>
                <Link
                  href={project.detailLink}
                  className="p-3 bg-slate-700/50 rounded-full hover:bg-slate-600 transition-all flex-shrink-0"
                >
                  <ArrowUpRight size={20} className="text-blue-400" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700 text-slate-200 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={project.detailLink}
                className="inline-block text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Voir les détails du projet →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Expérience */}
      <section id="expérience" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12">Expérience</h2>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <p className="text-sm text-slate-400 mt-2 md:mt-0">{exp.duration}</p>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-slate-400 text-sm">
                    <span className="text-cyan-400 flex-shrink-0">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Compétences */}
      <section id="compétences" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12">Compétences</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">{category}</h3>
              <div className="space-y-2">
                {items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-slate-700 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Intéressé par une collaboration ?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Je suis actuellement à la recherche de nouveaux défis en Product Management, IA ou développement full-stack.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:edensahile2.0@gmail.com"
              className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
            >
              <Mail size={18} /> Envoyer un email
            </a>
            <a
              href="https://github.com/macbookeden"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-slate-400 transition-all flex items-center justify-center gap-2"
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800 text-center text-slate-400 text-sm">
        <p>© 2026 Eden Sahilé. Buildé avec curiosité et passion pour la technologie.</p>
      </footer>
    </div>
  );
}
