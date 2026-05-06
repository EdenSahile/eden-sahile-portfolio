'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code2, Zap, Users, Database, Shield } from 'lucide-react';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const projectData = {
  title: 'FlowDiff-Pro',
  tagline: 'Plateforme de commande pour libraires',
  description:
    'Une application web complète permettant aux libraires de gérer leurs commandes de livres de manière fluide et efficace. Intégration avec une base de données Supabase pour la persistance des données.',
  status: 'Production',
  duration: '2 semaines',
  tools: ['Claude Code', 'React', 'Node.js'],
  liveUrl: 'https://book-flow-omega.vercel.app/login',
  githubUrl: '#',

  highlights: [
    { icon: Zap, title: 'Développement rapide', description: 'Buildé en 2 semaines avec Claude Code' },
    { icon: Database, title: 'Base de données réelle', description: 'Supabase PostgreSQL pour données persistantes' },
    { icon: Shield, title: 'Authentification sécurisée', description: 'Gestion des utilisateurs et sessions' },
    { icon: Users, title: 'Design responsive', description: 'Utilisable sur tous les appareils' },
  ],

  techStack: [
    { category: 'Frontend', techs: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'] },
    { category: 'Backend', techs: ['Node.js', 'Express', 'API REST'] },
    { category: 'Database', techs: ['Supabase', 'PostgreSQL'] },
    { category: 'Auth', techs: ['JWT', 'Supabase Auth'] },
  ],

  features: [
    'Authentification utilisateur sécurisée',
    'Dashboard personnalisé',
    'Gestion des commandes en temps réel',
    'Historique des transactions',
    'Notifications système',
    'Export données (CSV)',
    'Responsive design mobile-first',
    'Dark mode intégré',
  ],

  challenges: [
    {
      title: 'Complexité base de données',
      solution:
        'Modélisation relationnelle avec Supabase, schéma normalisé pour éviter les redondances',
    },
    {
      title: 'Authentification & sécurité',
      solution: 'JWT tokens avec Supabase Auth, encryption des données sensibles',
    },
    {
      title: 'UX/Performance',
      solution: 'Optimisation des requêtes, pagination, caching côté client',
    },
  ],

  learnings: [
    'Maîtrise complète de React & hooks avancés',
    'Intégration backend (API REST)',
    "Gestion d'authentification en production",
    'Déploiement sur Vercel avec CI/CD',
    "Orchestration d'outils avec Claude Code",
  ],

  metrics: [
    { label: 'Temps de développement', value: '2 semaines', subtext: 'Avec Claude Code' },
    { label: 'Pages/Composants', value: '12+', subtext: 'React components' },
    { label: 'Endpoints API', value: '20+', subtext: 'REST API routes' },
    { label: 'Performance', value: '2.3s', subtext: 'Temps de chargement' },
  ],
};

const tabs = ['overview', 'tech', 'features', 'challenges'];

export default function FlowDiffProDetail() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Portfolio</span>
          </Link>
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            {projectData.title}
          </div>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-6 mb-12">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full mb-4">
              <span className="text-sm font-medium text-blue-300">{projectData.status}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{projectData.title}</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">{projectData.tagline}</p>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {projectData.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 pt-8">
            <a
              href={projectData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} /> Voir le projet en live
            </a>
            <a
              href={projectData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-slate-400 transition-all flex items-center justify-center gap-2"
            >
              <GithubIcon /> Code source
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
              <p className="text-xs text-slate-400 uppercase">Durée</p>
              <p className="text-sm font-medium text-white">{projectData.duration}</p>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
              <p className="text-xs text-slate-400 uppercase">Stack</p>
              <p className="text-sm font-medium text-white">{projectData.tools.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectData.highlights.map((h, idx) => {
            const Icon = h.icon;
            return (
              <div key={idx} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <div className="text-cyan-400 mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{h.title}</h3>
                <p className="text-sm text-slate-400">{h.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="flex gap-4 border-b border-slate-800 mb-12 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Impact & Chiffres</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectData.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
                    <p className="text-xs text-slate-400">{metric.subtext}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Apprentissages clés</h3>
              <div className="space-y-3">
                {projectData.learnings.map((learning, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 p-4 bg-slate-800/30 border border-slate-700 rounded-lg"
                  >
                    <span className="text-cyan-400 flex-shrink-0">→</span>
                    <p className="text-slate-300">{learning}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tech */}
        {activeTab === 'tech' && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Stack Technologique</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projectData.techStack.map((stack, idx) => (
                <div key={idx} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">{stack.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {activeTab === 'features' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Fonctionnalités principales</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {projectData.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-slate-800/30 border border-slate-700 rounded-lg"
                >
                  <Code2 size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges */}
        {activeTab === 'challenges' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Défis & Solutions</h3>
            <div className="space-y-6">
              {projectData.challenges.map((challenge, idx) => (
                <div key={idx} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-3">🎯 {challenge.title}</h4>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 flex-shrink-0">✓</span>
                    <p className="text-slate-300">{challenge.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-slate-700 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Prochaines étapes</h2>
          <p className="text-slate-300 mb-6">
            FlowDiff-Pro sera bientôt connecté à Supabase pour avoir une vraie base de données en
            production. Je vais aussi ajouter des fonctionnalités avancées comme l'export de
            rapports et les notifications email.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all"
          >
            ← Retour au portfolio
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800 text-center text-slate-400 text-sm">
        <p>© 2026 Eden Sahilé — Project Details</p>
      </footer>
    </div>
  );
}
