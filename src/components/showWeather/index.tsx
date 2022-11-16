import { Weather } from "../../config/types";
import "./styles.css";

type Props = {
    weather: Weather
}

export default function showWeather({ weather: { city, forecast } }: Props) {

    return <div id="showWeather">
        <h2 id="city-name">{city.name}</h2>
        <ul>
            {forecast.map((forecast, index) => (
                <li key={index}>
                    <span id="date">{forecast.date}</span> 
                    <span id="max"> Max: {forecast.max} °C </span>
                    <span id="min">Min: {forecast.min} °C </span> 
                </li>
            ))}
        </ul>
    </div>
}