// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getApp} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Ob-XXsPp7U9qKFJPT_ANXAXK9e-GYRE",
  authDomain: "ema-jhon-router.firebaseapp.com",
  projectId: "ema-jhon-router",
  storageBucket: "ema-jhon-router.appspot.com",
  messagingSenderId: "911978097946",
  appId: "1:911978097946:web:59bf3f339f366808add0a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = geAuth(app);
export default auth ;