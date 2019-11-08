# Description du projet

Le but du projet est de concevoir une API qui résulte d'un mashup entre deux API tierces. Cette API doit retourner une réponse dans un temps acceptable et doit pouvoir retourne la réponse sous deux formats différents.
Nous avons concu une API qui, avec le nom d'un pays en paramètre, récupère les coordonnées gps de sa capitale dans une première API dans le but de les croiser avec la seconde API et d'obtenir la météo.

Coté client: Création d'une interface donnant la possibilité de visualiser la capitale d'un pays selon notre choix. 
En choisissant le pays, nous avons non seulement l'information sur sa capital, mais aussi la météo de cette dérnière et l'image.

# Source de données

API Pays/Villes: https://restcountries.eu/rest/v2/all 
utiliser la requette fetch afin de récuperer les pays sous forme de liste déroulante ainsi que les capitales corespondante  a chaque pays et la lié avec l'api meteo grace aux données des latitudes et la longitudes (données en communs entre l'API meteo et l'API Pays/Villes) 

API météo:https://api.darksky.net/forecast/8071de965194a0e896b16b413dab8b48
utisiler la requette fetch afin de recupere les informations dont on a besoin sur chaque capitale (la meteo, l'humidité, l'heure et la date actuelle ...)

lien drapeaux des pays: https://www.countryflags.io/
ce lien nous permets de recuperer les drapeaux de chaque pays grace aux codes pays, code permetant de fare la liaison entre le lien drapeaux et l'API Pays/Villes.

# Problèmes et difficultés
Communication Client-Serveur/ Serveur-Client.
Imaginer tous les cas d'utilisations clients.
Convertion des résultats en XML. 
Travailler côté serveur sachant qu'on a plus l'habitude de travailler côté client.
Configurer Node.js pour afficher les fichiers statiques. 


# URL Heroku
weatherworldavailable.herokuapp.com
