# Portfolio Eden Sahilé — Suivi des tâches

> **Règle absolue :** Ne jamais passer automatiquement à une tâche suivante.
> Chaque tâche doit être validée par Eden avant de continuer.
> Après chaque tâche terminée, cocher la case et attendre la confirmation.

---

## Projet

**Nom :** Portfolio personnel Next.js 14  
**Propriétaire :** Eden Sahilé  
**Répertoire :** `/Users/macbookeden/Documents/Claude/portfolio/`  
**Objectif :** Portfolio statique multi-pages, thème clair "AI Product Builder", basé sur les maquettes `docs/design/*.dc.html`, déployable sur Vercel.

> ⚠️ **Pivot design (2026-08-16) :** le design dark mode / FlowDiff Pro / Crazee Burger décrit ci-dessous (Tâches 1-7) a été **remplacé** par un nouveau design (maquettes Claude Design dans `docs/design/`) : thème clair, branding "AI Product Builder", 4 nouveaux projets. Voir Tâche 8 et suivantes.

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
- [x] Ajouter l'entrée Crazee Burger dans le tableau `projects[]` de `app/page.jsx`
- [x] Créer `app/projects/crazee-burger/page.jsx` (page détail 3 onglets)
- [x] Vérifier le build de production (`npm run build`)

**Spec :** `docs/superpowers/specs/2026-05-08-crazee-burger-design.md`  
**Plan :** `docs/superpowers/plans/2026-05-08-crazee-burger.md`

**→ Attendre validation d'Eden avant de considérer la tâche terminée.**

---

## Refonte design (maquettes `docs/design/`)

Nouveau design validé par Eden le 2026-08-16, basé sur 4 maquettes HTML dans `docs/design/` :
`Accueil.dc.html`, `Liste-projets.dc.html`, `Projet Detail.dc.html`, `Projet Detail - Automatisation Make.dc.html`.

**Décisions validées :**
- Les 4 projets (Maison Buna, StoryForge AI, Assistant Support RAG, Automatisation Make) ont chacun une page détail cliquable — y compris les 2 qui n'avaient pas de page dans la maquette (lien `#`).
- L'ancien contenu (FlowDiff Pro, Crazee Burger, dark mode) est **supprimé** (pas archivé).
- Repo GitHub créé en **privé**.

### Tâche 8 — Fondations design system
- [x] Polices `Inter` + `Space Mono` via `next/font/google` dans `app/layout.jsx`
- [x] Lien Google Fonts Material Symbols Outlined (icônes `.msym`)
- [x] `tailwind.config.js` : palette du nouveau design (paper `#fcf9f8`, ink `#1c1b1b`, muted `#424754`, line `#c2c6d6`, accent `#0058be`, surfaces `#E2E2E2`/`#F4F4F4`/`#FBFBFB`/`#313030`)
- [x] Suppression du `dark` mode permanent (`<html className="dark">` retiré)
- [x] `app/globals.css` : body bg `#fcf9f8`, classes `.msym` et `.eslink`
- [x] Build de production vérifié (`npm run build` OK), `.next/` nettoyé après

**→ Attendre validation d'Eden avant de passer à la Tâche 9.**

---

### Tâche 9 — Page d'accueil `/`
- [x] Header sticky (logo "Eden Sahilé" + tagline "PO/AI PRODUCT BUILDER", nav PROJETS/EXPERTISE/CV/CONTACT)
- [x] Hero (badge, H1, description, CTA "Me contacter" + "Voir mon CV")
- [x] Section Projets (3 cards en aperçu + lien "Voir tous les projets" → `/projets`)
- [x] Section "Le Flux Intelligent" (Déclencheur → Logique IA → Résultat)
- [x] Section Expertise (photo `photo-profil.png` + 4 cards compétences)
- [x] Section Méthodologie (4 étapes numérotées)
- [x] CTA final + Footer
- [x] Vérification visuelle Playwright (desktop 1440px + mobile 390px), header corrigé pour le wrap mobile
- [x] Build de production vérifié (`npm run build` OK), `.next/` nettoyé après

**Note :** le serveur dev tourne sur le port **3001** (le port 3000 est occupé par un autre processus sur cette machine).

**→ Attendre validation d'Eden avant de passer à la Tâche 10.**

---

### Tâche 10 — Page `/projets` (liste complète)
- [x] Sidebar filtres par catégorie (Gen-AI Ops, Product Ownership, LLM Integration, Automatisation) — composant client
- [x] Liste de lignes projets expansibles (contexte/résultat/tags)
- [x] CTA final + Footer
- [x] Extraction de `SiteHeader`, `SiteFooter`, `ContactCta` en composants partagés (`app/components/`), réutilisés sur `/` et `/projets`
- [x] Vérification visuelle Playwright : filtre par catégorie + expand fonctionnels
- [x] Build de production vérifié (`npm run build` OK), `.next/` nettoyé après

