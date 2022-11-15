import { useState } from "react";
import CityPicker from "./components/cityPicker";
import { DEFAULT_CITY } from "./config/constants";
import ShowWeather from "./components/showWeather";
import useWeatherByCity from "./hooks/useWeatherByCity";
import ErrorMessage from "./components/errorMessage";
import Loading from "./components/loading";
import './App.css';

function App() {
  
  const [selectedCityId, setSelectedCityId] = useState<string>(DEFAULT_CITY.id);
  const { cityWeather, isloading } = useWeatherByCity(selectedCityId);

  const handleChangeCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityId = event.target.value;
    setSelectedCityId(cityId);
  }


  if (isloading) {
    return <Loading/>;
  }

  return (
    <main id="App">
      <h2 className="main-title">Weather App</h2>

      <CityPicker handleChange={handleChangeCity} value={selectedCityId} />
      {(cityWeather) ? <ShowWeather weather={cityWeather} /> : <ErrorMessage/>}
     
    </main>
  );
}

export default App;
