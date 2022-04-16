// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDg56f-ewvhGPd8MuVKDkifK0XxTNXfwr8",
    authDomain: "your-life-coach.firebaseapp.com",
    projectId: "your-life-coach",
    storageBucket: "your-life-coach.appspot.com",
    messagingSenderId: "120926146371",
    appId: "1:120926146371:web:97e59df83da4a1593129f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;