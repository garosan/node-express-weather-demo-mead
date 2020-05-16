const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=4330b3f55309f5702cc4a63573c5d7db&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      currentTemperature = body.current.temperature;
      feelsLikeTemperature = body.current.feelslike;
      callback(
        undefined,
        `It is currently ${currentTemperature} degrees but it feels like ${feelsLikeTemperature} degrees.`
      );
    }
  });
};

module.exports = forecast;
