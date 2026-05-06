# Portfolio Eden Sahilé — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Créer un portfolio Next.js 14 statique pour Eden Sahilé avec 2 pages (accueil + détail FlowDiff-Pro), dark mode permanent, Tailwind CSS et Lucide Icons.

**Architecture:** App Router Next.js 14, tout le contenu inline dans les page.jsx, pas de composants extraits. Dark mode permanent via `className="dark"` sur `<html>`. Aucune API route, aucune base de données.

**Tech Stack:** Next.js 14, Tailwind CSS v3, lucide-react, next/font/google (Inter), JSX

---

## Fichiers créés / modifiés

| Fichier | Rôle |
|---|---|
| `package.json` | Dépendances du projet |
| `next.config.js` | Config Next.js minimale |
| `tailwind.config.js` | Palette + darkMode class |
| `postcss.config.js` | PostCSS pour Tailwind |
| `app/globals.css` | Directives Tailwind + body bg |
| `app/layout.jsx` | RootLayout, metadata, font Inter, dark |
| `app/page.jsx` | Page accueil (/) complète |
| `app/projects/flowdiff-pro/page.jsx` | Page détail projet |

---

## Task 1 : Scaffolding — initialiser le projet Next.js 14

**Files:**
- Create: `/Users/macbookeden/Documents/Claude/Portfolio/` (répertoire cible existant)

- [ ] **Step 1 : Créer le projet Next.js 14**

```bash
cd /Users/macbookeden/Documents/Claude
npx create-next-app@14 Portfolio --js --tailwind --eslint --app --no-src-dir --no-import-alias --use-npm
```

Répondre aux prompts :
- Would you like to use TypeScript? → **No**
- Would you like to use ESLint? → **Yes**
- Would you like to use Tailwind CSS? → **Yes**
- Would you like to use `src/` directory? → **No**
- Would you like to use App Router? → **Yes**
- Would you like to customize the default import alias? → **No**

> Si le dossier Portfolio existe déjà, `create-next-app` demandera confirmation — répondre **y**.

Expected output : `✓ Installation completed` ou `Success! Created Portfolio`

- [ ] **Step 2 : Installer lucide-react**

```bash
cd /Users/macbookeden/Documents/Claude/Portfolio
npm install lucide-react
```

Expected output : `added X packages` sans erreurs.

- [ ] **Step 3 : Vérifier la structure générée**

```bash
ls /Users/macbookeden/Documents/Claude/Portfolio/app
```

Expected : `favicon.ico  globals.css  layout.js  page.js` (ou `.jsx`)

- [ ] **Step 4 : Commit initial**

```bash
cd /Users/macbookeden/Documents/Claude/Portfolio
git add .
git commit -m "feat: init Next.js 14 + Tailwind + lucide-react"
```

---

## Task 2 : Config — tailwind.config.js, next.config.js, globals.css

**Files:**
- Modify: `tailwind.config.js`
- Modify: `next.config.js`
- Modify: `app/globals.css`

- [ ] **Step 1 : Remplacer tailwind.config.js**

Écrire le contenu suivant dans `tailwind.config.js` :

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- [ ] **Step 2 : Vérifier next.config.js**

Le fichier généré par défaut est correct. Vérifier qu'il contient au minimum :

```js
/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = nextConfig
```

Aucune modification requise.

- [ ] **Step 3 : Remplacer app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #020617;
}
```

- [ ] **Step 4 : Commit**

```bash
cd /Users/macbookeden/Documents/Claude/Portfolio
git add tailwind.config.js app/globals.css
git commit -m "feat: configure Tailwind dark mode + global styles"
```

---

## Task 3 : app/layout.jsx — RootLayout

**Files:**
- Modify: `app/layout.jsx` (renommer depuis `layout.js` si nécessaire)

- [ ] **Step 1 : Renommer en .jsx si besoin**

```bash
cd /Users/macbookeden/Documents/Claude/Portfolio/app
mv layout.js layout.jsx 2>/dev/null || true
mv page.js page.jsx 2>/dev/null || true
```

- [ ] **Step 2 : Écrire app/layout.jsx**

```jsx
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eden Sahilé — Portfolio',
  description: 'Product Owner technique, UX Design et Full-Stack JS. Découvrez mes projets et mon parcours.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 3 : Lancer le dev server pour vérifier qu'il démarre sans erreur**

