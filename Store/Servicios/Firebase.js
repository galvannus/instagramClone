import * as firebase from 'firebase';


// Initialize Firebase
const config = {
    apiKey: "AIzaSyBbWFLAex2-bmUoXbrC4tVI2qEW70QhRSw",
    authDomain: "social-ab083.firebaseapp.com",
    databaseURL: "https://social-ab083.firebaseio.com",
    projectId: "social-ab083",
    storageBucket: "social-ab083.appspot.com",
    messagingSenderId: "322051454927",
};
firebase.initializeApp(config);

export const autenticacion = firebase.auth();
