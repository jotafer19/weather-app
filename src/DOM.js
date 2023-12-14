function updateCurrentWeather(data) {
    const location = document.querySelector('#city');
    const country = document.querySelector('#country');
    const currentTemperature = document.querySelector('#current-temperature span');
    const currentConditionIcon = document.querySelector('#current-condition-icon');
    const currentCondition = document.querySelector('#current-condition');

    const feelsLike = document.querySelector('#feels-like-info')
    const windSpeed = document.querySelector('#wind-speed-info')
    const precipitations = document.querySelector('#precipitations-info')
    const humidity = document.querySelector('#humidity-info')

    location.textContent = data.currentLocation;
    country.textContent = data.currentCountry;
    currentTemperature.textContent = data.currentTemperature;
    currentConditionIcon.src = data.currentConditionIcon;
    currentCondition.textContent = data.currentCondition;

    feelsLike.textContent = `${data.currentFeelsTemperature  }°C`;
    windSpeed.textContent = `${data.currentWindSpeed  } km/h`;
    precipitations.textContent = `${data.currentPrecipitation  } mm`;
    humidity.textContent = `${data.currentHumidity  }%`;
}

function showHourlyWeather(data) {
    const mainContainer = document.querySelector('.hourly-info');
    const container = document.createElement('div');
    container.classList.add('weather-per-hour');
    const hourDisplay = document.createElement('div');
    const conditionDisplay = new Image();
    const temperatureDisplay = document.createElement('div');

    let hour = new Date(data.time).getHours();
    if (hour.toString().length === 1) hour = `0${hour}`;
    hourDisplay.textContent = `${hour}:00`;
    conditionDisplay.src = data.conditionIcon;
    temperatureDisplay.textContent = `${data.temperature  }°C`;

    container.append(hourDisplay, conditionDisplay, temperatureDisplay);
    mainContainer.appendChild(container);
}

function resetHourlyWeather() {
    const container = document.querySelector('.hourly-info');
    container.replaceChildren();
}

function checkContainerForecast() {
    const containerForecast = document.querySelector('.two-days-forecast');
    const isEmpty = containerForecast.textContent === '';
    if (!isEmpty) {
        containerForecast.replaceChildren(); 
    }
}

function showTwoDaysForecast(data) {
    const daysNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const containerForecast = document.querySelector('.two-days-forecast');
    const container = document.createElement('div');
    container.classList.add('daily-forecast');
    const weekday = document.createElement('div');
    weekday.classList.add('weekday');
    const condition = new Image();
    const temperature = document.createElement('div');
    temperature.classList.add('daily-forecast-temperature');
    const maxTemp = document.createElement('div');
    const minTemp = document.createElement('div');
    const chanceOfRain = document.createElement('div');
    const humidity = document.createElement('div');

    weekday.textContent = daysNames[new Date(data.time).getDay() - 1];
    condition.src = data.conditionIcon;
    maxTemp.textContent = `${Math.round(data.maxTemp)}°C`;
    minTemp.textContent = `${Math.round(data.minTemp)}°C`
    chanceOfRain.textContent = `${data.rainChance}%`;
    humidity.textContent = data.humidity;

    temperature.append(maxTemp, minTemp);
    container.append(weekday, condition, temperature, chanceOfRain, humidity);
    containerForecast.appendChild(container);
}

export {
    updateCurrentWeather,
    showHourlyWeather,
    resetHourlyWeather,
    checkContainerForecast,
    showTwoDaysForecast
}