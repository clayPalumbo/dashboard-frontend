import { useState, useCallback } from "react";

export const getWeather = async (options: { location: number }) => {
  const response = await fetch(
    `https://0jedkr91m6.execute-api.us-east-1.amazonaws.com/dev/weather?location=${options.location}`
  );
  const data = await response.json();
  return data;
};

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [weatherData, setData] = useState<any>(null);

  const execute = async (options: { location: number }) => {
    try {
      setIsLoading(true);
      const weather = await getWeather(options);
      setData(weather);
      setIsLoading(false);

      return weather;
    } catch (e: any) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    error,
    weatherData,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};
