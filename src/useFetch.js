import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();
        axios.get(url, {signal: abortCont.signal})
            .then((res) => {
                setData(res.data);
                setIsPending(false);
                setError(null);
            }).catch((error) => {
                if (error.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(error.message);
                }
            });
        return () => abortCont.abort();
    }, [url])
    return {data, isPending, error}
}

export default useFetch;