import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMtGyDK96UNzWfbwQoZ_zIafD2jgf8UDU",
  authDomain: "balance-tracker-e380d.firebaseapp.com",
  projectId: "balance-tracker-e380d",
  storageBucket: "balance-tracker-e380d.appspot.com",
  messagingSenderId: "46620424551",
  appId: "1:46620424551:web:d88aee181a65dcd60897c2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
