
import {
    useState,
    useCallback,
  } from 'react';
  

  export const getWeather = async (options: {location: number;}) => {
    // const response = await fetch(
    //     `http://api.weatherapi.com/v1/forecast.json?key=4372bc2acb21401d89e203657222405&q=${options.location}&days=1&aqi=no&alerts=no`
    //   );
    const response = await fetch(`https://0jedkr91m6.execute-api.us-east-1.amazonaws.com/dev/weather?location=${options.location}`);
    const data = await response.json();    
    return data;
  };
  
  export const useGetWeather = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<any>(null);
    
    const execute = async (options: {location: number}) => {
      try {
        setIsLoading(true);
        const todos = await getWeather(options);
        setData(todos);
        setIsLoading(false);

        return todos;
      } catch (e: any) {
        setError(e);
        setIsLoading(false);
        throw e;
      }
    };
    
    return {
      isLoading,
      error,
      data,
      execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
    };
  };
