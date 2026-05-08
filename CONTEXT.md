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
- [x] Lancer `npm run build`
- [x] Vérifier le build en local avec `npm run start`
- [x] Commit de clôture

**→ Attendre validation d'Eden. Projet terminé.**

---

### Tâche 7 — Crazee Burger : carte homepage + page détail
- [ ] Ajouter l'entrée Crazee Burger dans le tableau `projects[]` de `app/page.jsx`
- [ ] Créer `app/projects/crazee-burger/page.jsx` (page détail 3 onglets)
- [ ] Vérifier le build de production (`npm run build`)

**Spec :** `docs/superpowers/specs/2026-05-08-crazee-burger-design.md`  
**Plan :** `docs/superpowers/plans/2026-05-08-crazee-burger.md`

**→ Attendre validation d'Eden avant de considérer la tâche terminée.**

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
| 2026-05-06 | Tâche 6 terminée — Build prod OK, / et /projects/flowdiff-pro répondent 200 |
| 2026-05-08 | Section Projets redesignée — grille 2 colonnes, cartes compactes (p-5, text-lg, tags xs) |
| 2026-05-08 | Bug CSS disparu résolu — `next.config.mjs` : no-cache headers en dev, cache `.next` purgé |
| 2026-05-08 | Tâche 7 créée — Spec + plan Crazee Burger validés, prêt à implémenter |

---

## À retenir

### Bug CSS disparu (Next.js dev)

**Symptôme :** Page s'affiche sans CSS (fond blanc, pas de couleurs, liens bleus non stylés).

**Cause :** Next.js dev génère un nouveau hash de version pour les fichiers statiques (`?v=timestamp`) à chaque rebuild. Si le navigateur a l'ancien HTML en cache, il tente de charger les anciens fichiers CSS (ex. `layout.css?v=ancien`) → 404 → page sans style.

**Fix permanent appliqué dans `next.config.mjs` :**
```js
async headers() {
  if (process.env.NODE_ENV !== 'development') return [];
  return [{ source: '/(.*)', headers: [{ key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }] }];
}
```
→ Le navigateur ne met plus jamais en cache le HTML en dev. Aucun impact en production.

**Si le bug réapparaît malgré tout :**
1. Hard refresh dans le navigateur : `Cmd+Shift+R`
2. Supprimer le dossier `.next/` et relancer `npm run dev`

### Section Projets — layout grille

**Pattern adopté :** `grid grid-cols-1 md:grid-cols-2 gap-5` au lieu de `space-y-8`.
Cartes compactes : `p-5`, titre `text-lg`, description `text-sm`, tags `text-xs px-2.5 py-0.5`.
Le lien "Voir les détails →" a été retiré (la carte entière est cliquable via `<Link>`).
Hover : bordure `blue-500/50` + icône ArrowUpRight qui s'illumine en bleu.
