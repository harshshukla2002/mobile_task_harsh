import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUoJ3vsuT1cDPiZNJIG29ilHDAZEK_My4",
  authDomain: "whitelabelapp-dce1f.firebaseapp.com",
  databaseURL: "https://whitelabelapp-dce1f-default-rtdb.firebaseio.com",
  projectId: "whitelabelapp-dce1f",
  storageBucket: "whitelabelapp-dce1f.firebasestorage.app",
  messagingSenderId: "655414388461",
  appId: "1:655414388461:web:1ea0a2d21dd797d4fb4ee4",
  measurementId: "G-YXH8M2NQPR",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
