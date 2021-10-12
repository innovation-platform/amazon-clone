import firebase from "firebase";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDTvuHjtKZmsDvwtPuh3FrZx6hWD4Ns2DI",
  authDomain: "clone-901a6.firebaseapp.com",
  projectId: "clone-901a6",
  storageBucket: "clone-901a6.appspot.com",
  messagingSenderId: "347269860506",
  appId: "1:347269860506:web:dad6ed5015e19f3069a323",
  measurementId: "G-YYLH1PVDF0",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
