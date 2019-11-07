# Description du projet
Création d'une interface donnant la possibilité de visualiser la capitale d'un pays selon notre choix. 
En choisissant le pays, nous avons non seulement l'information sur sa capital, mais aussi la météo de cette dérnière et l'image.
# Source de données

API Pays/Villes: https://restcountries.eu/rest/v2/all 
utiliser la requette fetch afin de récuperer les pays sous forme de liste déroulante ainsi que les capitales corespondante  a chaque pays et la lié avec l'api meteo grace aux données des latitudes et la longitudes (données en communs entre l'API meteo et l'API Pays/Villes) 

API météo:https://api.darksky.net/forecast/8071de965194a0e896b16b413dab8b48
utisiler la requette fetch afin de recupere les informations dont on a besoin sur chaque capitale (la meteo, l'humidité, l'heure et la date actuelle ...)

lien drapeaux des pays: https://www.countryflags.io/
ce lien nous permets de recuperer les drapeaux de chaque pays grace aux codes pays, code permetant de fare la liaison entre le lien drapeaux et l'API Pays/Villes.

# Problèmes et difficultés
Adapter le CSS/Bootstrap en Node.js.
Travailler côté serveur sachant qu'on a plus l'habitude de travailler côté client.
Communication Client-Serveur/ Serveur-Client.
Croisement des API. 

# URL Heroku
