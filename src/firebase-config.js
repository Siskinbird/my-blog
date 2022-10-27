// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
    apiKey: "AIzaSyA2cxfppBqvEFGGvUaQB9T9AK-amW38K9w",
    authDomain: "auth-for-blog.firebaseapp.com",
    projectId: "auth-for-blog",
    storageBucket: "auth-for-blog.appspot.com",
    messagingSenderId: "690232721720",
    appId: "1:690232721720:web:7eabf0aefda8cbe81d81cd",
    measurementId: "G-7JVM7Y41F8"
};

const app = initializeApp(firebaseConfig);
//init firebase database
export const db = getFirestore();
//collection reference
export const collectionRef = collection(db, 'blogs');
//init firebase authentication
export const auth = getAuth(app);