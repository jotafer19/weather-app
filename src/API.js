function processTodayData(data) {
    return {
      currentLocation: data.location.name,
      currentTemperature: data.current.temp_c,
      maxTemperature: data.forecast.forecastday[0].day.maxtemp_c,
      minTemperature: data.forecast.forecastday[0].day.mintemp_c,
      currentFeelsTemperature: data.current.feelslike_c,
      currentCondition: data.current.condition.text,
      currentWindSpeed: data.current.wind_kph,
      currentPrecipitation: data.current.precip_mm,
      currentHumidity: data.current.humidity,
    }
}
  
async function getTodayData(location) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=73b76e4355924104b6c103812232611&q=${location}`;
    try {
        const response = await fetch(url, {mode: 'cors'});
        if (!response.ok) throw new Error ('Location not found');
        const data = processTodayData(await response.json());
        console.log(data)
        return data;
    } catch(error) {
        return null;
    }
}

export default getTodayData;