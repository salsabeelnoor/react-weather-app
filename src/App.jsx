import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import {
  FavoriteProvider,
  WeatherProvider,
  LocationProvider,
} from "./provider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <div className="grid place-items-center h-screen">
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
