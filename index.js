var express = require('express');
var hostname = 'localhost';
var port = 3000 ; 
const fetch = require('node-fetch');
 
var app = express();

var data ;

// source file is iso-8859-15 but it is converted to utf-8 automatically
fetch('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=France', {
    
        method: "GET",
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "NNMylDnsEhmshXgwnJKxRL7A75t4p1IEfvojsnPaM5k3D7gd6G",
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(json => data = json)
    .then(data => console.log("lol"));

app.get('/')

app.listen(port, hostname, function(){
    console.log("Le serveur tourne sur http://"+ hostname +":"+ port +"\n")
    console.log(data);
});