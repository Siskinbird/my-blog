import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data);
                setIsPending(false);
                setError(null);
            }).catch((error) => {
            setIsPending(false);
            setError(error.message);
        })
    }, [])
    return {data, isPending, error}
}

export default useFetch;