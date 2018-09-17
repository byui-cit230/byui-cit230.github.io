fetch('https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47771')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObj) {
        console.log(jsObj);
        document.getElementById('current-temp').innerHTML = jsObj.main.temp;
        let imagesrc = 'http://openweathermap.org/img/w/' + jsObj.weather[0].icon + '.png';
        document.getElementById('weatherimage').innerHTML = imagesrc;
    });