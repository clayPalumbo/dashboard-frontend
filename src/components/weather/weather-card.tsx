import React, { useEffect } from 'react';
import { GoLocation } from 'react-icons/go'
import { BsSun } from 'react-icons/bs'
import { formatDate } from '../../common/utils/getDate';
import { useGetWeather } from '../../hooks/weather.hook';
import './styles/weather.css'

export const WeatherCard = (props: any) => {
    const {location, locationName} = props

    const {
        isLoading,
        data,
        execute,
      } = useGetWeather();

      useEffect(() => {
        try {
            execute({location})
        } catch (err) {
            console.log(err);
        }
      }, [execute]);

      const currentTemp = Math.floor(data?.forecast?.nextFewHours?.[0]?.temp);
      const currentDate = formatDate(new Date());
      
    if (isLoading) {
        return (
            <>
            <div className='weather-card-skel'>
                Page is loading
            </div>
            </>
        )
    }
    return (
        <>
        {data &&
            <div className='weather-card'>
                <div className='weather-overview'>
                    <div className='location'>
                        <div className='location-box'>
                            <GoLocation />
                            <div className='location-name'>{locationName}</div>
                        </div>
                    </div>
                    <div className='weather-stats'>
                        <div>
                            <img src={"https:" + data.icon} height="50px" width="50px"/>
                            {/* <BsSun size={50}/> */}
                            <div className="date">{currentDate}</div>
                        </div>
                        <div>
                            <div className='weather-temp'>{currentTemp}°</div>
                            <div className="weather-high-low">{Math.floor(data.forecast.low)}/{Math.floor(data.forecast.high)}°</div>
                        </div>
                        <div className='weather-stats-condition'>
                            <div className='uv-box'><BsSun/> <span className='location-name'>UV Index: {data.uv}</span></div>
                            <div className='weather-wind'>{data.windDirection} {data.wind}mph</div>
                        </div>
                    </div>
                </div>
                <div className='forecast'>
                    {data.forecast.nextFewHours.map((hour: any) => {
                        const icon = "https:" + hour.condition;
                        const timeOfDay = new Date(hour.time * 1000).getHours();
                        const standardTime = timeOfDay % 12;
                        const time = standardTime + (standardTime < timeOfDay ? "pm" : "am");
                        const temp = Math.floor(hour.temp) + "°";
                        return (
                            <div>
                                <div>{temp}</div>
                                <img src={icon} height="50px" width="50px"/>
                                <div>{time}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        }
        </>
    )
}