```bash
cd /Users/macbookeden/Documents/Claude/Portfolio
npm run dev
```

Expected : `▲ Next.js 14.x.x` + `Local: http://localhost:3000` sans erreur rouge dans le terminal.
Arrêter avec `Ctrl+C` après vérification.

- [ ] **Step 4 : Commit**

```bash
git add app/layout.jsx app/page.jsx
git commit -m "feat: add RootLayout with Inter font and dark mode"
```

---

## Task 4 : app/page.jsx — Page d'accueil (/)

**Files:**
- Modify: `app/page.jsx`

- [ ] **Step 1 : Écrire app/page.jsx**

Remplacer le contenu complet par :

```jsx
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Code2,
  Layers,
  Zap,
  Star,
  CheckCircle,
} from 'lucide-react'

const stats = [
  { value: '2j → 1h', label: 'Facturation optimisée' },
  { value: '4', label: 'Produits' },
  { value: '3+', label: 'Ans en Product' },
]

const projects = [
  {
    title: 'FlowDiff Pro',
    description:
      'Outil de comparaison de fichiers de configuration avec diff visuel, export et historique. Conçu pour les équipes techniques qui veulent aller vite.',
    tags: ['React', 'Node.js', 'TypeScript'],
    href: '/projects/flowdiff-pro',
  },
]

const experiences = [
  {
    role: 'Product Owner',
    company: 'Amalivre',
    period: '2023 — présent',
    description:
      'Pilotage du backlog, coordination entre équipes tech et métier, ateliers de priorisation, rédaction des specs fonctionnelles et suivi des KPIs produit.',
  },
  {
    role: 'Chargée de diffusion numérique',
    company: 'Amalivre',
    period: '2022 — 2023',
    description:
      'Gestion des canaux de distribution numérique, analyse des performances et optimisation des flux de données produits.',
  },
]

const skills = [
  {
    category: 'Product & Agilité',
    icon: Layers,
    items: ['Backlog management', 'User stories', 'Roadmap', 'Scrum / Kanban', 'KPIs & OKRs', 'Ateliers UX'],
  },
  {
    category: 'Tech & Dev',
    icon: Code2,
    items: ['React', 'Next.js', 'Node.js', 'TypeScript', 'SQL / Prisma', 'Git & CI/CD'],
  },
  {
    category: 'UX & Design',
    icon: Star,
    items: ['Figma', 'Wireframing', 'Prototypage', 'Tests utilisateurs', 'Design system', 'Accessibilité'],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            eden.dev
          </span>
          <nav className="flex gap-6 text-sm text-slate-400">
            <a href="#projets" className="hover:text-white transition-colors">Projets</a>
            <a href="#experience" className="hover:text-white transition-colors">Expérience</a>
            <a href="#competences" className="hover:text-white transition-colors">Compétences</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-24 pb-20">
        <p className="text-sm text-cyan-400 font-mono mb-4">Bonjour, je suis</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Eden Sahilé
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-6">
          Product Owner technique | UX Design | Full-Stack JS
        </p>
        <p className="text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Je comprends le code (React, Node.js), je conçois les interfaces (Figma) et je pilote les produits de la spec au déploiement. Je suis le pont entre la vision business et l'équipe technique.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#projets"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Voir mes projets <ArrowRight size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="max-w-5xl mx-auto px-4 py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-2">Projets</h2>
        <p className="text-slate-400 mb-10">Des outils que j'ai conçus et développés.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col gap-4 hover:border-slate-600 transition-colors"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.href}
                className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
              >
                Voir le projet <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Expérience */}
      <section id="experience" className="max-w-5xl mx-auto px-4 py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-2">Expérience</h2>
        <p className="text-slate-400 mb-10">Mon parcours professionnel.</p>
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div key={exp.role} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-sm text-slate-500">{exp.period}</span>
              </div>
              <p className="text-cyan-400 text-sm font-medium mb-3">{exp.company}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" className="max-w-5xl mx-auto px-4 py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-2">Compétences</h2>
        <p className="text-slate-400 mb-10">Ce que je maîtrise.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div key={skill.category} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={18} className="text-cyan-400" />
                  <h3 className="font-semibold">{skill.category}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle size={13} className="text-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-20 border-t border-slate-800 text-center">
        <h2 className="text-3xl font-bold mb-4">Travaillons ensemble</h2>
        <p className="text-slate-400 mb-8">Disponible pour des missions PO, conseil produit ou développement.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:edensahile2.0@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={16} /> edensahile2.0@gmail.com
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>© 2026 Eden Sahilé. Tous droits réservés.</span>
          <div className="flex gap-4">
            <a href="#projets" className="hover:text-slate-300 transition-colors">Projets</a>
            <a href="#experience" className="hover:text-slate-300 transition-colors">Expérience</a>
            <a href="#competences" className="hover:text-slate-300 transition-colors">Compétences</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
```

