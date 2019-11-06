var express = require('express');
var hostname = 'localhost';
var port = 3000 ; 
const fetch = require('node-fetch');
 
var app = express();


/* const getTodosAsync = async function () {
    const response = await fetch('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Paris', {
        
        method: "GET",
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "NNMylDnsEhmshXgwnJKxRL7A75t4p1IEfvojsnPaM5k3D7gd6G",
            'Content-Type': 'application/json'
        },
    });
    const jsonData = await response.json().then(data => {return data});
    return  jsonData;
} */
/* async function apiGetAll () {
        var location = 'Paris';
    // here we tell the engine to PAUSE EXECUTION and wait for a response
    // once it has a reponse, assign it to the variable 'resp' and continue
         const resp = await fetch('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location='+location, {
        
            method: "GET",
            headers: {
                "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
                "x-rapidapi-key": "NNMylDnsEhmshXgwnJKxRL7A75t4p1IEfvojsnPaM5k3D7gd6G",
                'Content-Type': 'application/json'
            },
        }).then(res => res.json());

        const data = await resp;
        

    // this code will NOT run until 'resp' has been assigned
    // and then the program will PAUSE until it gets a reponse
        return data ;
   }  */
function fetchDevruJson(location = 'Paris'){
    
    return fetch('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location='+location, {
        
            method: "GET",
            headers: {
                "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
                "x-rapidapi-key": "NNMylDnsEhmshXgwnJKxRL7A75t4p1IEfvojsnPaM5k3D7gd6G",
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(json => data = json['Results']);

        

}

function fetchWeatherJson(data){

    lat = data.lat;
    lon = data.lon;
    console.log('zksdfjhksjdhfkjsdhfkjshdfs', data, lat, lon)
    var weather = {
        api_key : '8071de965194a0e896b16b413dab8b48',
    };

   

    fetch('https://api.darksky.net/forecast/'+weather.api_key+'/'+lat+','+lon, {

            method : "GET",
            headers: {
                'Content-Type' : 'application/json'
            },
    })
        .then(res => res.json())
        .then(data => console.log(data));

}

//fetchDevruJson('Alger').then(data => fetchWeatherJson(data))

fetchDevruJson('Alger').then(data => console.log(data))

//fetchWeatherJson(fetchDevruJson().then(data => {return data})).then(data => console.log(data));

//fetchDevruJson().then(data => console.log(data));

//data2 = fetchDevruJson(location= 'Paris');
//console.log(getTodosAsync)       

//data2= apiGetAll()


//const data1 = await getTodosAsync();

//console.log(data1);

app.listen(port, hostname, function(){
    console.log("Le serveur tourne sur http://"+ hostname +":"+ port +"\n")
});