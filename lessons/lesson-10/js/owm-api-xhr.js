let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47771';
weatherRequest.open('Get', apiURL, true);
weatherRequest.send();


// note the weather array versus main (no array)

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);    
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weatherimage').innerHTML = imagesrc;
}