import React, { useEffect } from 'react';
import { GoLocation } from 'react-icons/go'
import { BsSun } from 'react-icons/bs'
import { formatDate } from '../../common/utils/getDate';
import { useGetWeather } from '../../hooks/weather.hook';
import './styles/weather.css'
import { iconGenerator } from './common/icon-generator';
import { getSunset, getTimeOfDay } from './common/utils';
// uncomment to use sample data (saves on api calls while testing)
import { data } from '../../sampleData/weather-data';


export const WeatherCard = (props: any) => {
    const {location, locationName} = props;
    const { isLoading,
        // data,
        execute,
    } = useGetWeather();

    useEffect(() => {
        try {
            execute({location})
        } catch (err) {
            console.log(err);
        } 
    }, [execute]);

    const date = new Date();
    const currentTemp = Math.floor(data?.forecast?.nextFewHours?.[0]?.temp);
    const currentDate = formatDate(date);

    const dayNight = getSunset(date.getHours());
    const isDay = date.getHours() < 20;

    if (isLoading) {
        return (
            <>
                <div className={`weather-card-skel-${dayNight}`}>
                    Page is loading
                </div>
            </>
        )
    }
    return (
        <>
        {data &&           
            <div className={`weather-card-${dayNight}`}>
                <div className='weather-overview'>
                    <div className='location'>
                        <div className='location-box'>
                            <GoLocation />
                            <div className='location-name'>{locationName}</div>
                        </div>
                    </div>
                    <div className='weather-stats'>
                        <div>
                            {iconGenerator(data.icon, 50, isDay)}
                            <div className="date">{currentDate}</div>
                        </div>
                        <div>
                            <div className='weather-temp'>{currentTemp}°</div>
                            <div className="weather-high-low">{Math.floor(data.forecast.low)}/{Math.floor(data.forecast.high)}°</div>
                        </div>
                        <div className='weather-stats-condition'>
                            {/* TODO: Turn uv into component */}
                            <div className='uv-box'><BsSun/> <span className='location-name'>UV Index: {data.uv}</span></div>
                            <div className='weather-wind'>{data.windDirection} {data.wind}mph</div>
                        </div>
                    </div>
                </div>
                <div className='forecast'>
                    {data.forecast.nextFewHours.map((hour: any) => {
                        const timeOfDay = new Date(hour.time * 1000).getHours();
                        const standardTime = timeOfDay % 12 ? timeOfDay % 12 : 12;
                        const time = standardTime + getTimeOfDay(timeOfDay);
                        const temp = Math.floor(hour.temp) + "°";
                        const isDay = timeOfDay < 20;
                        const icon = iconGenerator(hour.condition, 35, isDay);
                        return (
                            <div>
                                <div className='forecast-time'>{time}</div>
                                {icon}
                                <div className='forecast-temp'>{temp}</div>

                            </div>
                        )
                    })}
                </div>
            </div>
        }
        </>
    )
}