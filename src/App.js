
import './App.css';
import Inputs from './components/inputs';
import TopButtons from './components/TopButtons';
import TimeLocation from './components/TimeLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/forecast';
import getFormattedWeatherData from './services/WeatherService';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({q: 'London'});
  const[units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units})
      .then((data) => {
        toast.success(`Successfully fetched weather data for ${data.name},${data.country}.`)
        setWeatherData(data);
      })

      };
    fetchWeather();
  } ,[query, units])

  const formatBackground = () => {
    if(!weatherData){
      return 'from-cyan-700 to-blue-700'
    }
    const threshold = units === 'metric' ? 20 : 60;
    if(weatherData.temp <= threshold){
      return 'from-cyan-700 to-blue-700'
    }
    else{
      return 'from-yellow-600 to-red-600'
    }
  }
  return (
    <div className ={`bg-gradient-to-tr ${formatBackground()}`}>
      <div className={`mx-auto max-w-screen-lg py-5 px-32 bg-gradient-to-br ${formatBackground()}`}>
        <TopButtons setQuery={setQuery}/>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
        
        {weatherData &&(
          <>
          <TimeLocation weatherData={weatherData}/>
          <TemperatureDetails weatherData={weatherData}/>
          <Forecast  title="hourly forecast" items={weatherData.hourly}/>
          <Forecast  title="daily forecast" items={weatherData.daily}/>
          </>
        )
        }
        <ToastContainer
          autoClose={3000}
          theme='colored'
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={true}
          draggable={true}
          pauseOnHover={true}
          />
      </div>
    </div>
  );
}

export default App;
