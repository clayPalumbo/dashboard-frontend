import { useState, useCallback } from "react";

export const getCryptoNews = async () => {
  const requestOptions = {
    method: "GET",
  };
  const response = await fetch(
    `https://0jedkr91m6.execute-api.us-east-1.amazonaws.com/dev/crypto-news?newsItems=5&currencies=ETH,BTC`,
    requestOptions
  );
  console.log(response);
  return await response.json();
};

export const useGetCryptoNews = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [cryptoNewsData, setData] = useState<any>(null);

  const execute = async () => {
    try {
      setIsLoading(true);
      const cryptoNews = await getCryptoNews();
      setData(cryptoNews);
      setIsLoading(false);

      return cryptoNews;
    } catch (e: any) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    error,
    cryptoNewsData,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};
