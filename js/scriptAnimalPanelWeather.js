function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div')
    const weatherInfoDiv = document.getElementById('weather-info')
    const hourlyForecastDiv = document.getElementById('hourly-forecast')

    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15)
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;

        const temperatureHTML = `
            <p> ${temperature}C</p>`;

        const weatherHTML = `
            <p>${cityName}</p>
            <p>${description}</p>`;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHTML;

    }
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        
        const apiKey = '18b0da0a0e51f9214b1e7e94be47d318';
        const currentWatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pl`;

        fetch(currentWatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data', error);
            alert('Error fetching current weather data. Please try again')
        })
        
        console.log("Twoja lokalizacja: " + latitude + ", " + longitude);
    });
} else {
    console.log("Twoja przeglądarka nie obsługuje Geolocation API.");
}