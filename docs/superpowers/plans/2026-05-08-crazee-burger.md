# Crazee Burger — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Crazee Burger as a second project — a card on the homepage and a full detail page at `/projects/crazee-burger`.

**Architecture:** Two minimal changes to the portfolio. The homepage `projects[]` array gets a second entry. A new page component at `app/projects/crazee-burger/page.jsx` mirrors the FlowDiff-Pro pattern with 3 tabs (overview, fonctionnalités, apprentissages) instead of 4.

**Tech Stack:** Next.js 14 App Router · Tailwind CSS v3 · lucide-react · JSX (no TypeScript)

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| Modify | `app/page.jsx` | Add Crazee Burger entry to `projects[]` |
| Create | `app/projects/crazee-burger/page.jsx` | Full detail page with 3 tabs |

---

## Task 1 — Add Crazee Burger card to homepage

**Files:**
- Modify: `app/page.jsx` — `projects` array (lines ~22–30)

- [ ] **Step 1: Open `app/page.jsx` and locate the `projects` array**

Find this block (around line 22):
```js
const projects = [
  {
    name: 'FlowDiff-Pro',
    ...
  },
];
```

- [ ] **Step 2: Add the Crazee Burger entry**

Replace the `projects` array with:
```js
const projects = [
  {
    name: 'FlowDiff-Pro',
    description: 'Plateforme de commande pour libraires avec authentification et base de données Supabase.',
    tags: ['React', 'Node.js', 'Supabase', 'PostgreSQL'],
    link: 'https://book-flow-omega.vercel.app/login',
    detailLink: '/projects/flowdiff-pro',
  },
  {
    name: 'Crazee Burger',
    description: "Application de commande de burgers développée sans IA dans le cadre d'une formation React complète.",
    tags: ['React', 'ViteJS', 'Firebase', 'Styled-Components'],
    link: 'https://crazee-burger-phi-murex.vercel.app/order/EDEN',
    detailLink: '/projects/crazee-burger',
  },
];
```

- [ ] **Step 3: Verify visually**

Dev server should already be running (`npm run dev`). Open `http://localhost:3000` and confirm:
- The projects grid shows 2 cards side by side on desktop
- "Crazee Burger" card displays correctly with 4 tags
- Clicking the card navigates to `/projects/crazee-burger` (404 expected until Task 2)

- [ ] **Step 4: Commit**

```bash
git add app/page.jsx
git commit -m "feat: add Crazee Burger card to homepage projects grid"
```

---

## Task 2 — Create the Crazee Burger detail page

**Files:**
- Create: `app/projects/crazee-burger/page.jsx`

- [ ] **Step 1: Create the directory**

```bash
mkdir -p app/projects/crazee-burger
```

- [ ] **Step 2: Create `app/projects/crazee-burger/page.jsx` with this exact content**

```jsx
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
```

- [ ] **Step 3: Verify visually**

Open `http://localhost:3000/projects/crazee-burger` and confirm:
- Page loads (no 404, no console errors)
- Header shows "← Portfolio" link and "Crazee Burger" title
- Hero shows badge "Formation React", title, description, live button, 4 tech tags
- Tabs render: "Overview" / "Fonctionnalités" / "Apprentissages"
- Overview tab: 4 metric cards + description paragraph
- Clicking "Fonctionnalités": 9 feature items in 2-column grid
- Clicking "Apprentissages": 9 learning items in vertical list
- "← Portfolio" link returns to `/`
- "Voir le projet en live" opens Vercel URL in new tab
- Mobile: layout stacks correctly, tabs scroll horizontally

- [ ] **Step 4: Commit**

```bash
git add app/projects/crazee-burger/page.jsx
git commit -m "feat: add Crazee Burger project detail page"
```

---

## Task 3 — Verify production build

**Files:** none

- [ ] **Step 1: Run the production build**

```bash
npm run build
```

Expected: build completes with no errors. You'll see output like:
```
Route (app)                              Size     First Load JS
┌ ○ /                                   ...
├ ○ /projects/crazee-burger             ...
└ ○ /projects/flowdiff-pro              ...
```

If the build fails, fix the error before proceeding.

- [ ] **Step 2: Update CONTEXT.md**

Add a new row to the Historique table:
```
| 2026-05-08 | Crazee Burger ajouté — carte homepage + page détail /projects/crazee-burger |
```

- [ ] **Step 3: Commit**

```bash
git add CONTEXT.md
git commit -m "chore: mark Crazee Burger tasks complete in CONTEXT.md"
```
