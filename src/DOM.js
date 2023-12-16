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

    feelsLike.textContent = `${data.currentFeelsTemperature  }°`;
    windSpeed.textContent = `${data.currentWindSpeed  } km/h`;
    precipitations.textContent = `${data.currentPrecipitation  } mm`;
    humidity.textContent = `${data.currentHumidity  }%`;
}


function createWeatherSet(row) {
    const container = document.createElement('div');
    container.classList.add('weather-per-hour');
    const hourDisplay = document.createElement('div');
    const conditionDisplay = new Image();
    const temperatureDisplay = document.createElement('div');
    
    let hour = new Date(row.time).getHours();
    if (hour.toString().length === 1) hour = `0${hour}`;
    hourDisplay.textContent = `${hour}:00`;
    conditionDisplay.src = row.conditionIcon;
    temperatureDisplay.textContent = `${row.temperature  }°`;

    container.append(hourDisplay, conditionDisplay, temperatureDisplay);
    return container;
}

function showHourlyData(data) {
    const firstContainer = document.querySelector('[data-info-one]');
    const secondContainer = document.querySelector('[data-info-two]');
    const thirdContainer = document.querySelector('[data-info-three]');


    firstContainer.replaceChildren();
    secondContainer.replaceChildren();
    thirdContainer.replaceChildren();

    const firstRow = data.slice(0, 8);
    const secondRow = data.slice(8, 16);
    const thirdRow = data.slice(16, 24);

    firstRow.forEach(row => {
        firstContainer.appendChild(createWeatherSet(row))
    })

    secondRow.forEach(row => {
        secondContainer.appendChild(createWeatherSet(row))
    })

    thirdRow.forEach(row => {
        thirdContainer.appendChild(createWeatherSet(row))
    })
}

function resetHourlyData() {
    const activeContainer = document.querySelector('.hourly-data.active');
    const activeDot = document.querySelector('.dot.active');
    const container = document.querySelector('.show-hourly');
    const dotsContainer = document.querySelector('.dots-container');

    activeContainer.classList.toggle('active');
    activeDot.classList.toggle('active');

    [...container.children][0].classList.toggle('active');
    [...dotsContainer.children][0].classList.toggle('active');
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
    temperatureDisplay.textContent = `${data.temperature  }°`;

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
    const daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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

    weekday.textContent = daysNames[new Date(data.time).getDay()];
    condition.src = data.conditionIcon;
    maxTemp.textContent = `${Math.round(data.maxTemp)}°`;
    minTemp.textContent = `${Math.round(data.minTemp)}°`
    chanceOfRain.textContent = `${data.rainChance}%`;
    humidity.textContent = data.humidity + '%';

    temperature.append(maxTemp, minTemp);
    container.append(weekday, condition, temperature, chanceOfRain, humidity);
    containerForecast.appendChild(container);
}

function showDate(date) {
    document.querySelector('#date').textContent = date;
}

export {
    updateCurrentWeather,
    showHourlyWeather,
    resetHourlyWeather,
    checkContainerForecast,
    showHourlyData,
    showTwoDaysForecast,
    resetHourlyData,
    showDate
}