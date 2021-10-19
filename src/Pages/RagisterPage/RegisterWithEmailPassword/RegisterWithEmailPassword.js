import React from 'react';
import { Link } from 'react-router-dom'; 
import useAuth from '../../../Hooks/useAuth';

const RegisterWithEmailPassword = () => {
        const { 
            handleRegistration,
            handleEmail,
            handlePassword,
        } = useAuth();

            
    return (
        <div className="container text-center">
            <div className="bg-gray-200 w-80 mx-auto mt-20 mb-20 py-10 rounded">
                <form onSubmit={handleRegistration}>

                <input type="email" name="email" onBlur={handleEmail} className="block mx-auto mt-2 w-2/3 rounded px-2" required placeholder="Email" />
                <input name="password" onBlur={handlePassword} className="block mx-auto mt-2 w-2/3 rounded px-2" required placeholder="Password"/> 
                                
                <input className="bg-yellow-500 px-12 mt-5 py-1 rounded text-white" type="submit" value="Sign Up" />
                </form>
                <p className="mt-3">Already have an account? <Link className="text-blue-500" to="/login">Sign In</Link></p>
            </div>
        </div>
    );
};

export default RegisterWithEmailPassword;