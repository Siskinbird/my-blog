import {useEffect, useState} from "react";

import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore';
import {collectionRef} from "./firebase-config";


const useFetch = () => {

    let [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
            const getBlogs = async () => {
            const data = await getDocs(collectionRef);
            setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getBlogs().then(() => {
            setIsPending(false);
            setError(null)
        });
    }, [])
    return {data, isPending, error}
}

export default useFetch;