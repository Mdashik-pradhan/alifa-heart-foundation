import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Firebase/firebaseInitialize/firebase.initialize";

initializeFirebaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState();
    const [error, setError] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    
    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    };

        const handleEmail = (e) => {
            setEmail(e.target.value)
        };

        const handlePassword = e => {
            setPassword(e.target.value);
        }

        const handleRegistration = (e) => {
            e.preventDefault();
            if(password.length < 6){
                setError('Password must be at least 6 character.')
            } 
             if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
                 setError('Password Must contain 2 upper case');
                 return;
             }else {
                createNewUser(email, password)
             }
        }

        const createNewUser = (email, password) => {
            createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error);
            })
            
        }

        const signInWithEmailPassword = e => {
            return signInWithEmailAndPassword(auth, email, password)
            
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

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setIsLoading(false));
    }




    return {
        signInWithGoogle,
        logout,
        user,
        isLoading,
        error,
        setError,
        setIsLoading,
        handleRegistration,
        handleEmail,
        handlePassword,
        createNewUser,
        signInWithEmailPassword
    }
}

export default useFirebase;