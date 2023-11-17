// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDkYrTV4yJhJ3Z_oxo42Ajeq58wTstWys",
  authDomain: "instaclone-5a638.firebaseapp.com",
  projectId: "instaclone-5a638",
  storageBucket: "instaclone-5a638.appspot.com",
  messagingSenderId: "972370627338",
  appId: "1:972370627338:web:9fac85288b95e2e270c8f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)