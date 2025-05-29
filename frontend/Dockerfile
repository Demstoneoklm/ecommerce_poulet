# Utilise une image Nginx officielle
FROM nginx:alpine

# Supprime la configuration par défaut de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copie notre fichier de configuration Nginx personnalisé
COPY nginx.conf /etc/nginx/conf.d/

# Copie les fichiers du frontend (home.html) dans le répertoire de service de Nginx
COPY . /usr/share/nginx/html

# Expose le port 80 pour le trafic web
EXPOSE 80

# Commande pour démarrer Nginx (par défaut pour cette image)
CMD ["nginx", "-g", "daemon off;"]