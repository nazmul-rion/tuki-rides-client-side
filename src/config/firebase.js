import { initializeApp } from "firebase/app";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyAcdlTecSMbQjbXiYjcbJMlE-P8JyO3gw4",
    authDomain: "tuki-rides-nazmul-rion.firebaseapp.com",
    projectId: "tuki-rides-nazmul-rion",
    storageBucket: "tuki-rides-nazmul-rion.appspot.com",
    messagingSenderId: "930522788284",
    appId: "1:930522788284:web:8bea423fa24bebf7dc7bb9"

};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;