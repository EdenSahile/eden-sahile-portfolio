# Portfolio Eden Sahilé — Design Spec
Date: 2026-05-06

## Contexte

Portfolio personnel Next.js 14 pour Eden Sahilé, Product Owner technique / UX / Full-Stack JS.
2 pages statiques, dark mode permanent, déployable sur Vercel.

## Architecture

**Approche choisie : Option A — tout inline dans les page.jsx**
Contenu statique, 2 pages connues → zéro sur-ingénierie.

```
/Users/macbookeden/Documents/Claude/Portfolio/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── globals.css
│   └── projects/
│       └── flowdiff-pro/
│           └── page.jsx
├── public/
├── package.json
├── tailwind.config.js
└── next.config.js
```

**Stack :**
- Next.js 14 App Router
- Tailwind CSS v3 (`darkMode: 'class'`, dark permanent via `className="dark"` sur `<html>`)
- lucide-react
- Police Inter via `next/font/google`
- JSX (pas TypeScript)
- Aucune API route, aucune base de données

## Système visuel

| Rôle | Token |
|---|---|
| Fond principal | `slate-950` (`#020617`) |
| Fond cartes | `slate-900` |
| Bordures | `slate-800` |
| Texte principal | `white` |
| Texte secondaire | `slate-400` |
| Accent | gradient `blue-500 → cyan-400` |
| Tags | `slate-800` bg + `slate-300` text |

Gradient signature : `bg-gradient-to-r from-blue-500 to-cyan-400`
Typographie : Inter, titres bold (`text-5xl` desktop / `text-3xl` mobile)
Responsive : mobile-first, breakpoints `md:` et `lg:`

Icônes Lucide : `ArrowRight`, `ExternalLink`, `Github`, `Linkedin`, `Mail`, `Code2`, `Layers`, `Zap`, `Star`, `ChevronLeft`, `CheckCircle`, `Trophy`

## Page 1 — `/` (app/page.jsx)

### Header
- Sticky (`sticky top-0 z-50`), fond `slate-900/80` + backdrop blur
- Logo `eden.dev` en gradient bleu/cyan
- Nav : liens ancrés `#projets`, `#experience`, `#competences`

### Hero
- H1 : "Eden Sahilé" (gradient bleu/cyan)
- Sous-titre : "Product Owner technique | UX Design | Full-Stack JS"
- Description : "Je comprends le code (React, Node.js), je conçois les interfaces (Figma)..."
- Boutons : "Voir mes projets" (primaire, → `#projets`) + "LinkedIn" (secondaire, → externe)
- 3 stat cards : "2j → 1h Facturation optimisée" / "4 Produits" / "3+ Ans en Product"

### Section Projets (`#projets`)
- 1 card FlowDiff-Pro : titre, description courte, tags (`React`, `Node.js`, `TypeScript`), lien `→ /projects/flowdiff-pro`

### Section Expérience (`#experience`)
- Timeline verticale, 2 entrées :
  1. Amalivre — Product Owner
  2. Amalivre — Chargée de diffusion numérique

### Section Compétences (`#competences`)
- 3 colonnes (grille responsive) :
  1. Product & Agilité
  2. Tech & Dev
  3. UX & Design

### CTA
- Email cliquable + bouton GitHub

### Footer
- Copyright + liens

## Page 2 — `/projects/flowdiff-pro` (app/projects/flowdiff-pro/page.jsx)

### Header
- Logo `eden.dev` + lien `← Retour` vers `/`

### Hero
- Titre projet + description
- Boutons : "Voir en live" (`ExternalLink`) + "Code source" (`Github`)

### Highlights
- 4 cards métriques clés

### Onglets (state local `useState`)
- `Overview` : métriques + apprentissages
- `Tech` : stack par catégorie (Frontend / Backend / Outils)
- `Features` : 8 fonctionnalités en grille
- `Challenges` : 3 défis + solutions

### CTA prochaines étapes
### Footer

## app/layout.jsx
- `metadata`: `{ title: 'Eden Sahilé — Portfolio', description: '...' }`
- Font Inter via `next/font/google`
- `<html lang="fr" className="dark">`
- Import `globals.css`

## app/globals.css
- `@tailwind base; @tailwind components; @tailwind utilities;`
- `body { background-color: #020617; }`

## Contraintes
- Le contenu exact de la page flowdiff-pro sera fourni par l'utilisateur
- Pas de toggle dark/light mode
- Pas de routing dynamique
- Déploiement Vercel envisagé (structure compatible)
