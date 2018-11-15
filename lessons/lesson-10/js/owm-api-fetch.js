fetch('https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47771')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
        
        console.log(jsObject);

        document.getElementById('current-temp').innerHTML = jsObject.main.temp;
        document.getElementById('rain').innerHTML = jsObject.rain;
        
        let imagesrc = 'http://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        let desc = jsObject.weather[0].description;
        document.getElementById('weatherimage').innerHTML = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });