# React Movie API

Ce projet est une application de films où les utilisateurs peuvent rechercher des films, les ajouter à leurs favoris, donner une note avec des étoiles et écrire des commentaires. Les films sont affichés par genre et les utilisateurs peuvent également voir les acteurs principaux de chaque film.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

- [Node.js](https://nodejs.org/en/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (gestionnaire de paquets pour Node.js)

## Installation

1. Clonez ce repository sur votre machine :
git clone https://github.com/votre-utilisateur/movie-app.git

Accédez au dossier du projet :
cd movie-app


Installez les dépendances avec npm :
npm install

Cette commande installera toutes les dépendances définies dans le fichier package.json.

Configurez l'API :

Le projet utilise l'API TMDB. Vous devez obtenir une clé API et la configurer.
Rendez-vous sur TMDB API et inscrivez-vous.
Créez une clé API et copiez-la.
Dans votre projet, créez un fichier .env à la racine du projet et ajoutez-y votre clé API :

VITE_TMDB_API_KEY=VOTRE_CLE_API_ICI

Lancez le serveur de développement en exécutant la commande suivante :
npm run dev

Ouvrez votre navigateur et allez à http://localhost:5173 pour voir l'application en action.

Si tout a été respecté, alors le projet doit pouvoir se lancer correctement !
