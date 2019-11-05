var unirest = require("unirest");

var req = unirest("GET", "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php");

req.query({
	"location": "Paris"
});

req.headers({
	"x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
	"x-rapidapi-key": "19084e3875mshda3c50a654e82c9p1ce1ddjsnf531d1700062"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});