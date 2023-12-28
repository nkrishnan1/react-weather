import { DateTime } from "luxon";

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeather = (infoType, searchParams) => {    
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:process.env.REACT_APP_API_KEY});
    console.log(url);
    return fetch(url)
        .then(response =>
            console.log(response) || 
            response.json());
}

const formatCurrentWeather = (weatherData) => {
    const { 
        coord: {lat, lon} = {},
        main: {temp, feels_like, humidity,temp_min, temp_max},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = weatherData;

    const {main: details, icon} = weather[0];
    return {    
        name,
        country,
        dt,
        humidity,
        icon,
        lat,
        lon,
        temp,
        details,
        speed,
        sunrise,
        sunset,
        feels_like,
        temp_min,
        temp_max
    }
};
const formatForecastWeather = (weatherData) => {
let{timezone,hourly, daily} = weatherData;
    hourly = hourly.slice(1,6).map((hour) => {
        return{
            title: formatToLocalTime(hour.dt, timezone, 'hh:mm a'),
            temp: hour.temp,
            icon: hour.weather[0].icon,
        };

    });
    daily = daily.slice(1,6).map((d) => {
        return{
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        };
    });
    return {timezone,hourly, daily};
};

const getFormattedWeatherData = async (searchParams) => {
    
    const formattedWeather =  await getWeather('weather',searchParams)
        .then(formatCurrentWeather);
    
    const{lat, lon} = formattedWeather;
    const forecast = await getWeather('onecall', {lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units})
        .then(formatForecastWeather);
    return {...formattedWeather,...forecast};
};

const formatToLocalTime = (dt, timezone,format="cccc, dd LLL yyyy' | Local Time: 'hh:mm a") => {
    return DateTime.fromSeconds(dt, {zone: timezone}).toFormat(format);
};

const iconUrl = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}.png`;
};
export default getFormattedWeatherData;

export {formatToLocalTime, iconUrl};