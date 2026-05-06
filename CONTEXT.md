# Portfolio Eden Sahilé — Suivi des tâches

> **Règle absolue :** Ne jamais passer automatiquement à une tâche suivante.
> Chaque tâche doit être validée par Eden avant de continuer.
> Après chaque tâche terminée, cocher la case et attendre la confirmation.

---

## Projet

**Nom :** Portfolio personnel Next.js 14  
**Propriétaire :** Eden Sahilé  
**Répertoire :** `/Users/macbookeden/Documents/Claude/portfolio/`  
**Objectif :** Portfolio statique 2 pages, dark mode permanent, déployable sur Vercel.

---

## Stack technique

- Next.js 14 (App Router, pas de `pages/`)
- Tailwind CSS v3 (`darkMode: 'class'`, dark permanent)
- lucide-react (icônes)
- Police Inter via `next/font/google`
- JSX (pas TypeScript)
- Aucune API route, aucune base de données

---

## Structure des fichiers cibles

```
Portfolio/
├── app/
│   ├── layout.jsx          ← RootLayout, metadata, font Inter, dark
│   ├── page.jsx            ← Page accueil (/)
│   ├── globals.css         ← Tailwind directives + body bg slate-950
│   └── projects/
│       └── flowdiff-pro/
│           └── page.jsx    ← Page détail projet (avec useState)
├── public/
├── package.json
├── tailwind.config.js
├── next.config.js
├── CLAUDE.md
├── CONTEXT.md              ← ce fichier
└── docs/
    └── superpowers/
        ├── specs/2026-05-06-portfolio-eden-design.md
        └── plans/2026-05-06-portfolio-eden.md
```

---

## Design system

| Rôle | Token Tailwind |
|---|---|
| Fond principal | `slate-950` (`#020617`) |
| Fond cartes | `slate-900` |
| Bordures | `slate-800` |
| Texte principal | `white` |
| Texte secondaire | `slate-400` |
| Accent | gradient `from-blue-500 to-cyan-400` |
| Tags | `slate-800` bg + `slate-300` text |

Gradient signature : `bg-gradient-to-r from-blue-500 to-cyan-400`  
Responsive : mobile-first, breakpoints `md:` et `lg:`

---

## Tâches

### Tâche 1 — Scaffolding : initialiser le projet Next.js 14
- [x] Créer le projet via `npx create-next-app@14`
- [x] Installer `lucide-react`
- [x] Vérifier la structure générée
- [x] Commit initial

**→ Attendre validation d'Eden avant de passer à la Tâche 2.**

---

### Tâche 2 — Config : tailwind.config.js + globals.css
- [x] Remplacer `tailwind.config.js` (darkMode: 'class')
- [x] Vérifier `next.config.js`
- [x] Remplacer `app/globals.css` (directives Tailwind + body bg)
- [x] Commit

**→ Attendre validation d'Eden avant de passer à la Tâche 3.**

---

### Tâche 3 — app/layout.jsx : RootLayout
- [x] Renommer `.js` → `.jsx` si nécessaire
- [x] Écrire `layout.jsx` (Inter, dark, metadata)
- [x] Lancer `npm run dev` et vérifier qu'il démarre sans erreur
- [x] Commit

**→ Attendre validation d'Eden avant de passer à la Tâche 4.**

---

### Tâche 4 — app/page.jsx : Page d'accueil (/)
- [x] Écrire la page complète (header, hero, stats, projets, expérience, compétences, CTA, footer)
- [x] Vérifier visuellement dans le navigateur sur `http://localhost:3000`
- [x] Commit

**→ Attendre validation d'Eden avant de passer à la Tâche 5.**

---

### Tâche 5 — app/projects/flowdiff-pro/page.jsx : Page détail projet
- [x] Créer le dossier `app/projects/flowdiff-pro/`
- [x] Écrire la page (header, hero, highlights, onglets Overview/Tech/Features/Challenges, CTA, footer)
- [x] Vérifier visuellement sur `http://localhost:3000/projects/flowdiff-pro`
- [x] Intégrer le contenu fourni par Eden (highlights réels, features, challenges, liens live/GitHub)
- [x] Commit

**→ Attendre validation d'Eden avant de passer à la Tâche 6.**

---

### Tâche 6 — Vérification finale : build de production
- [ ] Lancer `npm run build`
- [ ] Vérifier le build en local avec `npm run start`
- [ ] Commit de clôture

**→ Attendre validation d'Eden. Projet terminé.**

---

## Contenu à fournir par Eden

La page `/projects/flowdiff-pro` nécessite les éléments suivants qu'Eden fournira :
- [ ] Valeurs réelles des 4 highlight cards (métriques)
- [ ] Contenu de l'onglet Overview (métriques + apprentissages réels)
- [ ] Stack technique réelle (Frontend / Backend / Outils)
- [ ] 8 fonctionnalités réelles
- [ ] 3 défis réels avec solutions
- [ ] URL live du projet
- [ ] URL du dépôt GitHub
- [ ] URL LinkedIn

---

## Historique

| Date | Action |
|---|---|
| 2026-05-06 | Spec design validée |
| 2026-05-06 | Plan d'implémentation créé |
| 2026-05-06 | CONTEXT.md et CLAUDE.md créés |
| 2026-05-06 | Tâche 1 terminée — Next.js 14 scaffoldé, lucide-react installé, commit initial |
| 2026-05-06 | Tâche 2 terminée — Tailwind darkMode:'class' configuré, globals.css créé |
| 2026-05-06 | Tâche 3 terminée — layout.jsx créé, dev server OK |
| 2026-05-06 | Tâche 4 terminée — page.jsx accueil créée, HTTP 200 confirmé |
| 2026-05-06 | Tâche 5 terminée — FlowDiff Pro page créée, HTTP 200 sur les deux routes |
