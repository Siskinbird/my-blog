import {useEffect, useState} from "react";
import axios from "axios";
import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore'
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./firebase-config";



initializeApp(firebaseConfig);
const db = getFirestore();
const collectionRef = collection(db, 'blogs');

const useFetch = () => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        getDocs(collectionRef).then((snapshot) => {
            let blogs = [];
            snapshot.docs.forEach((doc) => {
                blogs.push({...doc.data(), id: doc.id})
            })
            setData(blogs)
            setIsPending(false);
            setError(null);
            console.log(blogs);
        }).catch(err => {
            console.log(err.message);
        })
        //
        //
        // const abortCont = new AbortController();
        // axios.get(url, {signal: abortCont.signal})
        //     .then((res) => {
        //         setData(res.data);
        //         setIsPending(false);
        //         setError(null);
        //     }).catch((error) => {
        //         if (error.name === 'AbortError') {
        //             console.log('fetch aborted');
        //         } else {
        //             setIsPending(false);
        //             setError(error.message);
        //         }
        //     });
        // return () => abortCont.abort();
    }, [])
    return {data, isPending, error}
}

export default useFetch;