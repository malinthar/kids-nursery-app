import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDl-qCdLPnmsUPMIrll7CKFyEgo1dxNohY",
  authDomain: "nursery-d5356.firebaseapp.com",
  databaseURL: "https://nursery-d5356.firebaseio.com",
  projectId: "nursery-d5356",
  storageBucket: "nursery-d5356.appspot.com",
  messagingSenderId: "497100998651",
  appId: "1:497100998651:web:1694fa50fdfa6d6090ad5e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
