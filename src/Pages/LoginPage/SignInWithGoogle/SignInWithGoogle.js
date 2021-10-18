import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const SignInWithGoogle = () => {
    const { signInWithGoogle } = useAuth()
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/'

    const handleSignInGoogle = () => {
        signInWithGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div>
            <button className="bg-yellow-600 rounded mt-3 px-5 text-white py-1" onClick={handleSignInGoogle}>Sign in with google</button>
        </div>
    );
};

export default SignInWithGoogle;