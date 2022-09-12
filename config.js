import firebase from 'firebase';

const firebaseConfig = {
 apiKey: "AIzaSyASfcYwrJnRBretJKwy7Xu9UxvsKJMX8Js",
  authDomain: "temas-clase85.firebaseapp.com",
  databaseURL: "https://temas-clase85-default-rtdb.firebaseio.com",
  projectId: "temas-clase85",
  storageBucket: "temas-clase85.appspot.com",
  messagingSenderId: "1040353640252",
  appId: "1:1040353640252:web:f1b49afb6402fcddffa839"
};

if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();