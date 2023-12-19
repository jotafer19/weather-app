/* eslint-disable no-plusplus */
import dateFormat from "dateformat";

function processTodayData(data) {
    return {
      currentLocation: data.location.name,
      currentCountry: data.location.country,
      currentTemperature: Math.round(data.current.temp_c),
      maxTemperature: data.forecast.forecastday[0].day.maxtemp_c,
      minTemperature: data.forecast.forecastday[0].day.mintemp_c,
      currentFeelsTemperature: Math.round(data.current.feelslike_c),
      currentCondition: data.current.condition.text,
      currentConditionIcon: data.current.condition.icon,
      currentWindSpeed: Math.round(data.current.wind_kph),
      currentPrecipitation: data.current.precip_mm,
      currentHumidity: data.current.humidity,
    }
}
  
function displayDayData(data) {
    const dayDisplay = [];
    const currentHour = new Date().getHours();
    const todayHours = data.forecast.forecastday[0].hour;
    const tomorrowHours = data.forecast.forecastday[1].hour
    for (let i = 0; i < todayHours.length; i++) {
        if (i > currentHour) {
            dayDisplay.push({
                time: todayHours[i].time,
                temperature: Math.round(todayHours[i].temp_c),
                condition: todayHours[i].condition.text,
                conditionIcon: `https://${todayHours[i].condition.icon.slice(2)}`
            })
        }
    }
    for (let i = 0; i < tomorrowHours.length; i++) {
        if (i <= currentHour) {
            dayDisplay.push({
                time: tomorrowHours[i].time,
                temperature: Math.round(tomorrowHours[i].temp_c),
                condition: tomorrowHours[i].condition.text,
                conditionIcon: `https://${tomorrowHours[i].condition.icon.slice(2)}`
            })
        }
    }
    return dayDisplay;

}

async function getData(location) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=73b76e4355924104b6c103812232611&q=${location}&days=3`;
    try {
        const response = await fetch(url, {mode: 'cors'});
        if (!response.ok) throw new Error ('Location not found');
        const data = await response.json();
        console.log(data)
        return data;
    } catch(error) {
        return null;
    }
}

function getTwoDaysForecast(data) {
    const forecastData = data.forecast.forecastday.slice(1);
    const twoDaysForecast = [];
    forecastData.forEach(day => {
        twoDaysForecast.push({
            time: day.date,
            temperature: day.day.avgtemp_c,
            maxTemp: day.day.maxtemp_c,
            minTemp: day.day.mintemp_c,
            conditionIcon: `https://${day.day.condition.icon.slice(2)}`,
            rainChance: day.day.daily_chance_of_rain,
            humidity: day.day.avghumidity
        })
    })
    return twoDaysForecast;
}

function getDate() {
    const now = new Date();
    return dateFormat(now, 'dddd, mmmm dS, yyyy, HH:MM')
}

export {
    processTodayData,
    displayDayData,
    getData,
    getTwoDaysForecast,
    getDate,
}