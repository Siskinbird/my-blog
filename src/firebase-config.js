// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2cxfppBqvEFGGvUaQB9T9AK-amW38K9w",
    authDomain: "auth-for-blog.firebaseapp.com",
    projectId: "auth-for-blog",
    storageBucket: "auth-for-blog.appspot.com",
    messagingSenderId: "690232721720",
    appId: "1:690232721720:web:7eabf0aefda8cbe81d81cd",
    measurementId: "G-7JVM7Y41F8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);