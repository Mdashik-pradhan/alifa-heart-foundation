import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div div className = "h-screen not-found w-full text-white flex justify-center items-center " >
            <div className="text-center">
                <h2 className="text-xl md:text-3xl font-bold mb-28">Look like you're lost in space</h2>
                <h1 className="text-9xl font-bold mb-5">404</h1>
                <Link to="/" className="border-2 border-white px-4 py-3 rounded-full text-lg hover:no-underline hover:text-white hover:bg-black transition duration-500 ease-in-out">Go back home</Link>
            </div>
        </div> 
    );
};

export default NotFound;