import CloudIcon from '../../assets/cloud.svg';
import PIN from '../../assets/pin.svg';
import { useContext } from 'react';
import { weatherContext } from '../../context';
import { getFormattedDate } from '../../utils/date-util';

export default function WeatherHeadline(){
  const { weatherData } = useContext(weatherContext);
  const {climate, location, temperature, time} = weatherData; 
    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
              <img src={CloudIcon} alt="cloud" />
              <div className="max-md:flex items-center max-md:space-x-4">
                <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                  {Math.round(temperature)}°C
                </h1>
                <div className="flex items-center space-x-4 md:mb-4">
                  <img src={PIN} />
                  <h2 className="text-2xl lg:text-[50px]">{location}</h2>
                </div>
              </div>
            </div>
            <p className="text-sm lg:text-lg">{getFormattedDate(time, "time", false)} - {getFormattedDate(time, "date", false)}</p>
          </div>
    );
}