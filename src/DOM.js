export default function updateCurrentWeather(data) {
    if (!data) return;

    const location = document.querySelector('#location-name');
    const currentTemperature = document.querySelector('#current-temperature span');
    const currentCondition = document.querySelector('#current-condition');

    const feelsLike = document.querySelector('#feels-like-info')
    const windSpeed = document.querySelector('#wind-speed-info')
    const precipitations = document.querySelector('#precipitations-info')
    const humidity = document.querySelector('#humidity-info')

    location.textContent = data.currentLocation;
    currentTemperature.textContent = data.currentTemperature;
    currentCondition.textContent = data.currentCondition;

    feelsLike.textContent = data.currentFeelsTemperature;
    windSpeed.textContent = data.currentWindSpeed;
    precipitations.textContent = data.currentPrecipitation;
    humidity.textContent = data.currentHumidity;
}