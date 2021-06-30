import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBQtUzRpBuX2GMssPmBCKgy00HgQ7ehyZ8",
    authDomain: "react-app-cursos-majc.firebaseapp.com",
    projectId: "react-app-cursos-majc",
    storageBucket: "react-app-cursos-majc.appspot.com",
    messagingSenderId: "213811044660",
    appId: "1:213811044660:web:1bdfeb3d238ea80d084561"
  };
  

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}