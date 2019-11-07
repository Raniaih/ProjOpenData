var express = require('express');
var hostname = 'localhost';
var port = 3000 ; 
const fetch = require('node-fetch');
var path = require('path');
var jsonToCsv = require('convert-json-to-csv');
 
var app = express();


function fetchCountryJson(location = 'Tunisia'){
    
    return fetch('https://restcountries.eu/rest/v2/name/'+location+'?fullText=true'    , {
        
            method: "GET",
            headers: {
                "fbclid": "IwAR31ioi18aNteQ_PMek9Zg6Z2K_YJpaa_vE05nrJKVszR1I00iKcVh4GhVU",
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => data[0]);

        

};
 


function fetchWeatherJson(latlng){

    lat = latlng[0];
    lon = latlng[1];

    console.log(lat, lon);

    var weather = {
        api_key : '8071de965194a0e896b16b413dab8b48',
    };

   

    return fetch('https://api.darksky.net/forecast/'+weather.api_key+'/'+lat+','+lon, {

            method : "GET",
            headers: {
                'Content-Type' : 'application/json'
            },
    })
        .then(res => res.json())
        .then(data => {return data});

};


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/accueil.html'))
});

function fetchListePays(){
    var url=  'https://restcountries.eu/rest/v2/all';
    return fetch(url, {

        method : "GET",
        headers: {
            'Content-Type' : 'application/json'
        },
    }).then(res => res.json())

}

//fetchCountryJson('Algeria').then(data => fetchWeatherJson(data.latlng).then(data => console.log(data)));


//fetchWeatherJson([28,3]).then(data => console.log(data));

app.get('/villes', function(req,res) {
    fetchListePays().then(data => res.send(data))
					.then(data=> console.log(data));

}); 

app.get('/villes/:ville', function(req, res){

    fetchCountryJson(req.params.ville).then(data => fetchWeatherJson(data.latlng).then(data => res.send(data)   )
																				.then(data=> console.log(data))) ;
}) ;


app.listen(port, hostname, function(){
    console.log("Le serveur tourne sur http://"+ hostname +":"+ port +"\n")
});