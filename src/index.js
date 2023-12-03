import getTodayData from './API';
import updateCurrentWeather from './DOM';
import './style.css';

const form = document.querySelector('form');
const button = document.querySelector('button');
const locationInput = document.querySelector('input');

form.addEventListener('submit', event => {
  event.preventDefault();
})

window.addEventListener('load', async () => {
  const data = await getTodayData('madrid');
  updateCurrentWeather(data);
})

button.addEventListener('click', async () => {
  const location = locationInput.value;
  if (location === "") return;
  const data = await getTodayData(location);
  updateCurrentWeather(data);
  locationInput.value = "";
})