import { link } from "fs";

export const LANGUES = ["fr", "en"] as const;
export type Langue = (typeof LANGUES)[number];

export const dico = {
  fr: {
    nav: { accueil: "Profil", projets: "Projets", contact: "Contact" },
    autreLangue: "English",
    hero: {
      titre: "Développeur full-stack, du code jusqu'au serveur qui le fait tourner.",
      chapo:
        "Milan, 22 ans, alternant à la direction des systèmes d'information du réseau LE MET' à Metz. Je conçois des applications métier, je les mets en production, je les maintiens. Et je prends des projets de sites web à côté.",
      cta: "Me contacter",
      ctaSecondaire: "Voir mes projets",
    },
    faits: [
      { cle: "Basé à", valeur: "Metz, ouvert au Luxembourg" },
      { cle: "En poste", valeur: "Alternance au réseau LE MET' depuis 2025" },
      { cle: "En cours", valeur: "Titre RNCP de niveau 6 - Concepteur Développeur d'Applications", lien: "https://www.francecompetences.fr/recherche/rncp/37873/"},
    ],
    competencesTitre: "Ce que je sais faire",
    arrets: [
      {
        titre: "Développement web",
        texte: "Applications métier de bout en bout, en TypeScript et React notemment.",
      },
      {
        titre: "Back-end & données",
        texte: "API, bases relationnelles, recherche sémantique, etc.",
      },
      {
        titre: "Systèmes",
        texte: "Serveurs Linux, conteneurs, mise en production et supervision.",
      },
      {
        titre: "Électronique",
        texte: "Microcontrôleurs, capteurs, et le logiciel qui va avec.",
      },
      {
        titre: "Votre projet",
        texte: "Site vitrine, outil interne, reprise d'un existant.",
        terminus: true,
      },
    ],
    technologiesTitre: "Les outils du quotidien",
      technologies: [
        { famille: "Front", ton: "front", outils: ["TypeScript", "React", "Next.js", "Tailwind", "HTML / CSS"] },
        { famille: "Back & données", ton: "back", outils: ["Python", "PHP", "SQL / MariaDB", "Qdrant", "Microsoft Fabric"] },
        { famille: "Systèmes & déploiement", ton: "sys", outils: ["Linux", "Proxmox / LXC", "GitHub Actions", "Vercel"] },
        { famille: "Électronique", ton: "elec", outils: ["Arduino", "C++", "MicroPython"] },
      ],
    parcoursTitre: "Parcours",
    parcoursChapo:
      "J'ai commencé par des études de santé avant de basculer vers l'informatique. Je ne le regrette pas une seconde.",
    formationTitre: "Études",
    formation: [
      {
        date: "2023 – 2028",
        titre: "ÉSTIAM, 3ème année",
        lieu: "École supérieure des technologies de l'information",
        texte:
          "Cursus informatique, en préparation du titre de Concepteur Développeur d'Applications.",
        actuel: true,
      },
      {
        date: "2022 – 2023",
        titre: "Sciences pharmaceutiques",
        lieu: "Université libre de Bruxelles",
        texte: "Formation générale en sciences pharmaceutiques.",
      },
      {
        date: "2021 – 2022",
        titre: "Licence accès santé",
        lieu: "Université de Reims Champagne-Ardenne",
        texte: "Option droit, entre médecine et juridique.",
      },
    ],
    experiencesTitre: "Expériences",
    experiences: [
      {
        date: "Depuis octobre 2025",
        titre: "Alternant développeur full-stack",
        lieu: "LE MET' — Metz",
        texte:
          "Développement et exploitation des applications internes de la DSI, en parallèle de l'école.",
        actuel: true,
      },
      {
        date: "Février – juillet 2025",
        titre: "Stagiaire développement et microcontrôleurs",
        lieu: "FabLab MDesign — Maizières-lès-Metz",
        texte:
          "Électronique et site web local du projet BeeAthlon, partie Android du projet Vélo Mobile.",
      },
      {
        date: "Décembre 2023 – juillet 2024",
        titre: "Stagiaire développement d'application",
        lieu: "GIP-FTLV de Nancy-Metz",
        texte:
          "Maintenance d'un site de gestion de parc informatique en PHP, reprise d'un site vitrine, supports vidéo pour des ateliers.",
      },
    ],
    projetsTitre: "Projets",
    projetsChapo:
      "Des applications en production utilisées tous les jours par des équipes, ou des projets personnels. Le code des projets d'entreprise n'est pas public : je décris ici ce que j'ai fait, et comment.",
    labels: {
      role: "Mon rôle",
      stack: "Technologies",
      voirSite: "Voir le site",
      prive: "Projet interne — code non public.",
    },
    projets: [
      {
        nom: "Assistant documentaire RAG interne",
        visuel: "chatbot-rag.png",
        contexte: "DSI LE MET' · 2026",
        resume:
          "Un chatbot qui répond aux questions des équipes à partir de la documentation interne, hébergé entièrement sur les serveurs de l'entreprise : aucune donnée ne sort du réseau.",
        role: [
          "Chaîne de recherche complète : ingestion des documents, découpage sémantique, indexation vectorielle",
          "Travail sur la pertinence des réponses : reformulation des questions, double rappel, réordonnancement des résultats",
          "Interface de chat avec réponses en flux et authentification d'entreprise",
          "Exploitation des serveurs GPU et mise en production",
        ],
        stack: ["Python", "FastAPI", "Ollama", "Qdrant", "Next.js", "Proxmox", "Fabric"],
        prive: true,
      },
      {
        nom: "Gestion du parc informatique",
        visuel: "tools-lemet.png",
        contexte: "DSI LE MET' · 2025 – 2026",
        resume:
          "L'application utilisée par la DSI pour suivre les remises et reprises de matériel auprès des agents, branchée sur l'inventaire existant.",
        role: [
          "Formulaires métier et validation côté serveur",
          "Intégration de l'API de l'outil d'inventaire GLPI et fiabilisation de la connexion",
          "Déploiement et exploitation en production : conteneur Linux, service géré, journaux",
        ],
        stack: ["Next.js", "TypeScript", "MariaDB", "API GLPI"],
        prive: true,
      },
      {
        nom: "Dessine-moi un mouton",
        visuel: "dessine-moi-un-mouton.png",
        contexte: "Projet client · 2026",
        resume: "Site réalisé pour une illustratrice (ma copine 🤓), avec portfolio FALC, galerie d'illustrations et formulaire de contact.",
        role: [
          "Conception et réalisation du site selon les besoins du client",
          "Adaptation du site pour le rendre accessible et conforme au FALC (Facile À Lire et à Comprendre)",
          "Mise en ligne et suivi du site",
        ],
        stack: ["HTML", "CSS", "JavaScript", "PHP"],
        lien: "https://example.com",
      },
      {
        nom: "BeeAthlon",
        visuel: "beeathlon.jpg",
        contexte: "FabLab MDesign · 2025",
        resume:
          "Dispositif de mesure pour un projet de biathlon laser sur le thème de l'écologie : la partie électronique et l'interface web locale qui affiche les relevés.",
        role: [
          "Montage et programmation de la partie électronique",
          "Site web local de visualisation des mesures",
          "Mise en ligne d'un dépôt GitHub de backup pour expliquer comment utiliser et modifier les dispositifs"
        ],
        stack: ["Arduino", "C++", "MicroPython", "JavaScript"],
        lien: "https://github.com/nakzskea/BeeAthlonBackup",
        lienLabel: "Voir le dépôt",
      },
    ],
    contactTitre: "On en parle ?",
    contactChapo:
      "Un site à créer, un outil interne à développer, un poste à pourvoir : écrivez-moi, je réponds sous 48 heures.",
    contactLabels: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    contactLiens: { linkedin: "Mon profil", github: "Mes dépôts" },
    contactPied: "Basé à Metz, disponible à distance et ouvert aux opportunités au Luxembourg.",
  },

  en: {
    nav: { accueil: "About", projets: "Projects", contact: "Contact" },
    autreLangue: "Français",
    hero: {
      titre: "Full-stack developer, from the code to the server it runs on.",
      chapo:
        "Milan, 22, apprentice developer in the IT department of LE MET', the public transport network of Metz, France. I build internal applications, ship them to production and keep them running. I also take on web projects on the side.",
      cta: "Get in touch",
      ctaSecondaire: "See my projects",
    },
    faits: [
      { cle: "Based in", valeur: "Metz, open to Luxembourg" },
      { cle: "Currently", valeur: "Apprentice at LE MET' since 2025" },
      { cle: "Studying", valeur: "RNCP 6 - Application designer & developer degree", lien: "https://www.francecompetences.fr/recherche/rncp/37873/"},
    ],
    competencesTitre: "What I can do",
    arrets: [
      {
        titre: "Web development",
        texte: "Complete business applications, in TypeScript, React and other stacks.",
      },
      {
        titre: "Back-end & data",
        texte: "APIs, relational databases, semantic search, etc.",
      },
      {
        titre: "Systems",
        texte: "Linux servers, containers, deployment and monitoring.",
      },
      {
        titre: "Electronics",
        texte: "Microcontrollers, sensors, and the software that goes with them.",
      },
      {
        titre: "Your project",
        texte: "Showcase site, internal tool, taking over an existing one.",
        terminus: true,
      },
    ],
    technologiesTitre: "Everyday tools",
      technologies: [
        { famille: "Front", ton: "front", outils: ["TypeScript", "React", "Next.js", "Tailwind", "HTML / CSS"] },
        { famille: "Back & data", ton: "back", outils: ["Python", "PHP", "SQL / MariaDB", "Qdrant", "Microsoft Fabric"] },
        { famille: "Systems & deployment", ton: "sys", outils: ["Linux", "Proxmox / LXC", "GitHub Actions", "Vercel"] },
        { famille: "Electronics", ton: "elec", outils: ["Arduino", "C++", "MicroPython"] },
      ],
    parcoursTitre: "Background",
    parcoursChapo:
      "I started out in health studies before switching to computing. Not a decision I regret.",
    formationTitre: "Studies",
    formation: [
      {
        date: "2023 – 2028",
        titre: "ÉSTIAM, 3rd year",
        lieu: "Graduate school of information technology",
        texte:
          "Computer science programme, working towards the application developer degree.",
        actuel: true,
      },
      {
        date: "2022 – 2023",
        titre: "Pharmaceutical sciences",
        lieu: "Université libre de Bruxelles",
        texte: "General degree in pharmaceutical sciences.",
      },
      {
        date: "2021 – 2022",
        titre: "Health sciences degree",
        lieu: "University of Reims Champagne-Ardenne",
        texte: "With a law option, between medicine and legal studies.",
      },
    ],
    experiencesTitre: "Experience",
    experiences: [
      {
        date: "Since October 2025",
        titre: "Full-stack developer (apprenticeship)",
        lieu: "LE MET' — Metz",
        texte:
          "Building and running the IT department's internal applications alongside my degree.",
        actuel: true,
      },
      {
        date: "February – July 2025",
        titre: "Development & microcontrollers intern",
        lieu: "FabLab MDesign — Maizières-lès-Metz",
        texte:
          "Electronics and local web interface for the BeeAthlon project, Android side of the Vélo Mobile project.",
      },
      {
        date: "December 2023 – July 2024",
        titre: "Application development intern",
        lieu: "GIP-FTLV de Nancy-Metz",
        texte:
          "Maintaining a PHP IT asset management site, taking over a showcase website, video material for workshops.",
      },
    ],
    projetsTitre: "Projects",
    projetsChapo:
      "Applications in production used every day by real teams, or personnal projects. The source of company projects is not public, so here is what I did and how.",
    labels: {
      role: "My part",
      stack: "Technologies",
      voirSite: "Visit the site",
      prive: "Internal project — private source.",
    },
    projets: [
      {
        nom: "Internal RAG documentation assistant",
        visuel: "chatbot-rag.png",
        contexte: "LE MET' IT · 2026",
        resume:
          "A chatbot answering staff questions from internal documentation, hosted entirely on company servers: no data leaves the network.",
        role: [
          "Full retrieval pipeline: document ingestion, semantic chunking, vector indexing",
          "Answer relevance work: query rewriting, dual recall, result reranking",
          "Chat interface with streamed answers and enterprise authentication",
          "GPU server operations and production rollout",
        ],
        stack: ["Python", "FastAPI", "Ollama", "Qdrant", "Next.js", "Proxmox", "Fabric"],
        prive: true,
      },
      {
        nom: "IT asset management",
        visuel: "tools-lemet.png",
        contexte: "LE MET' IT · 2025 – 2026",
        resume:
          "The application the IT department uses to track equipment handed to and returned by staff, wired into the existing inventory.",
        role: [
          "Business forms and server-side validation",
          "Integration with the GLPI inventory API and hardening of the connection",
          "Deployment and production operations: Linux container, managed service, logs",
        ],
        stack: ["Next.js", "TypeScript", "MariaDB", "GLPI API"],
        prive: true,
      },
      {
        nom: "Dessine-moi un mouton",
        visuel: "dessine-moi-un-mouton.png",
        contexte: "Client project · 2026",
        resume: "Website made for an illustrator (my girlfriend 🤓), with a FALC portfolio, illustrations gallery and contact form.",
        role: [
          "Design and development of the website according to client requirements",
          "Website adaptation for accessibility and Easy Read (FALC) compliance",
          "Deployment and ongoing maintenance of the website",
        ],
        stack: ["HTML", "CSS", "JavaScript", "PHP"],
        lien: "https://example.com",
      },
      {
        nom: "BeeAthlon",
        visuel: "beeathlon.jpg",
        contexte: "FabLab MDesign · 2025",
        resume:
          "An ecological-themed laser biathlon project: the electronics and the local web interface showing the readings.",
        role: [
          "Assembling and programming the electronics",
          "Local web interface for visualising measurements",
          "Publishing a public GitHub backup repository to explain how to use and edit the devices"
        ],
        stack: ["Arduino", "C++", "MicroPython", "JavaScript"],
        lien: "https://github.com/BeeAthlonBackup",
        lienLabel: "Check the repository",
      },
    ],
    contactTitre: "Let's talk",
    contactChapo:
      "A site to build, an internal tool to develop, a role to fill: drop me a line, I answer within 48 hours.",
    contactLabels: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    contactLiens: { linkedin: "My profile", github: "My repositories" },
    contactPied: "Based in Metz, available remotely and open to opportunities in Luxembourg.",
  },
} as const;
