import { useEffect, useState } from "react";
export const useFetchById = (response: Function, id: number|undefined) => {

  const [dataById, setDataById]: Array<any> = useState([]);
  const [isLoadingById, setIsLoadingById] = useState(true);

  const getData = async () => {
    const dataList = await response(id);
    setDataById(dataList);
    setIsLoadingById(false);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return {
    dataById,
    isLoadingById,
  };
};
