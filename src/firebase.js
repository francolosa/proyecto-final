// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import manual para agregar la funcion que obtiene la instancia de firestroe
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdXqZJ0adrds6F5V1uCdMU7tg79_QE2Vg",
  authDomain: "lleguemos-database.firebaseapp.com",
  projectId: "lleguemos-database",
  storageBucket: "lleguemos-database.appspot.com",
  messagingSenderId: "534867381767",
  appId: "1:534867381767:web:aea513730e577115f8e4a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportar la base de datos de firestore para usarla en la app

export const db = getFirestore(app);