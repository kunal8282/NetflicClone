// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY1jAmFULq0NPxAtjm3XT8oPrIQExEfKk",
  authDomain: "netflix-clone-b273d.firebaseapp.com",
  projectId: "netflix-clone-b273d",
  storageBucket: "netflix-clone-b273d.appspot.com",
  messagingSenderId: "250841536876",
  appId: "1:250841536876:web:0151144bbc752bcdb17b49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

// firebase deploy --only hosting:netflic-8282 to Deploy