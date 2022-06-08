import { useState, useCallback } from "react";
import { Equities } from "../common/models/shared.model";

const getCrypto = async (
  equities: Equities[],
  timeSelection: number,
  interval: string
) => {
  const currentTime = new Date().getTime();
  const getStartTime = new Date(
    currentTime - timeSelection * 60 * 60 * 1000
  ).getTime();
  const cryptoData = await resolveAllPromises(
    equities,
    currentTime,
    getStartTime,
    interval
  );
  return cryptoData;
};

const resolveAllPromises = async (
  equities: Equities[],
  getEndTime: number,
  getStartTime: number,
  interval: string
): Promise<any[]> => {
  const promiseArray = [];
  const requestOptions = {
    method: "GET",
  };

  for (let i = 0; i <= equities.length; i++) {
    const data = await fetch(
      `https://api.coincap.io/v2/assets/${equities?.[i]?.name}/history?interval=${interval}&start=${getStartTime}&end=${getEndTime}`,
      requestOptions
    );
    const response = await data.text();
    promiseArray.push(response);
  }
  return Promise.all(promiseArray);
};

export const useGetCrypto = (equities: Equities[]) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [cryptoData, setData] = useState<any>(null);

  const execute = async () => {
    try {
      setIsLoading(true);
      const data = await getCrypto(equities, 12, "h2");
      setData(data);
      setIsLoading(false);

      return data;
    } catch (e: any) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    error,
    cryptoData,
    execute: useCallback(execute, []),
  };
};
