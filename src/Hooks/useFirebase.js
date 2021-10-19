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
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    
    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false))
    };

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setIsLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user)
            } else {
                setUser([])
            }
            setIsLoading(false)
        })
    }, [])



    return {
        signInWithGoogle,
        logout,
        user,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;