import { searchWeather, changeHourlyDisplay, changeUnits } from "./handler";

const form = document.querySelector("form");
const button = document.querySelector("#search-location");
const locationInput = document.querySelector("input");
const temperatureUnitsButtons = document.querySelectorAll(".temperature-units");
const buttons = document.querySelectorAll(".move-weather");
const dots = document.querySelectorAll(".dot");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
  searchWeather("madrid");
});

button.addEventListener("click", () => {
  const location = locationInput.value;
  searchWeather(location);
});

buttons.forEach((moveButton) => {
  moveButton.addEventListener("click", (event) => {
    changeHourlyDisplay(event);
  });
});

dots.forEach((dot) => {
  dot.addEventListener("click", (event) => {
    changeHourlyDisplay(event);
  });
});

temperatureUnitsButtons.forEach((changeUnit) => {
  changeUnit.addEventListener("click", (event) => {
    changeUnits(event);
  });
});
