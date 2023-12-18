/* eslint-disable no-param-reassign */
import * as APIFunc from './API';
import * as DOMFunc from './DOM';
import './style.css';

const form = document.querySelector('form');
const button = document.querySelector('button');
const locationInput = document.querySelector('input');

form.addEventListener('submit', event => {
  event.preventDefault();
})

window.addEventListener('load', async () => {
  const data = await APIFunc.getData('madrid');
  DOMFunc.showDate(APIFunc.getDate())
  const processedData = APIFunc.processTodayData(data)
  DOMFunc.updateCurrentWeather(processedData);
  const hourlyData = APIFunc.displayDayData(data);
  DOMFunc.showHourlyData(hourlyData)
  const twoDaysForecast = APIFunc.getTwoDaysForecast(data);
  twoDaysForecast.forEach(day => {
    DOMFunc.showTwoDaysForecast(day)
  })
})

button.addEventListener('click', async () => {
  const location = locationInput.value;
  if (!location) return;
  const data = await APIFunc.getData(location);
  if (!data) return;
  DOMFunc.resetHourlyData();
  DOMFunc.checkContainerForecast();
  APIFunc.displayDayData(data)  
  DOMFunc.showDate(APIFunc.getDate())
  const processedData = APIFunc.processTodayData(data)
  DOMFunc.updateCurrentWeather(processedData);
  const hourlyData = APIFunc.displayDayData(data);
  DOMFunc.showHourlyData(hourlyData)
  const twoDaysForecast = APIFunc.getTwoDaysForecast(data);
  twoDaysForecast.forEach(day => {
    DOMFunc.showTwoDaysForecast(day);
  })
  form.reset();
})

const buttons = document.querySelectorAll('.move-weather');
buttons.forEach(moveButton => {
  moveButton.addEventListener('click', () => {
    const currentActiveHourly = document.querySelector('.hourly-data.active');
    const currentActiveDot = document.querySelector('.dot.active');
    const container = document.querySelector('.show-hourly');
    const dotsContainer = document.querySelector('.dots-container');
    const currentIndex = [...container.children].indexOf(currentActiveHourly);

    let newIndex;
    if (moveButton.dataset.move === 'prev') newIndex = currentIndex - 1;
    if (moveButton.dataset.move === 'next') newIndex = currentIndex + 1;
    if (newIndex >= [...container.children].length) newIndex = 0;
    if (newIndex < 0) newIndex = [...container.children].length - 1;

    currentActiveHourly.classList.toggle('active');
    currentActiveDot.classList.toggle('active');
    [...container.children][newIndex].classList.toggle('active');
    [...dotsContainer.children][newIndex].classList.toggle('active');
  })
})

const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
  dot.addEventListener('click', (event) => {
    const currentActiveHourly = document.querySelector('.hourly-data.active');
    const currentActiveDot = document.querySelector('.dot.active');
    const container = document.querySelector('.show-hourly');
    const dotsContainer = document.querySelector('.dots-container');
    const newIndex = [...dotsContainer.children].indexOf(event.target);

    currentActiveHourly.classList.toggle('active');
    currentActiveDot.classList.toggle('active');
    [...container.children][newIndex].classList.toggle('active');
    [...dotsContainer.children][newIndex].classList.toggle('active');
  })
})

const temperatureUnitsButtons = document.querySelectorAll('.temperature-units');

temperatureUnitsButtons.forEach(changeUnit => {
  changeUnit.addEventListener('click', (event) => {
    if (event.target.classList.contains('active')) return;
    const currentActive = document.querySelector('.temperature-units.active')
    const allValues = document.querySelectorAll('.number');
    allValues.forEach(value => {
      if (event.target.value === 'fahrenheit') {
        const newValue = Math.round((Number(value.textContent) * 9 / 5) + 32);
        value.textContent = newValue;
        value.nextElementSibling.textContent = '°F'
      } else {
        const newValue = Math.round((Number(value.textContent) - 32) * 5 / 9);
        value.textContent = newValue;
        value.nextElementSibling.textContent = '°C'
      }
    })
    currentActive.classList.toggle('active');
    event.target.classList.toggle('active');
    console.log(currentActive)
  })
})