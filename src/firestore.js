// import firebase from 'firebase/app';
// import 'firebase/firestore';

// var firebaseConfig = {
//   apiKey: "AIzaSyC9wZqfpnUdzpfZqNkJf0xmedVg5R2dPps",
//   authDomain: "svelte-app-test.firebaseapp.com",
//   databaseURL: "https://svelte-app-test.firebaseio.com",
//   projectId: "svelte-app-test",
//   storageBucket: "svelte-app-test.appspot.com",
//   messagingSenderId: "807567618166",
//   appId: "1:807567618166:web:df32b676582856697eaf57",
//   measurementId: "G-46CLL7ZN10"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();



import admin from 'firebase-admin'

import serviceAccount from '../svelte-app-test-firebase-adminsdk-9m7k6-86883cba37.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();


