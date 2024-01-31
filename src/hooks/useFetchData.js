import { useEffect, useState } from "react"
import { fetchData } from "../utils/api";
import { options } from "../utils/constant";

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [isLoad, setisLoad] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetching = async () => {
            setisLoad(false)

            try {
                const response = fetchData(url, options)
                setData(response)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setisLoad(true)
            }
        }

        fetching()
    }, [])

    return { data, isLoad, error };
}

export default useFetchData;