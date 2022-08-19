import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
// require("firebase/auth");

const config = {
  apiKey: 'AIzaSyCmTEUqCu3r_luDldJXTxTxLZTJIVe1UYI',
  authDomain: 'sm-powerhouseaarhus.firebaseapp.com',
  databaseURL: 'https://sm-powerhouseaarhus.firebaseio.com',
  projectId: 'sm-powerhouseaarhus',
  storageBucket: 'sm-powerhouseaarhus.appspot.com',
  messagingSenderId: '927879624649',
  appId: '1:927879624649:web:21638637aa96ca2fc51a18',
};

firebase.initializeApp(config);

const db = firebase.firestore();
const newsRef = db.collection('news');
const staffRef = db.collection('staff');

export { newsRef, staffRef };
// export default db;
