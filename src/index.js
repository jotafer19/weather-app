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
  const processedData = APIFunc.processTodayData(data)
  DOMFunc.updateCurrentWeather(processedData);
  const hourlyData = APIFunc.displayDayData(data);
  hourlyData.forEach(hour => {
    DOMFunc.showHourlyWeather(hour);
  })
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
  DOMFunc.checkContainerForecast();
  APIFunc.displayDayData(data)  
  const processedData = APIFunc.processTodayData(data)
  DOMFunc.updateCurrentWeather(processedData);
  DOMFunc.resetHourlyWeather();
  const hourlyData = APIFunc.displayDayData(data);
  hourlyData.forEach(hour => {
    DOMFunc.showHourlyWeather(hour);
  })
  const twoDaysForecast = APIFunc.getTwoDaysForecast(data);
  twoDaysForecast.forEach(day => {
    DOMFunc.showTwoDaysForecast(day);
  })
  form.reset();
})