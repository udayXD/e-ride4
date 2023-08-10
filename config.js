import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyC9c2wKG3WBTTgNdVgiNmHSqmCM_y5NE9c",
  authDomain: "e-ride-4-db463.firebaseapp.com",
  projectId: "e-ride-4-db463",
  storageBucket: "e-ride-4-db463.appspot.com",
  messagingSenderId: "775658060212",
  appId: "1:775658060212:web:73c35e082b41a286315ae1"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
