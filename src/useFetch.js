import {useEffect, useState} from "react";

import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore';
import {collectionRef} from "./firebase-config";


const useFetch = () => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        //const abortCont = new AbortController();
        const getBlogs = async () => {
            const data = await getDocs(collectionRef);
            setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setIsPending(false);
            setError(null)
            console.log(data);
        };
        getBlogs().then(() => {
            console.log(data);
        });
        // getDocs(collectionRef).then((snapshot) => {
        //     let blogs = [];
        //     snapshot.docs.forEach((doc) => {
        //         blogs.push({...doc.data(), id: doc.id})
        //     })
        //     setData(blogs)
        //     setIsPending(false);
        //     setError(null);
        //     console.log(blogs);
        // }).catch((error) => {
        //     if (error.name === 'AbortError') {
        //         console.log('fetch aborted');
        //     } else {
        //         setIsPending(false);
        //         setError(error.message);
        //     }
        // });
        //return () => abortCont.abort();
    }, [])
    return {data, isPending, error}
}

export default useFetch;