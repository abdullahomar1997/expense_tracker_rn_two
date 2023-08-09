// import * as firebase from 'firebase'
// import firebase from 'firebase/app';
// import 'firebase/auth'
// import 'firebase/firestore'

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//     apiKey: "AIzaSyA3btSbK0_Q0SKFtZdylKSlLsqPkSspfCg",
//     authDomain: "expense-tracker-rn-two.firebaseapp.com",
//     projectId: "expense-tracker-rn-two",
//     storageBucket: "expense-tracker-rn-two.appspot.com",
//     messagingSenderId: "568956013747",
//     appId: "1:568956013747:web:abc9fbbf552af8c6deb4c6",
//     measurementId: "G-6DZJBTELMX"
// }

// const app = initializeApp(firebaseConfig);


// let app
// if ((firebase.apps.length === 0)) {
//   app = firebase.initializeApp(firebaseConfig)
// } else {
//   app = firebase.app()
// }

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const auth = firebase.auth()
// const db = app.firestore()

// export {auth, db}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3btSbK0_Q0SKFtZdylKSlLsqPkSspfCg",
  authDomain: "expense-tracker-rn-two.firebaseapp.com",
  projectId: "expense-tracker-rn-two",
  storageBucket: "expense-tracker-rn-two.appspot.com",
  messagingSenderId: "568956013747",
  appId: "1:568956013747:web:abc9fbbf552af8c6deb4c6",
  measurementId: "G-6DZJBTELMX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };
