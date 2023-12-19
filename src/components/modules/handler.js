/* eslint-disable no-param-reassign */
import * as APIFunc from "./API";
import * as DOMFunc from "./DOM";

function searchWeather(location) {
  document.querySelector("input + span").textContent = "";
  if (!location) return;
  APIFunc.getData(location).then((data) => {
    if (!data) return;
    DOMFunc.resetHourlyData();
    DOMFunc.checkContainerForecast();
    APIFunc.displayDayData(data);
    const processedData = APIFunc.processTodayData(data);
    DOMFunc.showDate(APIFunc.getDate(processedData.date));
    DOMFunc.updateCurrentWeather(processedData);
    const hourlyData = APIFunc.displayDayData(data);
    DOMFunc.showHourlyData(hourlyData);
    const twoDaysForecast = APIFunc.getTwoDaysForecast(data);
    twoDaysForecast.forEach((day) => {
      DOMFunc.showTwoDaysForecast(day);
    });
    document.querySelector("form").reset();
  });
}

function changeHourlyDisplay(event) {
  const currentActiveHourly = document.querySelector(".hourly-data.active");
  const currentActiveDot = document.querySelector(".dot.active");
  const container = document.querySelector(".show-hourly");
  const dotsContainer = document.querySelector(".dots-container");
  const currentIndex = [...container.children].indexOf(currentActiveHourly);

  let newIndex;
  if (event.target.classList.contains("move-weather")) {
    if (event.target.dataset.move === "prev") newIndex = currentIndex - 1;
    if (event.target.dataset.move === "next") newIndex = currentIndex + 1;
    if (newIndex >= [...container.children].length) newIndex = 0;
    if (newIndex < 0) newIndex = [...container.children].length - 1;
  } else if (event.target.classList.contains("dot")) {
    newIndex = [...dotsContainer.children].indexOf(event.target);
  }

  currentActiveHourly.classList.toggle("active");
  currentActiveDot.classList.toggle("active");
  [...container.children][newIndex].classList.toggle("active");
  [...dotsContainer.children][newIndex].classList.toggle("active");
}

function changeUnits(event) {
  if (event.target.classList.contains("active")) return;
  const currentActive = document.querySelector(".temperature-units.active");
  const allValues = document.querySelectorAll(".number");
  allValues.forEach((value) => {
    if (event.target.value === "fahrenheit") {
      const newValue = Math.round((Number(value.textContent) * 9) / 5 + 32);
      value.textContent = newValue;
      value.nextElementSibling.textContent = "°F";
    } else {
      const newValue = Math.round(((Number(value.textContent) - 32) * 5) / 9);
      value.textContent = newValue;
      value.nextElementSibling.textContent = "°C";
    }
  });
  currentActive.classList.toggle("active");
  event.target.classList.toggle("active");
}

export { searchWeather, changeHourlyDisplay, changeUnits };