**Note :** les 4 liens "Voir le projet" pointent vers `/projets/maison-buna`, `/projets/storyforge-ai`, `/projets/support-rag`, `/projets/automatisation-make` — ces pages n'existent pas encore (404 pour l'instant), elles arrivent en Tâche 11.

**→ Attendre validation d'Eden avant de passer à la Tâche 11.**

---

### Tâche 11 — Pages détail projet (`/projets/[slug]`)
- [x] Template réutilisable avec route dynamique (`app/projets/[slug]/page.jsx` + `app/projets/projectsData.js`)
- [x] StoryForge AI (contenu existant dans la maquette, carrousel avec placeholders — pas de vraies captures)
- [x] Automatisation Make (contenu existant dans la maquette, carrousel avec les 5 vraies captures extraites)
- [x] Maison Buna (page créée — contenu Contexte/Objectif/Solution **rédigé par Claude à partir du résumé existant, à valider par Eden**)
- [x] Assistant Support RAG (page créée — contenu Contexte/Objectif/Solution **rédigé par Claude à partir du résumé existant, à valider par Eden**)
- [x] Vérification visuelle Playwright des 4 pages
- [x] Build de production vérifié (`npm run build` OK, 4 routes statiques générées), `.next/` nettoyé après

**→ Attendre validation d'Eden avant de passer à la Tâche 12.**

---

### Tâche 12 — Carrousel image + assets
- [x] Composant client carrousel (flèches, dots, transition) — `app/components/ProjectCarousel.jsx`
- [x] Extraction des 4 images base64 (`make-shot-2` à `5`) depuis `.image-slots.state.json` vers `public/images/projects/`
- [x] Intégration `photo-profil.png` et `pasted-1783878104404-0.png` (renommée `make-shot-1.png`)

**Note :** réalisée en même temps que la Tâche 11 (le carrousel et les assets étaient nécessaires pour construire les pages détail). Validée par Eden.

---

### Tâche 13 — Nettoyage ancien contenu
- [x] Suppression du dossier `app/projects/` (`flowdiff-pro/`, `crazee-burger/`)
- [x] Ancien `page.jsx` déjà remplacé en Tâche 9
- [x] Vérification : aucune référence résiduelle à FlowDiff Pro / Crazee Burger dans `app/`
- [x] Build de production vérifié après suppression (`npm run build` OK, 9 routes), `.next/` nettoyé après

**Note :** la dépendance `lucide-react` (package.json) n'est plus utilisée nulle part dans le nouveau design (icônes Material Symbols à la place) — laissée en place, à retirer si tu veux faire le ménage plus tard.

---

## Audit UX/accessibilité (skills ui-ux-pro-max + frontend-design)

