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



import dotenv from 'dotenv'
import admin from 'firebase-admin'
dotenv.config()
// import serviceAccount from './store/svelte-app-test-firebase-adminsdk-9m7k6-86883cba37.json';

const adminsdkconfig = {
  "type": process.env.FIRESTORE_type ,
  "project_id": process.env.FIRESTORE_project_id ,
  "private_key_id": process.env.FIRESTORE_private_key_id ,
  "private_key": process.env.FIRESTORE_private_key ,
  "client_email": process.env.FIRESTORE_client_email ,
  "client_id": process.env.FIRESTORE_client_id ,
  "auth_uri": process.env.FIRESTORE_auth_uri ,
  "token_uri": process.env.FIRESTORE_token_uri ,
  "auth_provider_x509_cert_url": process.env.FIRESTORE_auth_provider_x509_cert_url ,
  "client_x509_cert_url": process.env.FIRESTORE_client_x509_cert_url 
}


// const adminsdkconfigParse = JSON.stringify(adminsdkconfig)
// console.log('ARCHIVO----------',adminsdkconfig,'----------ARCHIVO')


admin.initializeApp({
  credential: admin.credential.cert(adminsdkconfig)
});

export const db = admin.firestore();
