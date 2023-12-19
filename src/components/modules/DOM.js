function updateCurrentWeather(data) {
  const location = document.querySelector("#city");
  const country = document.querySelector("#country");
  const tempUnits = document.querySelector(".temperature-units.active");
  const currentTemperature = document.querySelector(
    "#current-temperature .number",
  );
  const currentTemperatureUnits = document.querySelector(
    "#current-temperature .unit",
  );
  const currentConditionIcon = document.querySelector(
    "#current-condition-icon",
  );
  const currentCondition = document.querySelector("#current-condition");

  const feelsLike = document.querySelector(".info .number");
  const feelsLikeUnit = document.querySelector(".info .unit");
  const windSpeed = document.querySelector("#wind-speed-info");
  const precipitations = document.querySelector("#precipitations-info");
  const humidity = document.querySelector("#humidity-info");

  location.textContent = data.currentLocation;
  country.textContent = data.currentCountry;
  currentTemperature.textContent = data.currentTemperature;
  currentTemperatureUnits.textContent = "°C";
  currentConditionIcon.src = data.currentConditionIcon;
  currentCondition.textContent = data.currentCondition;

  feelsLike.textContent = data.currentFeelsTemperature;
  feelsLikeUnit.textContent = "°C";
  windSpeed.textContent = `${data.currentWindSpeed} km/h`;
  precipitations.textContent = `${data.currentPrecipitation} mm`;
  humidity.textContent = `${data.currentHumidity}%`;

  if (tempUnits.value === "fahrenheit") {
    currentTemperature.textContent = Math.round(
      (Number(data.currentTemperature) * 9) / 5 + 32,
    );
    feelsLike.textContent = Math.round(
      (Number(data.currentFeelsTemperature) * 9) / 5 + 32,
    );
    currentTemperatureUnits.textContent = "°F";
    feelsLikeUnit.textContent = "°F ";
  }
}

function createWeatherSet(row) {
  const container = document.createElement("div");
  container.classList.add("weather-per-hour");
  const hourDisplay = document.createElement("div");
  const conditionDisplay = new Image();
  const temperatureDisplay = document.createElement("div");
  const number = document.createElement("span");
  number.classList.add("number");
  const unit = document.createElement("span");
  unit.classList.add("unit");

  temperatureDisplay.append(number, unit);

  let hour = new Date(row.time).getHours();
  if (hour.toString().length === 1) hour = `0${hour}`;
  hourDisplay.textContent = `${hour}:00`;
  conditionDisplay.src = row.conditionIcon;
  number.textContent = row.temperature;
  unit.textContent = "°C";

  const tempUnits = document.querySelector(".temperature-units.active");

  if (tempUnits.value === "fahrenheit") {
    number.textContent = Math.round((Number(row.temperature) * 9) / 5 + 32);
    unit.textContent = "°F ";
  }

  container.append(hourDisplay, conditionDisplay, temperatureDisplay);
  return container;
}

function showHourlyData(data) {
  const firstContainer = document.querySelector("[data-info-one]");
  const secondContainer = document.querySelector("[data-info-two]");
  const thirdContainer = document.querySelector("[data-info-three]");

  firstContainer.replaceChildren();
  secondContainer.replaceChildren();
  thirdContainer.replaceChildren();

  const firstRow = data.slice(0, 8);
  const secondRow = data.slice(8, 16);
  const thirdRow = data.slice(16, 24);

  firstRow.forEach((row) => {
    firstContainer.appendChild(createWeatherSet(row));
  });

  secondRow.forEach((row) => {
    secondContainer.appendChild(createWeatherSet(row));
  });

  thirdRow.forEach((row) => {
    thirdContainer.appendChild(createWeatherSet(row));
  });
}

function resetHourlyData() {
  const activeContainer = document.querySelector(".hourly-data.active");
  const activeDot = document.querySelector(".dot.active");
  const container = document.querySelector(".show-hourly");
  const dotsContainer = document.querySelector(".dots-container");

  activeContainer.classList.toggle("active");
  activeDot.classList.toggle("active");

  [...container.children][0].classList.toggle("active");
  [...dotsContainer.children][0].classList.toggle("active");
}

function showHourlyWeather(data) {
  const mainContainer = document.querySelector(".hourly-info");
  const container = document.createElement("div");
  container.classList.add("weather-per-hour");
  const hourDisplay = document.createElement("div");
  const conditionDisplay = new Image();
  const temperatureDisplay = document.createElement("div");

  let hour = new Date(data.time).getHours();
  if (hour.toString().length === 1) hour = `0${hour}`;
  hourDisplay.textContent = `${hour}:00`;
  conditionDisplay.src = data.conditionIcon;
  temperatureDisplay.textContent = `${data.temperature}°`;

  container.append(hourDisplay, conditionDisplay, temperatureDisplay);
  mainContainer.appendChild(container);
}

function resetHourlyWeather() {
  const container = document.querySelector(".hourly-info");
  container.replaceChildren();
}

function checkContainerForecast() {
  const containerForecast = document.querySelector(".two-days-forecast");
  const isEmpty = containerForecast.textContent === "";
  if (!isEmpty) {
    containerForecast.replaceChildren();
  }
}

function showTwoDaysForecast(data) {
  const daysNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const containerForecast = document.querySelector(".two-days-forecast");
  const container = document.createElement("div");
  container.classList.add("daily-forecast");
  const weekday = document.createElement("div");
  weekday.classList.add("weekday");
  const condition = new Image();
  const temperature = document.createElement("div");
  temperature.classList.add("daily-forecast-temperature");
  const maxTemp = document.createElement("div");
  maxTemp.classList.add("forecast-max-temp");
  const maxTempNumber = document.createElement("span");
  maxTempNumber.classList.add("number");
  const maxTempUnit = document.createElement("span");
  maxTempUnit.classList.add("unit");
  const minTemp = document.createElement("div");
  minTemp.classList.add("forecast-min-temp");
  const minTempNumber = document.createElement("span");
  minTempNumber.classList.add("number");
  const minTempUnit = document.createElement("span");
  minTempUnit.classList.add("unit");
  const chanceOfRain = document.createElement("div");
  const humidity = document.createElement("div");

  maxTemp.append(maxTempNumber, maxTempUnit);
  minTemp.append(minTempNumber, minTempUnit);

  weekday.textContent = daysNames[new Date(data.time).getDay()];
  condition.src = data.conditionIcon;
  maxTempNumber.textContent = `${Math.round(data.maxTemp)}`;
  maxTempUnit.textContent = "°C";
  minTempNumber.textContent = `${Math.round(data.minTemp)}`;
  minTempUnit.textContent = "°C";
  chanceOfRain.textContent = `${data.rainChance}%`;
  humidity.textContent = `${data.humidity}%`;

  const tempUnits = document.querySelector(".temperature-units.active");

  if (tempUnits.value === "fahrenheit") {
    maxTempNumber.textContent = Math.round((Number(data.maxTemp) * 9) / 5 + 32);
    minTempNumber.textContent = Math.round((Number(data.minTemp) * 9) / 5 + 32);
    maxTempUnit.textContent = "°F";
    minTempUnit.textContent = "°F";
  }

  temperature.append(maxTemp, minTemp);
  container.append(weekday, condition, temperature, chanceOfRain, humidity);
  containerForecast.appendChild(container);
}

function showDate(date) {
  document.querySelector("#date").textContent = date;
}

export {
  updateCurrentWeather,
  showHourlyWeather,
  resetHourlyWeather,
  checkContainerForecast,
  showHourlyData,
  showTwoDaysForecast,
  resetHourlyData,
  showDate,
};
