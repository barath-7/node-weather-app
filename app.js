const getGeocode = require("./geoCode");
const getWeather = require("./weaterStack");
let address = process.argv[2];
if (!address) {
  console.log(
    'Enter a valid location in the command line argument. For Example << node app.js "London" >>'
  );
} else {
  getGeocode("California", (error, data) => {
    if (error) {
      return console.log(error);
    }

    getWeather(data.latitude, data.longitude, (error, weatherData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(weatherData);
    });
  });
}
