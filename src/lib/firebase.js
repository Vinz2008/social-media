import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAFu63vmZEeN7UQR_4idAzmLG_MxpHSlB8",
    authDomain: "social-media-af20b.firebaseapp.com",
    projectId: "social-media-af20b",
    storageBucket: "social-media-af20b.appspot.com",
    messagingSenderId: "940777685406",
    appId: "1:940777685406:web:3fd4999e0f04a75b28568f"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();