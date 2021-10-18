import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'; 
import SignInWithGoogle from '../SignInWithGoogle/SignInWithGoogle';

const Login = () => {
     const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className="container text-center">
            <div className="bg-gray-200 w-80 mx-auto mt-20 mb-20 py-10 rounded">
                <form onSubmit={handleSubmit}>

                <input className="block mx-auto mt-2 w-2/3 rounded px-2" defaultValue="" {...register("example")} placeholder="Email" />
                <input className="block mx-auto mt-2 w-2/3 rounded px-2" {...register("exampleRequired", { required: true })}  placeholder="Password"/> 
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input className="bg-yellow-500 px-12 mt-5 py-1 rounded text-white" type="submit" />
                </form>
                <p className="mt-3">Don't have account? <Link className="text-blue-500" to="/register">Sign Up</Link></p>
                <SignInWithGoogle />
            </div>
        </div>
    );
};

export default Login;