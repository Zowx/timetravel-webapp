# TimeTravel Agency - Webapp Interactive

Webapp interactive pour une agence de voyage temporel fictive, creee avec IA generative dans le cadre du projet supervise IA M1/M2.

## Equipe

- [Nom 1]
- [Nom 2]
- [Nom 3]
- [Nom 4]

## Demo

🌐 **URL du site** : [timetravel-webapp.vercel.app](https://timetravel-webapp.vercel.app)

## Stack Technique

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icones** : Lucide React
- **Hebergement** : Vercel

## Features

### Landing Page
- Hero section avec animations de particules
- Design dark mode elegant avec accents dores
- Navigation responsive (desktop + mobile)
- Animations au scroll

### Galerie des Destinations
- 3 cartes interactives :
  - **Paris 1889** - La Belle Epoque, Tour Eiffel
  - **Cretace -65M** - Dinosaures, nature prehistorique
  - **Florence 1504** - Renaissance, Michel-Ange
- Effets hover et transitions fluides
- Informations detaillees par destination

### Agent Conversationnel (Chatbot)
- Widget flottant en bas a droite
- Reponses contextuelles sur les destinations
- FAQ automatisee (prix, securite, reservations)
- Interface de chat moderne avec animations

### Quiz de Recommandation
- 4 questions pour determiner la destination ideale
- Algorithme de scoring personnalise
- Resultat avec recommandation detaillee

### Formulaire de Reservation
- Selection destination + date + nombre de voyageurs
- Validation des champs en temps reel
- Recapitulatif avec calcul du prix total
- Confirmation de demande de devis

### Section A Propos
- Presentation de l'agence
- Statistiques cles
- Features et avantages

## IA Utilisees

| Outil | Usage |
|-------|-------|
| Claude Code (Opus 4.5) | Generation du code complet |
| Next.js | Framework React |
| Framer Motion | Animations |
| Tailwind CSS | Styling |

## Installation locale

```bash
# Cloner le repository
git clone https://github.com/Zowx/timetravel-webapp.git

# Aller dans le dossier
cd timetravel-webapp

# Installer les dependances
npm install

# Lancer en mode developpement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Deploiement

Le site est deploye automatiquement sur Vercel.

Pour deployer manuellement :

```bash
# Build de production
npm run build

# Lancer en production
npm start
```

## Structure du projet

```
timetravel-webapp/
├── src/
│   ├── app/
│   │   ├── globals.css    # Styles globaux
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Page d'accueil
│   └── components/
│       ├── Header.tsx     # Navigation
│       ├── Hero.tsx       # Section hero
│       ├── Destinations.tsx # Cartes destinations
│       ├── About.tsx      # Section a propos
│       ├── Footer.tsx     # Pied de page
│       └── Chatbot.tsx    # Agent conversationnel
├── public/
│   └── images/            # Assets visuels
├── package.json
└── README.md
```

## Prompts utilises

### Prompt principal pour la generation
```
Creer une webapp pour une agence de voyage temporel avec :
- Landing page elegante dark mode avec accents dores
- Hero section avec animations de particules
- 3 cartes de destinations (Paris 1889, Cretace, Florence 1504)
- Chatbot IA pour conseiller les clients
- Design premium et professionnel
```

### Prompt pour le chatbot
```
Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton role : conseiller les clients sur les meilleures destinations temporelles.
Tu connais parfaitement : Paris 1889, Cretace -65M, Florence 1504
```

## Credits

- **Visuels destinations** : Generes en Session 1 (Microsoft Copilot)
- **Icones** : Lucide React
- **Framework** : Next.js by Vercel
- **IA Code** : Claude Opus 4.5 by Anthropic

## Licence

Projet pedagogique - M1/M2 Digital & IA

---

Fait avec ❤️ par l'equipe TimeTravel
