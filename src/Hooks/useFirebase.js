import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Firebase/firebaseInitialize/firebase.initialize";

initializeFirebaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        .catch(error => {
            const err = error.message;
             setError(err);
        })
    };

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user)
            } else {
                setUser([])
            }
        })
    }, [])



    return {
        signInWithGoogle,
        logout,
        user,
        error
    }
}

export default useFirebase;