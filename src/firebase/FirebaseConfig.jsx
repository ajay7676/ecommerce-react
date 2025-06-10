import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: "AIzaSyA9Pj65MCfG1gUVBmkjWbYlrOCAECn28o8",
  authDomain: "ecommerceapp-ab24e.firebaseapp.com",
  projectId: "ecommerceapp-ab24e",
  storageBucket: "ecommerceapp-ab24e.firebasestorage.app",
  messagingSenderId: "580251229060",
  appId: "1:580251229060:web:abdafd9f511a8162925bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

export{fireDB , auth}