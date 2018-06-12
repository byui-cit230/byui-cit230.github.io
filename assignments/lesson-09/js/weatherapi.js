let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47771';
weatherRequest.open('Get', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);    
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    document.getElementById('high-temp').innerHTML = weatherData.main.temp_max;
    document.getElementById('low-temp').innerHTML = weatherData.main.temp_min;
    document.getElementById('wind-speed').innerHTML = weatherData.wind.speed;
    document.getElementById('weather').innerHTML = weatherData.weather[0].description;
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weatherimage').src = imagesrc;

}