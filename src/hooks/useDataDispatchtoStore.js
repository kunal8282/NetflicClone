import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../utils/api";
import { options } from "../utils/constant";

const useDataDispatchtoStore = (url, callback) => {
  const dispatch = useDispatch();
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dispatchAction = async () => {
      try {
        const response = await fetchData(url, options);
        dispatch(callback(response?.results));
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Error fetching data:", error.message);
      } finally {
        setIsLoad(true);
      }
    };

    dispatchAction();
  }, []);

  return [isLoad, error];
};

export default useDataDispatchtoStore;
