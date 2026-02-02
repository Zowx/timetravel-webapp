# TimeTravel Agency - Webapp Interactive

Webapp interactive pour une agence de voyage temporel fictive, creee avec IA generative dans le cadre du projet supervise IA M1/M2.

## Auteur

- **Enzo MORIN**

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

| Outil IA | Usage |
|----------|-------|
| **Claude Code (Opus 4.5)** | Generation du code complet de la webapp |
| **Groq API (Llama 3.1 8B)** | Chatbot conversationnel en temps reel |
| **Microsoft Copilot** | Generation des visuels destinations (Session 1) |

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

### Prompt 1 - Generation initiale de la webapp
```
Creer une webapp pour une agence de voyage temporel avec :
- Landing page elegante dark mode avec accents dores
- Hero section avec animations de particules
- 3 cartes de destinations (Paris 1889, Cretace, Florence 1504)
- Chatbot IA pour conseiller les clients
- Design premium et professionnel
```

### Prompt 2 - Personnalite du chatbot (system prompt)
```
Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton role : conseiller les clients sur les meilleures destinations temporelles.

Ton ton :
- Professionnel mais chaleureux
- Passionne d'histoire
- Toujours enthousiaste sans etre trop familier

Tu connais parfaitement :
- Paris 1889 (Belle Epoque, Tour Eiffel, 12 500€, 3-7 jours)
- Cretace -65M (dinosaures, 25 000€, 1-3 jours, securite maximale)
- Florence 1504 (Renaissance, Michel-Ange, 15 000€, 5-10 jours)
```

### Prompt 3 - Ajout des animations
```
Ajoute des animations subtiles et elegantes :
- Fade-in progressif des sections au scroll
- Animation du titre en hero (apparition progressive)
- Hover effects sur les cards de destinations
- Transition douce entre les pages
Style : animations fluides, duree 0.6-0.8s, easing natural
Utilise Framer Motion pour React.
```

### Prompt 4 - Quiz de recommandation
```
Cree un quiz interactif de 4 questions pour recommander une destination :
- Question 1 : Style de voyage prefere (aventure/culture/romantique)
- Question 2 : Rapport au danger (prudent/modere/aventurier)
- Question 3 : Interet principal (art/nature/histoire)
- Question 4 : Duree souhaitee (court/moyen/long)
Algorithme de scoring pour matcher avec Paris 1889, Cretace ou Florence 1504.
```

### Prompt 5 - Formulaire de reservation
```
Cree un formulaire de reservation complet avec :
- Selection destination (dropdown avec prix)
- Date picker pour date de depart
- Nombre de voyageurs (1-6)
- Coordonnees : nom, email, telephone
- Message optionnel
- Validation en temps reel
- Recapitulatif avec calcul du prix total (prix x voyageurs)
- Message de confirmation apres envoi
```

## Reflexion sur le processus

### Methode de travail
Le projet a ete realise en utilisant une approche "vibe coding" avec Claude Code (Opus 4.5) comme assistant principal. Cette methode permet de generer rapidement du code fonctionnel tout en gardant le controle sur l'architecture et les choix techniques.

### Points positifs de l'IA generative
- **Rapidite** : Generation de composants React complets en quelques minutes
- **Coherence** : Le code genere suit les bonnes pratiques (TypeScript strict, composants modulaires)
- **Iteration** : Possibilite d'affiner le design et les fonctionnalites par prompts successifs

### Defis rencontres
- **Contexte** : Necessaire de bien decrire le contexte pour obtenir des resultats pertinents
- **Integration assets** : Les images et videos de la Session 1 ont necessite une adaptation manuelle des chemins
- **API Chatbot** : Configuration de Groq avec fallback pour les environnements sans cle API

### Apprentissages
- L'IA est un excellent accelerateur mais ne remplace pas la comprehension du code
- Les prompts precis et structures donnent de meilleurs resultats
- La combinaison d'outils (Claude Code + Vercel) optimise le workflow

## Credits

- **Visuels destinations** : Generes en Session 1 (Microsoft Copilot)
- **Icones** : Lucide React
- **Framework** : Next.js by Vercel
- **IA Code** : Claude Opus 4.5 by Anthropic

## Licence

Projet pedagogique - M1/M2 Digital & IA

---

Fait avec ❤️ par Enzo MORIN
