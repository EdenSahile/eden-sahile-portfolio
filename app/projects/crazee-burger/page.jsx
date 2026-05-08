'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';

const projectData = {
  title: 'Crazee Burger',
  tagline: 'Application de commande de burgers',
  description:
    "Application de commande de burgers développée sans IA, dans le cadre d'une formation React complète (15 tickets livrés). Projet mené en méthodologie Agile avec GitHub Flow.",
  liveUrl: 'https://crazee-burger-phi-murex.vercel.app/order/EDEN',

  metrics: [
    { label: 'Tickets', value: '15', subtext: 'livrés' },
    { label: 'Fonctionnalités', value: '9', subtext: 'majeures' },
    { label: 'Sans IA', value: '100%', subtext: 'développé' },
    { label: 'Méthodo', value: 'Agile', subtext: 'SCRUM' },
  ],

  features: [
    'Page Login avec redirect vers la commande',
    'Page de commande avec routing React Router',
    'Navbar et affichage du menu produits',
    'Panel Admin — ajout / suppression de produits en live',
    'Panel Admin — modification en temps réel',
    'Panier — ajout et suppression en temps réel',
    'Persistance des données via Firebase/Firestore',
    'Animations avec React Transition Group (effet casino)',
    'Affichage publicité et disponibilité produits',
  ],

  learnings: [
    'Méthodologie Agile (SCRUM) et système de tickets',
    'GitHub Flow — branches, PRs, code review',
    'Styled-Components',
    'Context API / useContext (état global)',
    'useRef et useEffect (cycle de vie composants)',
    'Firebase / Firestore (base NoSQL)',
    'React Transition Group (animations)',
    'Lecture de maquettes Figma comme en entreprise',
    'Investigation et résolution de bugs',
  ],
};

const tabs = ['overview', 'fonctionnalités', 'apprentissages'];

export default function CrazeeBurgerDetail() {
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
        <div className="space-y-6">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full mb-4">
              <span className="text-sm font-medium text-blue-300">Formation React</span>
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
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {['React', 'ViteJS', 'Firebase', 'Styled-Components'].map((tech) => (
              <div key={tech} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
                <p className="text-sm font-medium text-white">{tech}</p>
              </div>
            ))}
          </div>
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
              <h3 className="text-2xl font-bold text-white mb-6">Chiffres clés</h3>
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
              <h3 className="text-2xl font-bold text-white mb-4">À propos du projet</h3>
              <p className="text-slate-300 leading-relaxed max-w-3xl">{projectData.description}</p>
            </div>
          </div>
        )}

        {/* Fonctionnalités */}
        {activeTab === 'fonctionnalités' && (
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

        {/* Apprentissages */}
        {activeTab === 'apprentissages' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">{"Ce que j'ai appris"}</h3>
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
        )}
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800 text-center text-slate-400 text-sm">
        <p>© 2026 Eden Sahilé. Buildé avec curiosité et passion pour la technologie.</p>
      </footer>
    </div>
  );
}
