var requestURL = 'http://api.wunderground.com/api/42c3a4f03b6aa214/conditions/forecast/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function() {
  var franklinWeather = JSON.parse(request.responseText);
  document.getElementById('desc').innerHTML = franklinWeather.current_observation.weather;
  document.getElementById('temp').innerHTML = franklinWeather.current_observation.temp_f;
  document.getElementById('wind').innerHTML = franklinWeather.current_observation.wind_mph;
  document.getElementById('icon').src = franklinWeather.current_observation.icon_url;
  document.getElementById('forecast').innerHTML = franklinWeather.forecast.txt_forecast.forecastday[0].fcttext;
}