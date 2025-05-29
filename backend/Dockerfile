# Utilise une image Node.js officielle comme base
FROM node:22-alpine

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie package.json et package-lock.json pour installer les dépendances en premier
# C'est optimisé pour les couches Docker (le cache ne sera invalidé que si ces fichiers changent)
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie le reste du code de l'application
COPY . .

# Expose le port sur lequel l'application Express écoute
EXPOSE 5000

# Commande pour démarrer l'application
CMD ["npm", "start"]