// ==================== app/layout.jsx ====================
import './globals.css';

export const metadata = {
  title: 'Eden Sahilé - Product Owner & Developer',
  description: 'Portfolio professionnel - PO technique, UX Design, Full-Stack JS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

// ==================== app/globals.css ====================
/*
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(15, 23, 42) 100%);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  font-family: inherit;
}
*/

// ==================== app/page.jsx (PAGE D'ACCUEIL) ====================
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

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
      description: 'Pilotage de 4 produits (e-commerce, ebooks, facturation, abonnements) | 6 développeurs | 4 équipes. Mise en place de Scrum, modernisation du site (monolithe → micro-services React/Next.js), migration progressive des modules.',
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
      description: 'Gestion des ebooks, catalogue numérique, refonte site web, pilotage de projets agiles avec les développeurs.',
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
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-900 px-6 py-4 space-y-3">
            {['À propos', 'Projets', 'Expérience', 'Compétences'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block text-sm font-medium text-slate-300 hover:text-blue-400">
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
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

          <div className="flex gap-4 pt-6">
            <a href="#projets" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Voir mes projets
            </a>
            <a href="https://linkedin.com/in/edensahile-99b088112" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-slate-400 hover:text-slate-200 transition-all flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          {/* Impact Stats */}
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
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <p className="text-xs text-slate-400 uppercase tracking-wide">Expérience</p>
              <p className="text-2xl font-bold text-white mt-2">3+</p>
              <p className="text-xs text-slate-400 mt-1">Ans en Product</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12">Projets</h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all hover:shadow-xl hover:shadow-blue-500/10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                </div>
                <Link href={project.detailLink} className="p-3 bg-slate-700/50 rounded-full hover:bg-slate-600 transition-all">
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

              <Link href={project.detailLink} className="inline-block text-sm font-medium text-blue-400 hover:text-blue-300">
                Voir les détails du projet →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12">Expérience</h2>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                </div>
                <p className="text-sm text-slate-400 mt-2 md:mt-0">{exp.duration}</p>
              </div>
              <p className="text-slate-300 mb-4">{exp.description}</p>
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

      {/* Skills Section */}
      <section id="compétences" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12">Compétences</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">{category}</h3>
              <div className="space-y-2">
                {items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-slate-700 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Intéressé par une collaboration ?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Je suis actuellement à la recherche de nouveaux défis en Product Management, IA ou développement full-stack.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="mailto:edensahile.pro@gmail.com" className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
              <Mail size={18} /> Envoyer un email
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-slate-400 transition-all flex items-center justify-center gap-2">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800 text-center text-slate-400 text-sm">
        <p>© 2025 Eden Sahilé. Buildé avec curiosité et passion pour la technologie.</p>
      </footer>
    </div>
  );
}

// ==================== app/projects/flowdiff-pro/page.jsx (PAGE DÉTAIL PROJET) ====================
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Code2, Zap, Users, Database, Shield } from 'lucide-react';

export default function FlowDiffProDetail() {
  const [activeTab, setActiveTab] = useState('overview');

  const projectData = {
    title: 'FlowDiff-Pro',
    tagline: 'Plateforme de commande pour libraires',
    description: 'Une application web complète permettant aux libraires de gérer leurs commandes de livres de manière fluide et efficace. Intégration avec une base de données Supabase pour la persistance des données.',
    status: 'Production',
    duration: '2 semaines',
    tools: ['Claude Code', 'React', 'Node.js'],
    liveUrl: 'https://book-flow-omega.vercel.app/login',
    githubUrl: '#',
    
    highlights: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Développement rapide',
        description: 'Buildé en 2 semaines avec Claude Code'
      },
      {
        icon: <Database className="w-6 h-6" />,
        title: 'Base de données réelle',
        description: 'Supabase PostgreSQL pour données persistantes'
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: 'Authentification sécurisée',
        description: 'Gestion des utilisateurs et sessions'
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: 'Design responsive',
        description: 'Utilisable sur tous les appareils'
      }
    ],

    techStack: [
      { category: 'Frontend', techs: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'] },
      { category: 'Backend', techs: ['Node.js', 'Express', 'API REST'] },
      { category: 'Database', techs: ['Supabase', 'PostgreSQL'] },
      { category: 'Auth', techs: ['JWT', 'Supabase Auth'] },
    ],

    features: [
      'Authentification utilisateur secure',
      'Dashboard personnalisé',
      'Gestion des commandes en temps réel',
      'Historique des transactions',
      'Notifications système',
      'Export données (CSV)',
      'Responsive design mobile-first',
      'Dark mode intégré'
    ],

    challenges: [
      {
        title: 'Complexité base de données',
        solution: 'Modélisation relationnelle avec Supabase, schéma normalisé pour éviter les redondances'
      },
      {
        title: 'Authentification & sécurité',
        solution: 'JWT tokens avec Supabase Auth, encryption des données sensibles'
      },
      {
        title: 'UX/Performance',
        solution: 'Optimisation des requêtes, pagination, caching côté client'
      }
    ],

    learnings: [
      'Maîtrise complète de React & hooks avancés',
      'Intégration backend (API REST)',
      'Gestion d\'authentification en production',
      'Déploiement sur Vercel avec CI/CD',
      'Orchestration d\'outils avec Claude Code'
    ],

    metrics: [
      { label: 'Temps de développement', value: '2 semaines', subtext: 'Avec Claude Code' },
      { label: 'Pages/Composants', value: '12+', subtext: 'React components' },
      { label: 'Endpoints API', value: '20+', subtext: 'REST API routes' },
      { label: 'Performance', value: '2.3s', subtext: 'Temps de chargement' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Portfolio</span>
          </Link>
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            {projectData.title}
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-6 mb-12">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full mb-4">
              <span className="text-sm font-medium text-blue-300">{projectData.status}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {projectData.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              {projectData.tagline}
            </p>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {projectData.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-8">
            <a 
              href={projectData.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} />
              Voir le projet en live
            </a>
            <a 
              href={projectData.githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-slate-400 transition-all flex items-center justify-center gap-2"
            >
              <Github size={18} />
              Code source
            </a>
          </div>

          {/* Info Pills */}
          <div className="flex flex-wrap gap-4 pt-8">
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

      {/* Highlights Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectData.highlights.map((highlight, idx) => (
            <div key={idx} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <div className="text-cyan-400 mb-4">{highlight.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
              <p className="text-sm text-slate-400">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="flex gap-4 border-b border-slate-800 mb-12 overflow-x-auto">
          {['overview', 'tech', 'features', 'challenges'].map((tab) => (
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

        {/* Overview Tab */}
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
                  <div key={idx} className="flex gap-3 p-4 bg-slate-800/30 border border-slate-700 rounded-lg">
                    <span className="text-cyan-400 flex-shrink-0">→</span>
                    <p className="text-slate-300">{learning}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tech Tab */}
        {activeTab === 'tech' && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Stack Technologique</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projectData.techStack.map((stack, idx) => (
                <div key={idx} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">{stack.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech, i) => (
                      <span key={i} className="px-3 py-2 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Fonctionnalités principales</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {projectData.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-slate-800/30 border border-slate-700 rounded-lg">
                  <Code2 size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges Tab */}
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

      {/* Next Steps */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-slate-700 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Prochaines étapes</h2>
          <p className="text-slate-300 mb-6">
            FlowDiff-Pro sera bientôt connecté à Supabase pour avoir une vraie base de données en production. 
            Je vais aussi ajouter des fonctionnalités avancées comme l'export de rapports et les notifications email.
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
        <p>© 2025 Eden Sahilé - Project Details</p>
      </footer>
    </div>
  );
}