- [ ] **Step 2 : Vérifier visuellement dans le navigateur**

```bash
cd /Users/macbookeden/Documents/Claude/Portfolio
npm run dev
```

Ouvrir `http://localhost:3000`. Vérifier :
- Header sticky visible avec logo gradient
- Hero avec nom, sous-titre, boutons et 3 stats
- Section Projets avec card FlowDiff Pro
- Section Expérience avec 2 entrées
- Section Compétences avec 3 colonnes
- CTA et footer

Arrêter avec `Ctrl+C`.

- [ ] **Step 3 : Commit**

```bash
cd /Users/macbookeden/Documents/Claude/Portfolio
git add app/page.jsx
git commit -m "feat: add home page with hero, projects, experience, skills, CTA"
```

---

## Task 5 : app/projects/flowdiff-pro/page.jsx — Page détail projet

**Files:**
- Create: `app/projects/flowdiff-pro/page.jsx`

> **Note:** Le contenu détaillé (highlights, features, tech stack, challenges) sera fourni par l'utilisateur. Cette tâche crée la structure complète avec `'use client'` pour `useState`.

- [ ] **Step 1 : Créer le dossier**

```bash
mkdir -p /Users/macbookeden/Documents/Claude/Portfolio/app/projects/flowdiff-pro
```

- [ ] **Step 2 : Écrire app/projects/flowdiff-pro/page.jsx**

```jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronLeft,
  ExternalLink,
  Github,
  Zap,
  Code2,
  Star,
  Trophy,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

const highlights = [
  { value: '—', label: 'Métrique 1', icon: Zap },
  { value: '—', label: 'Métrique 2', icon: Star },
  { value: '—', label: 'Métrique 3', icon: Trophy },
  { value: '—', label: 'Métrique 4', icon: CheckCircle },
]

const tabs = ['Overview', 'Tech', 'Features', 'Challenges']

const techStack = {
  Frontend: ['React', 'Tailwind CSS', 'TypeScript'],
  Backend: ['Node.js', 'Express'],
  Outils: ['Git', 'Vite', 'ESLint'],
}

const features = [
  'Diff visuel en temps réel',
  'Export PDF / JSON',
  'Historique des comparaisons',
  'Recherche dans le diff',
  'Support multi-formats',
  'Thème dark/light',
  'Raccourcis clavier',
  'Partage de session',
]

const challenges = [
  {
    title: 'Performance sur grands fichiers',
    description: 'Les fichiers de +10 000 lignes causaient des freezes UI.',
    solution: 'Virtualisation de la liste avec windowing — rendu uniquement des lignes visibles.',
  },
  {
    title: 'Parsing multi-formats',
    description: 'YAML, JSON, TOML ont des structures radicalement différentes.',
    solution: 'Pipeline de normalisation unifié avant le diff, avec détection automatique du format.',
  },
  {
    title: 'Accessibilité du diff',
    description: 'Les couleurs seules (rouge/vert) ne suffisent pas pour les daltoniens.',
    solution: 'Ajout d\'icônes + patterns en plus des couleurs, testé avec axe-core.',
  },
]

export default function FlowDiffPro() {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            eden.dev
          </span>
          <Link
            href="/"
            className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ChevronLeft size={16} /> Retour
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16">
        <p className="text-sm text-cyan-400 font-mono mb-3">Projet</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          FlowDiff Pro
        </h1>
        <p className="text-slate-400 max-w-2xl mb-8 leading-relaxed text-lg">
          Outil de comparaison de fichiers de configuration avec diff visuel, export et historique. Conçu pour les équipes techniques qui veulent aller vite.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={16} /> Voir en live
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
          >
            <Github size={16} /> Code source
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h) => {
            const Icon = h.icon
            return (
              <div key={h.label} className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
                <Icon size={20} className="text-cyan-400 mx-auto mb-2" />
                <p className="text-2xl font-bold mb-1">{h.value}</p>
                <p className="text-xs text-slate-400">{h.label}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        {/* Tab nav */}
        <div className="flex gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1 mb-8 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === 'Overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-cyan-400">Métriques clés</h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Performance améliorée de X%</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Temps de traitement réduit</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Utilisateurs satisfaits</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-cyan-400">Apprentissages</h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li className="flex items-center gap-2"><Star size={14} className="text-cyan-400" /> Architecture orientée performance</li>
                <li className="flex items-center gap-2"><Star size={14} className="text-cyan-400" /> Importance des tests d'accessibilité</li>
                <li className="flex items-center gap-2"><Star size={14} className="text-cyan-400" /> Itération rapide avec les utilisateurs</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tech */}
        {activeTab === 'Tech' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="font-semibold mb-4 text-cyan-400">{category}</h3>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <Code2 size={13} className="text-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Features */}
        {activeTab === 'Features' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-start gap-3"
              >
                <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Challenges */}
        {activeTab === 'Challenges' && (
          <div className="flex flex-col gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{c.description}</p>
                <div className="flex items-start gap-2 bg-slate-800/60 rounded-lg p-3">
                  <Zap size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800 text-center">
        <h2 className="text-2xl font-bold mb-3">Prochaines étapes</h2>
        <p className="text-slate-400 mb-8">Ce projet continue d'évoluer. Vous avez des idées ou envie de collaborer ?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:edensahile2.0@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Me contacter <ArrowRight size={16} />
          </a>
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
          >
            Voir d'autres projets
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>© 2026 Eden Sahilé. Tous droits réservés.</span>
          <Link href="/" className="hover:text-slate-300 transition-colors">← Retour au portfolio</Link>
        </div>
      </footer>
    </div>
  )
}
```

- [ ] **Step 3 : Vérifier dans le navigateur**

```bash
cd /Users/macbookeden/Documents/Claude/Portfolio
npm run dev
```

Ouvrir `http://localhost:3000/projects/flowdiff-pro`. Vérifier :
- Header avec retour "/"
- Hero avec titre et 2 boutons
- 4 highlight cards
- 4 onglets cliquables — chaque onglet affiche son contenu
- CTA et footer

Arrêter avec `Ctrl+C`.

- [ ] **Step 4 : Commit final**

```bash
cd /Users/macbookeden/Documents/Claude/Portfolio
git add app/projects/
git commit -m "feat: add FlowDiff Pro project page with tabs"
```

---

## Task 6 : Vérification finale

- [ ] **Step 1 : Build de production**

```bash
cd /Users/macbookeden/Documents/Claude/Portfolio
npm run build
```

Expected : `✓ Compiled successfully` sans erreurs. Les routes `/` et `/projects/flowdiff-pro` apparaissent dans la liste.

- [ ] **Step 2 : Vérifier le build en local**

```bash
npm run start
```

Ouvrir `http://localhost:3000` et `http://localhost:3000/projects/flowdiff-pro`.
Vérifier que tout s'affiche correctement en mode production.

- [ ] **Step 3 : Commit de clôture**

```bash
cd /Users/macbookeden/Documents/Claude/Portfolio
git add .
git commit -m "chore: verify production build passes"
```