Audit réalisé le 2026-08-16 avant la Tâche 14, 4 corrections appliquées :
1. **Cibles tactiles** : flèches carrousel 40→44px, bouton "détails" `/projets` 36→44px (`ProjectCarousel.jsx`, `projets/page.jsx`). Les dots du carrousel gardent leur taille visuelle (8px, fidélité maquette) mais avec une zone cliquable élargie en padding négatif.
2. **Hiérarchie de titres** : correction des sauts de niveau (h2→h4 sur l'accueil ; h1→h3 sans h2 sur `/projets` et `/projets/[slug]`) — aucun changement visuel, Tailwind preflight ne stylise pas les h1-h6 par défaut.
3. **Curseur pointer** manquant sur tous les `<button>` (carrousel, filtres catégorie, bouton détails) — ajouté.
4. **Contraste footer** : `accent-soft/70` → `/85` sur fond sombre par marge de sécurité (le calcul précis montrait déjà 4.64:1, conforme AA).

Build de production vérifié après corrections, `.next/` nettoyé.

---

**→ Attendre validation d'Eden avant de passer à la Tâche 14.**

---

### Tâche 14 — GitHub
- [ ] Création du repo GitHub privé
- [ ] Premier commit + push

**→ Fin du plan de refonte.**

---

## Contenu à fournir par Eden

**Pages `/projets/maison-buna` et `/projets/support-rag` (Tâche 11) :** les paragraphes Contexte/Objectif/Solution et les champs Usage/Rôle ont été rédigés par Claude à partir des résumés déjà fournis (cards accueil + liste projets) — **à relire et corriger si besoin** dans `app/projets/projectsData.js`. Les carrousels de ces 2 pages + de StoryForge AI n'ont pas de vraies captures écran (placeholders "CAPTURE ÉCRAN PROJET À REMPLACER") — captures à fournir si tu veux les remplacer.

> La page `/projects/flowdiff-pro` (ancien design) a été supprimée en Tâche 13 — la liste de contenu qui lui était associée n'est plus d'actualité.

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
| 2026-05-08 | Tâche 7 terminée — Crazee Burger ajouté : carte homepage + page détail /projects/crazee-burger |
| 2026-08-16 | Pivot design validé — nouvelles maquettes `docs/design/` (thème clair, AI Product Builder, 4 projets), ancien contenu à supprimer, repo GitHub privé à créer |
| 2026-08-16 | Tâche 8 terminée — Fondations design system (fonts Inter/Space Mono, Material Symbols, palette Tailwind, dark mode retiré), build prod vérifié |
| 2026-08-16 | Tâche 9 terminée — Page d'accueil reconstruite selon `Accueil.dc.html`, vérifiée visuellement (desktop + mobile), bug de wrap du header mobile corrigé |
| 2026-08-16 | Tâche 10 terminée — Page `/projets` avec filtres catégorie + lignes expansibles selon `Liste-projets.dc.html`, header/footer/CTA extraits en composants partagés |
| 2026-08-16 | Tâche 11 terminée — 4 pages détail projet (`/projets/[slug]`) avec carrousel, captures Make extraites en vrais fichiers, contenu Maison Buna/Support RAG rédigé par Claude (à valider par Eden) |
| 2026-08-16 | Tâche 12 confirmée terminée (réalisée avec la Tâche 11) — carrousel + assets |
| 2026-08-16 | Tâche 13 terminée — suppression de `app/projects/` (FlowDiff Pro, Crazee Burger), build prod vérifié |
| 2026-08-16 | Audit UX/accessibilité (skills ui-ux-pro-max + frontend-design) — 4 corrections appliquées (cibles tactiles, hiérarchie titres, curseur pointer, contraste footer) |
| 2026-08-16 | Sous-titre header changé : "PO/AI PRODUCT BUILDER" → "Product Owner IA" (`SiteHeader.jsx`) |
| 2026-08-16 | CTA final accueil : texte "sur votre besoin" → "sur le poste" ; mailto centralisé (`ContactCta.jsx`) mis à jour vers edensahile28@gmail.com |
| 2026-08-16 | Skill ui-ux-pro-max consulté sur le parcours de contact — bouton "Me contacter" du hero pointait vers un second bouton identique en bas de page. Recommandation retenue par Eden : mailto direct sur le bouton hero (plus de clic redondant) |

---

## À retenir

### Bug CSS disparu (Next.js dev)

**Symptôme :** Page s'affiche sans CSS (fond blanc, pas de couleurs, liens bleus non stylés).

**Cause principale (confirmée) :** Quand `npm run build` est lancé pendant une session de dev, `.next/` est remplacé par des assets de production (CSS haché ex. `55c36e2fc3ecc8c2.css`). Si `npm run dev` redémarre sans nettoyer `.next/`, le dev server génère du HTML qui référence `_next/static/css/app/layout.css?v=...` (chemin dev) mais ce fichier n'existe pas → **404 permanent**. Le CSS passe alors uniquement par le bundle HMR/JS, ce qui est instable.

**Cause secondaire :** Next.js dev génère un `?v=timestamp` différent à chaque requête HTML. Si le navigateur a l'ancien HTML en cache, il tente de charger les anciens fichiers CSS → 404 → page sans style.

**Fix permanent appliqué dans `next.config.mjs` :**
```js
async headers() {
  if (process.env.NODE_ENV !== 'development') return [];
  return [{ source: '/(.*)', headers: [{ key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }] }];
}
```
→ Le navigateur ne met plus jamais en cache le HTML en dev. Aucun impact en production.

**⚠️ Règle absolue :** Ne jamais enchaîner `npm run build` et `npm run dev` sans nettoyer `.next/` entre les deux.

**Si le bug réapparaît :**
1. Hard refresh : `Cmd+Shift+R`
2. **Fix réel :** `rm -rf .next && npm run dev` — repart proprement, CSS servi correctement

### Section Projets — layout grille

**Pattern adopté :** `grid grid-cols-1 md:grid-cols-2 gap-5` au lieu de `space-y-8`.
Cartes compactes : `p-5`, titre `text-lg`, description `text-sm`, tags `text-xs px-2.5 py-0.5`.
Le lien "Voir les détails →" a été retiré (la carte entière est cliquable via `<Link>`).
Hover : bordure `blue-500/50` + icône ArrowUpRight qui s'illumine en bleu.
