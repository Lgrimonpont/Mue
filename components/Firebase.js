import firebase from 'firebase/app'

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAOfFZSVpDS-bGCyL0rlOYdyWLR-x-IqX4",
  authDomain: "muedb-e31b8.firebaseapp.com",
  databaseURL: "https://muedb-e31b8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "muedb-e31b8",
  storageBucket: "muedb-e31b8.appspot.com",
  messagingSenderId: "48980724314",
  appId: "1:48980724314:web:9abb6e221d731bb628a663"
};

//alert(firebase.apps.length);
//if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
//}

//var database = firebase.database();

export { firebase };