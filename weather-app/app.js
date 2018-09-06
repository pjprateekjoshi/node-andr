const request = require("request");

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBO7-7iiJAhph0kVbJ9wp4N95t1PBRVVUU",
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});
