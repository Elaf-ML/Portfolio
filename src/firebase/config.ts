import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPADBEZHbGCxxkKrW4HKFD_s8_hXYVKfU",
  authDomain: "protofolio-78472.firebaseapp.com",
  projectId: "protofolio-78472",
  storageBucket: "protofolio-78472.appspot.com",
  messagingSenderId: "682694415354",
  appId: "1:682694415354:web:0c6f8c8b6fc65e1ebb6c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 