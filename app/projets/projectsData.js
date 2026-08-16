export const projects = [
  {
    slug: 'maison-buna',
    category: 'GEN-AI OPS',
    num: '01',
    title: 'Landing page demande de devis (envoi devis automatique)',
    description:
      "Maison Buna, une entreprise qui vend du café, avait besoin d'une landing page où les clients pouvaient effectuer des demandes de devis avec un envoi automatique des devis au format PDF par mail.",
    tags: ['CLAUDE CODE', 'OPENAI', 'PRO'],
    demoHref: null,
    meta: {
      contexte: 'Scale-up SaaS',
      usage: 'Site vitrine avec formulaire de devis',
      role: 'Product Owner / AI Product Builder',
      resultat: 'Outil livré',
    },
    contexte:
      "Maison Buna, une entreprise qui vend du café, recevait ses demandes de devis par email : un échange manuel chronophage, sans traçabilité ni délai de réponse garanti.",
    objectif:
      "Permettre aux clients de soumettre une demande de devis en quelques clics et recevoir automatiquement un devis structuré au format PDF par mail, sans intervention manuelle.",
    solution:
      "Landing page avec formulaire de demande de devis, génération automatique du PDF et envoi par mail, orchestrés avec Claude Code et l'API OpenAI.",
    resultatConcret: null,
    images: [null, null, null],
    isDraft: true,
  },
  {
    slug: 'storyforge-ai',
    category: 'PRODUCT OWNERSHIP',
    num: '02',
    title: "StoryForge AI : générateur de user stories contextualisé par IA",
    description:
      "J'écris le besoin métier, l'outil génère instantanément la user story structurée : critères d'acceptation, scénarios Gherkin (happy path et cas limites), estimation de complexité. Un pipeline RAG permet d'enrichir la génération avec la documentation d'un client, pour que les stories reprennent son vocabulaire et ses règles métier plutôt que des généralités.",
    tags: ['REACT', 'VITE', 'STYLED-COMPONENTS', 'CLAUDE API (SONNET)', 'OPENAI EMBEDDINGS', 'PINECONE'],
    demoHref: '#',
    meta: {
      contexte: 'Projet personnel',
      usage: 'Quotidien de PO',
      role: 'Product Owner / AI Product Builder',
      resultat: 'En production',
    },
    contexte:
      'Rédiger des user stories exploitables à partir d\'un brief métier est chronophage et répétitif dans le quotidien d\'un Product Owner.',
    objectif:
      "Générer des user stories structurées, critères d'acceptation, scénarios Gherkin, estimation de complexité, en s'appuyant sur le vocabulaire et les règles métier réels d'un client.",
    solution:
      "Génération en streaming via l'API Claude, enrichie par un pipeline RAG (OpenAI embeddings + Pinecone) indexant la base documentaire du client.",
    resultatConcret: null,
    images: [null, null, null, null, null],
    isDraft: false,
  },
  {
    slug: 'support-rag',
    category: 'LLM INTEGRATION',
    num: '03',
    title: 'Assistant Support Client RAG',
    description:
      "Implémentation d'une base de connaissance vectorielle pour automatiser 60% des tickets de support niveau 1.",
    tags: ['PINECONE', 'LANGCHAIN', 'PYTHON'],
    demoHref: null,
    meta: {
      contexte: 'E-commerce',
      usage: 'Assistant support intégré au canal client',
      role: 'Product Owner / AI Product Builder',
      resultat: '-30% OpEx',
    },
    contexte:
      'Le support client de niveau 1 traitait un volume important de tickets répétitifs, avec une charge d\'équipe et un délai de réponse élevés.',
    objectif:
      "Réduire la charge du support niveau 1 en automatisant les réponses aux questions les plus fréquentes, sans dégrader la qualité perçue par le client.",
    solution:
      "Base de connaissance vectorielle (embeddings + recherche sémantique via Pinecone) orchestrée avec LangChain pour générer des réponses contextualisées, automatisant 60% des tickets de niveau 1.",
    resultatConcret: null,
    images: [null, null, null],
    isDraft: true,
  },
  {
    slug: 'automatisation-make',
    category: 'AUTOMATISATION',
    num: '04',
    title: 'Automatisation du suivi de recette (Make)',
    description:
      "Pendant le pilotage de la recette fonctionnelle sur la refactorisation e-commerce chez Amalivre, chaque bug identifié était consigné dans un Google Sheet avec un statut (OK/KO). La création manuelle d'une carte Trello par bug, puis le suivi du lien retour, représentait une perte de temps répétitive à chaque cycle de test.",
    tags: ['GOOGLE SHEETS', 'MAKE', 'TRELLO'],
    demoHref: null,
    meta: {
      contexte: 'Mission chez Amalivre',
      usage: 'Recette fonctionnelle',
      role: 'Product Owner',
      resultat: 'Déployé',
    },
    contexte:
      "Chaque bug de recette était consigné dans un Google Sheet (statut OK/KO), puis reporté manuellement sur une carte Trello à chaque cycle de test — une double saisie répétitive et source d'oublis.",
    objectif:
      "Supprimer la création manuelle des cartes Trello et garantir une traçabilité complète entre le fichier de suivi et les cartes créées, sans risque de doublon.",
    solution:
      'Un workflow Make surveille en continu le Google Sheet, filtre les lignes "KO" non traitées, crée une carte Trello formatée (titre, comportement attendu/observé, labels, assignation), puis renvoie le lien de la carte dans le fichier source.',
    resultatConcret:
      "Suppression de la double saisie manuelle (Sheet puis Trello), traçabilité garantie entre le fichier de suivi et les cartes créées, sans risque de doublon grâce au filtrage sur trois critères combinés.",
    images: [
      '/images/projects/make-shot-1.png',
      '/images/projects/make-shot-2.webp',
      '/images/projects/make-shot-3.webp',
      '/images/projects/make-shot-4.webp',
      '/images/projects/make-shot-5.webp',
    ],
    isDraft: false,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
