import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmH9-Px8p9jU6j8vCHcJ8FdQf3UYuzu9c",
  authDomain: "adotace-c1778.firebaseapp.com",
  databaseURL: "https://adotace-c1778-default-rtdb.firebaseio.com",
  projectId: "adotace-c1778",
  storageBucket: "adotace-c1778.appspot.com",
  messagingSenderId: "1083162196135",
  appId: "1:1083162196135:web:d3c60c12bff8a86dce0382",
  measurementId: "G-JXGKLGQSB4"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;