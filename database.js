import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBYl3bmRMcqHmsXsb-VVqz4fLotRJjVq3I",
  authDomain: "manchester-city-83e48.firebaseapp.com",
  databaseURL: "https://manchester-city-83e48.firebaseio.com",
  projectId: "manchester-city-83e48",
  storageBucket: "manchester-city-83e48.appspot.com",
  messagingSenderId: "98775011935"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

export { firebase, firebaseMatches };
