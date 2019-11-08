var express = require('express');
var hostname = 'localhost';
var port = process.env.PORT || 80
const fetch = require('node-fetch');
const path = require('path');
var convert = require('xml-js');
var app = express();
var fs= require('fs');


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
 
fetchCountryJson();

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
        .then(res => res.json());

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

app.use(function(req, res, next) {
    var options = {compact: true, ignoreComment: true, spaces: 4};
    res.sendData = function(obj) {
      if (req.accepts('json') || req.accepts('text/html')) {
        res.header('Content-Type', 'application/json');
        res.send(obj);
      } else if (req.accepts('text/xml')) {
        res.header('Content-Type', 'text/xml');
        res.type('application/xml');
        var res_xml = convert.json2xml( obj, options);
        console.log(res_xml);
        res.send(res_xml);
      } else {
        res.sendStatus(406);
      }
    };
    next();
});
//fetchCountryJson('Algeria').then(data => fetchWeatherJson(data.latlng).then(data => console.log(data)));
app.use(express.static('assets'));

/*//fetchWeatherJson([28,3]).then(data => console.log(data));
app.get('/assets/css/main.css', function(req,res) {
    fs.readFile('assets/css/main.css', function(err, css) {
    if(err){throw err;}
    res.writeHead(200, {'Content-Type': 'text/css'})
            res.write(css)
            res.end()
    })
});*/

app.get('/villes', function(req,res) {
    fetchListePays().then(data => res.send(data))
					.then(data=> console.log(data));

}); 

app.get('/villes/:ville', function(req, res){
    
    fetchCountryJson(req.params.ville).then(data => fetchWeatherJson(data.latlng).then(data => res.sendData(data))) ;
}) ;


app.listen(port, hostname, function(){
    console.log("Le serveur tourne sur http://"+ hostname +":"+ port +"\n")
});

