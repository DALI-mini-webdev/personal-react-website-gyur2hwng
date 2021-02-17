import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyArM0vWsTonRMW3oedcSl54jLMWgiqF7Fc",
    authDomain: "dali-mini-webdev.firebaseapp.com",
    projectId: "dali-mini-webdev",
    storageBucket: "dali-mini-webdev.appspot.com",
    messagingSenderId: "1043628930272",
    appId: "1:1043628930272:web:0a6ac8d484b01e04af8c85",
    measurementId: "G-S22T4NGCQV"
});

const db = firebase.firestore();

export default {
    firebase, db
}