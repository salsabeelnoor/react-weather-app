import { useContext } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";
import ClearSkyImage from '../src/assets/backgrounds/clear-sky.jpg';
import FewCloudsImg from '../src/assets/backgrounds/few-clouds.jpg';
import MistImg from '../src/assets/backgrounds/mist.jpeg';
import RainyDayImage from '../src/assets/backgrounds/rainy-day.jpg';
import ScatteredCloudsImage from '../src/assets/backgrounds/scattered-clouds.jpg';
import SnowImage from '../src/assets/backgrounds/sunny.jpg';
import ThunderStormImage from '../src/assets/backgrounds/thunderstorm.jpg';
import WinterImage from '../src/assets/backgrounds/winter.jpg';


export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  // const [climateImage, setClimateImage] = useState("");
  function getBackgroundImage (climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatteredCloudsImage;
      case "Snow":
        return SnowImage;
      case "Clear":
        return ClearSkyImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImg;
      case "Mist":
        return MistImg;
      default:
        return ClearSkyImage;
    }
  }
  
  const climateImage = getBackgroundImage(weatherData.climate);
  
  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div style={{backgroundImage: `url('${climateImage}')`}}
         className="grid place-items-center h-screen bg-no-repeat bg-cover">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
