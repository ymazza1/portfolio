# Portfolio — Yoann Mazza

Site portfolio personnel construit avec React + Vite.

## Stack

- React 18 + Vite 5
- CSS Modules + variables CSS pour le theming dark/light
- Nginx (multi-stage Docker) pour la prod
- GitHub Actions pour le déploiement automatique sur GitHub Pages

## Démarrage local

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Docker (local)

```bash
# Build l'image
docker build -t portfolio .

# Lance le conteneur
docker run -p 8080:80 portfolio
# → http://localhost:8080
```

## Déploiement GitHub Pages

1. **Créer le repo GitHub** et pousser le code sur `main`
2. **Adapter le `base`** dans `vite.config.js` avec le nom exact de ton repo :
   ```js
   base: process.env.NODE_ENV === 'production' ? '/ton-repo/' : '/',
   ```
3. **Activer GitHub Pages** dans Settings → Pages → Source : `gh-pages` branch
4. Chaque push sur `main` déclenche le workflow `.github/workflows/deploy.yml`
   qui build et déploie automatiquement.

## Modifier le contenu

Toutes les données (expériences, compétences, formations, contact) sont centralisées dans :

```
src/data/portfolio.js
```

C'est la seule source de vérité — modifier ce fichier suffit pour mettre à jour tout le site.

## Structure

```
portfolio/
├── src/
│   ├── App.jsx
│   ├── data/
│   │   └── portfolio.js        ← données centralisées
│   ├── components/
│   │   ├── Nav.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── HextechOrnament.jsx
│   │   ├── Skills.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   ├── Education.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   └── Section.jsx / .module.css
│   ├── hooks/
│   │   └── useTheme.js
│   └── styles/
│       └── tokens.css          ← variables CSS (couleurs, fonts)
├── Dockerfile
├── nginx.conf
├── vite.config.js
└── .github/workflows/deploy.yml
```
