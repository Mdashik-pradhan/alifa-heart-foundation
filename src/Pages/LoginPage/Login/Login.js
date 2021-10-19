import React from 'react';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom'; 
import SignInWithGoogle from '../SignInWithGoogle/SignInWithGoogle';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {handlePassword, handleEmail, signInWithEmailPassword , error, setError} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/'

    const handleSignInEmailPassword = e => {
        e.preventDefault();
        signInWithEmailPassword()
        .then((result) => {
            history.push(redirect_uri);
        })
        .catch(error => {
            setError(error)
        })
    }

    return (
        <div className="container text-center">
            <div className="bg-gray-200 w-80 mx-auto mt-20 mb-20 py-10 rounded">
                <form onSubmit={
                    handleSignInEmailPassword
                }>

                <input name="email" onBlur={handleEmail} className="block mx-auto mt-2 w-2/3 rounded px-2" required placeholder="Email"/>
                <input name="password" onBlur={handlePassword} className="block mx-auto mt-2 w-2/3 rounded px-2" required placeholder="Password"/> 
                
                
                <input className="bg-yellow-500 px-12 mt-5 py-1 rounded text-white" type="submit"  value="Sign In"/>
                </form>
                <p className="mt-3">Don't have account? <Link className="text-blue-500" to="/register">Sign Up</Link></p>
                <SignInWithGoogle />
            </div>
        </div>
    );
};

export default Login;