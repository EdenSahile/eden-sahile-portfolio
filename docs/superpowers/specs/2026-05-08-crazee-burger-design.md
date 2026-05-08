# Spec — Crazee Burger (deuxième projet portfolio)

**Date :** 2026-05-08  
**Propriétaire :** Eden Sahilé  
**Statut :** Validé

---

## Objectif

Ajouter Crazee Burger comme deuxième projet dans le portfolio :
- Une carte dans la grille projets de la homepage (`/`)
- Une page détail complète à `/projects/crazee-burger`

---

## Carte homepage

**Localisation :** `app/page.jsx`, tableau `projects`, second élément après FlowDiff-Pro.

```js
{
  name: 'Crazee Burger',
  description: "Application de commande de burgers développée sans IA dans le cadre d'une formation React complète.",
  tags: ['React', 'ViteJS', 'Firebase', 'Styled-Components'],
  link: 'https://crazee-burger-phi-murex.vercel.app/order/EDEN',
  detailLink: '/projects/crazee-burger',
}
```

Style identique à la carte FlowDiff-Pro (bordure `slate-700`, hover `blue-500/50`, `ArrowUpRight`). Clic → `/projects/crazee-burger`.

---

## Page détail `/projects/crazee-burger`

**Fichier :** `app/projects/crazee-burger/page.jsx`  
**Composant :** `'use client'` (useState pour les onglets)

### Structure

1. **Header** — lien "← Retour aux projets" + nav identique à la homepage
2. **Hero** — titre "Crazee Burger", description courte, bouton "Voir le projet live ↗" (lien Vercel)
3. **3 onglets** — Overview / Fonctionnalités / Apprentissages
4. **Footer** — identique à la homepage

### Onglet Overview

4 highlight cards :

| Métrique | Valeur | Label |
|---|---|---|
| Tickets | `15` | livrés |
| Fonctionnalités | `9` | majeures |
| Sans IA | `100%` | développé |
| Méthodo | `Agile` | SCRUM |

Description : "Application de commande de burgers développée sans IA, dans le cadre d'une formation React complète (15 tickets livrés). Projet mené en méthodologie Agile avec GitHub Flow."

### Onglet Fonctionnalités

9 features en grille `md:grid-cols-2`, chaque item = icône `Code2` (cyan-400) + texte, style identique à FlowDiff-Pro features tab :

1. Page Login avec redirect vers la commande
2. Page de commande avec routing React Router
3. Navbar et affichage du menu produits
4. Panel Admin — ajout / suppression de produits en live
5. Panel Admin — modification en temps réel
6. Panier — ajout et suppression en temps réel
7. Persistance des données via Firebase/Firestore
8. Animations avec React Transition Group (effet casino)
9. Affichage publicité et disponibilité produits

### Onglet Apprentissages

9 concepts maîtrisés en liste verticale, chaque item = `→` (cyan-400) + texte, style identique à la section "Apprentissages clés" de FlowDiff-Pro :

1. Méthodologie Agile (SCRUM) et système de tickets
2. GitHub Flow — branches, PRs, code review
3. Styled-Components
4. Context API / useContext (état global)
5. useRef et useEffect (cycle de vie composants)
6. Firebase / Firestore (base NoSQL)
7. React Transition Group (animations)
8. Lecture de maquettes Figma comme en entreprise
9. Investigation et résolution de bugs

---

## Design system

Identique au reste du portfolio :
- Fond : `slate-950`
- Cartes : `slate-900` + bordures `slate-800`
- Texte : `white` / `slate-400`
- Accent : gradient `from-blue-500 to-cyan-400`
- Responsive : mobile-first, breakpoints `md:` et `lg:`

---

## Fichiers à créer / modifier

| Action | Fichier |
|---|---|
| Modifier | `app/page.jsx` — ajouter l'entrée Crazee Burger dans `projects[]` |
| Créer | `app/projects/crazee-burger/page.jsx` |
