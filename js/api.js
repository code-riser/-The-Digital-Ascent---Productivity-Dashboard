function fetchWeather() {
    let city = document.getElementById('cityInput').value.trim();
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather').innerHTML = `
                <h4>${data.name}, ${data.sys.country}</h4>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(() => {
            document.getElementById('weather').innerHTML = '<p>Weather information not available.</p>';
        });
}

function fetchQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerText = `"${data.content}" - ${data.author}`;
        });
}
