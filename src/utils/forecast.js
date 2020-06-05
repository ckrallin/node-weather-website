const request = require('request');

const forecast = (latitude,longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=a3153d132e9e8e7ff16fd67d41efa4d5&units=f&query=' + latitude + ',' + longitude
  request( {url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location',undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.")
    }
  });
}

module.exports = forecast