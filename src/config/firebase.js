import firebase from 'firebase/app';
// Hm jaisa javascript ko firebase ka sth connect krna ka liye script ka tag bna kr Html file ka sth connect krta tha. Then firebase ko apna project ka sth connect krskta hain.
// Aisa hi react ko 'npm i firebase' is command se phele install karai ga. Then (video no.28 time 1:20) se dekha. 
// Jo bhi service use krni hai firebase se uska btadeinga. Nicha usi ko import krarahe hain.
import 'firebase/database';
import { traverseTwoPhase } from "react-dom/test-utils";


var firebaseConfig = {
    apiKey: "AIzaSyBgbh62sbGQCu_MrGHdxKC1vUvvUEw-78E",
    authDomain: "assignment2-827f4.firebaseapp.com",
    databaseURL: "https://assignment2-827f4.firebaseio.com",
    projectId: "assignment2-827f4",
    storageBucket: "assignment2-827f4.appspot.com",
    messagingSenderId: "688015658342",
    appId: "1:688015658342:web:4dd6c35105f8a1c7dd8ca7",
    measurementId: "G-3ZV1EW1EKZ"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);