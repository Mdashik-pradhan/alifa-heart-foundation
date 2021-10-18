import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    console.log(user)
    return (
        <div className="bg-gray-500 p-8 text-white">
            <div className="container flex">
                <div>
                    Health Care
                </div>
                <div className="mx-auto">
                    <Link className="p-2" to="/">Home</Link>
                    <Link className="p-2" to="/services">Services</Link>
                    <Link className="p-2" to="/about">About</Link>
                    <Link className="p-2" to="/contact">Contact</Link>
                    {
                        user?.email?  <button onClick={logout}>Log out</button> 
                        : <Link to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;