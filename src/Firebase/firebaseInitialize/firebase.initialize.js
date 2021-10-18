import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig/firebase.config";

const initializeFirebaseAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebaseAuth;