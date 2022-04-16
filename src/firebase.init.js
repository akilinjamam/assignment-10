// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2s34DqHaiEjPh4WCKhlO0WjXYXUvvkts",
    authDomain: "travelbea-80478.firebaseapp.com",
    projectId: "travelbea-80478",
    storageBucket: "travelbea-80478.appspot.com",
    messagingSenderId: "588515377283",
    appId: "1:588515377283:web:17dd9403af5ec964ccdbb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth