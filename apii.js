

var unirest = require("unirest");

var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/find");

req.query({
	"q": "london",
	"cnt": "0",
	"mode": "null",
	"lon": "0",
	"type": "link, accurate",
	"lat": "0",
	"units": "imperial, metric"
});

req.headers({
	"x-rapidapi-key": "2e851eebf9msh67239e15b863610p10f093jsnb79a3c029344",
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});