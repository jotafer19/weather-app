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
  console.log(hourlyData)
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
  console.log(hourlyData)
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