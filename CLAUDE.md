# CLAUDE.md — Portfolio Eden Sahilé

## Instruction prioritaire — À lire à chaque session

**Lis `CONTEXT.md` en premier.** Ce fichier contient l'état actuel du projet, les tâches terminées (cases cochées) et celles qui restent à faire.

---

## Règles de travail

1. **Une tâche à la fois.** Ne jamais enchaîner automatiquement deux tâches. Après chaque tâche, cocher les cases dans `CONTEXT.md` et attendre la validation explicite d'Eden avant de continuer.

2. **Validation obligatoire.** Terminer chaque tâche par : _"Tâche X terminée. Veux-tu que je passe à la Tâche X+1 ?"_

3. **Mettre à jour `CONTEXT.md`** à chaque tâche complétée : cocher les cases `[ ]` → `[x]` et ajouter une ligne dans le tableau Historique.

4. **Transmettre ce contexte aux sous-agents.** Si tu dispatches un sous-agent, inclure dans son prompt :
   - Le contenu de `CONTEXT.md` (état courant)
   - Le design system (couleurs, typographie, responsive)
   - La règle de validation obligatoire
   - La tâche précise à exécuter

---

## Contexte projet

**Propriétaire :** Eden Sahilé — Product Owner technique, UX Design, Full-Stack JS  
**Email :** edensahile2.0@gmail.com  
**Répertoire :** `/Users/macbookeden/Documents/Claude/Portfolio/`

**Ce que c'est :** Portfolio personnel statique, 2 pages :
- `/` — Accueil (header, hero, stats, projets, expérience, compétences, CTA, footer)
- `/projects/flowdiff-pro` — Détail projet avec 4 onglets (Overview, Tech, Features, Challenges)

**Stack :** Next.js 14 App Router · Tailwind CSS v3 · lucide-react · Inter (next/font) · JSX (pas TS)

**Dark mode permanent** : `<html className="dark">` — pas de toggle.

**Design system :**
- Fond : `slate-950` (#020617)
- Cartes : `slate-900` + bordures `slate-800`
- Texte : `white` / `slate-400`
- Accent : `bg-gradient-to-r from-blue-500 to-cyan-400`
- Responsive : mobile-first, breakpoints `md:` et `lg:`

**Documents de référence :**
- Spec : `docs/superpowers/specs/2026-05-06-portfolio-eden-design.md`
- Plan : `docs/superpowers/plans/2026-05-06-portfolio-eden.md`
- Suivi : `CONTEXT.md`
