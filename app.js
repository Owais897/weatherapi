const request = require("request");

let url =
  "http://api.weatherstack.com/current?access_key=e9ce74ed15d252ee3f033fc494a99da4&query=37.8267,122.4233";

request({ url, json: true }, (error, response) => {
  console.log(response.body.current);
  let { temperature, feelslike } = response.body.current;
  console.log("feelslike: ", feelslike);
  console.log("temperature: ", temperature);
});
let address = "karachi";
const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
  encodeURIComponent(address) +
  ".json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1";

request({ url: url2, json: true }, (error, response) => {
  console.log(response.body.current);
  let { temperature, feelslike } = response.body.current;
  console.log("feelslike: ", feelslike);
  console.log("temperature: ", temperature);
});
