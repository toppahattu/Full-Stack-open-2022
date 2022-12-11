import { useState, useEffect } from "react";
import axios from 'axios';

const Weather = ({capital}) => {
    const [weather, setWeather] = useState({});
    const api_key = process.env.REACT_APP_API_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${api_key}&units=metric`;

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setWeather(response.data);
            })
    }, [url]);

    if (Object.keys(weather).length) {
        return (
            <>
            <h2>Weather in {capital}</h2>
            <div>temperature {weather.main.temp} Celcius</div>
            <div><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather icon'/></div>
            <div>wind {weather.wind.speed} m/s</div>
            </>
        );
    }
    
    return (
        <></>
    );
}

export default Weather;