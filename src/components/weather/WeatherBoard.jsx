import AddToFavorite from "./AddToFavorite";
import WeatherHeadline from './WeatherHeadline';
import WeatherCondition from './WeatherCondition';
import { useContext } from "react";
import { weatherContext } from "../../context";

export default function WeatherBoard() {
  const { loading } = useContext(weatherContext);
  console.log("loading", loading);
  return (
    <div className="container">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/14 px-4 lg:px-14 py-6 lg:py-10 min-h-130 max-w-264.5 mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          {
            loading.state ? (
              <p>{loading.message}</p>
            )
              :
              (
                <>
                  <AddToFavorite />
                  <WeatherHeadline />
                  <WeatherCondition />
                </>
              )
          }
        </div>
      </div>
    </div>
  );
}
