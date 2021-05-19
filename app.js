const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = "karachi"; //  process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}

return;
// fffffffff;
// const request = require("request");

// let url =
//   "http://api.weatherstack.com/current?access_key=e9ce74ed15d252ee3f033fc494a99da4&query=37.8267,122.4233";

// request({ url, json: true }, (error, response) => {
//   console.log(response.body.current);
//   let { temperature, feelslike } = response.body.current;
//   console.log("feelslike: ", feelslike);
//   console.log("temperature: ", temperature);
// });
// let address = "karachi";
// const url2 =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//   encodeURIComponent(address) +
//   ".json?access_token=pk.eyJ1Ijoib3dhaXM4OTciLCJhIjoiY2tvdmx5aTYwMDlrdzJwcGVwODR6bnQycyJ9.CyYrjwCVfmVpdYj8Nv73ow";

// request({ url: url2, json: true }, (error, response) => {
//   console.log(response.body.current);
//   let { temperature, feelslike } = response.body.current;
//   console.log("feelslike: ", feelslike);
//   console.log("temperature: ", temperature);
// });
