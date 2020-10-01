import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCKShfec2bAo4DclmSjvujVCsASo466P14",
    authDomain: "toto-ninja-70dca.firebaseapp.com",
    databaseURL: "https://toto-ninja-70dca.firebaseio.com",
    projectId: "toto-ninja-70dca",
    storageBucket: "toto-ninja-70dca.appspot.com",
    messagingSenderId: "456081526872",
    appId: "1:456081526872:web:d1919ab7765fb03a43ba2d",
    measurementId: "G-MFL38P8DH1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const db = firebase.firestore();

export default db;
