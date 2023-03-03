import { useEffect, useState } from "react";
export const useFetch = (response: Function) => {
  const [data, setData]: Array<any> = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const dataList = await response();
    setData(dataList);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [response]);

  return {
    data,
    isLoading,
  };
};
