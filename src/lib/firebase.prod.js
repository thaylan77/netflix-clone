import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBpzxBNl2ejKLAfXQ8MwbcbzibbZfRjM0A",
  authDomain: "netflix-b61c2.firebaseapp.com",
  projectId: "netflix-b61c2",
  storageBucket: "netflix-b61c2.appspot.com",
  messagingSenderId: "309284420028",
  appId: "1:309284420028:web:d4c20bfeffd69db22393b9"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);


export { firebase };
