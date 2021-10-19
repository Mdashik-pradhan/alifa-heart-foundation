import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import UserInfoModal from '../../Pages/UserInfoModal/UserInfoModal';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    return (
        <div className="bg-gray-500 p-8 text-white">
            <div className="container flex items-center">
                <div>
                    Alifa Heart Foundation
                </div>
                <div className="flex mx-auto">
                    <Link className="p-2" to="/">Home</Link>
                    <Link className="p-2" to="/services">Services</Link>
                    <Link className="p-2" to="/about">About</Link>
                    <Link className="p-2" to="/contact">Contact</Link>
                </div>
                    <div className = "flex justify-end text-end">
                        {

                        user?.photoURL ?
                        <img onClick={openModal} className="w-10 circle rounded-full mr-2" src={  user.photoURL} alt=""/> 
                        :
                        user.photoURL === false &&
                        <div className="bg-gray-200 text-green-500 w-10 h-10 flex items-center text-xl mr-2 justify-center rounded-full">{user.displayName[0]}</div>}

                        {
                            user?.email?  <button onClick={logout}>Log out</button> 
                            : <Link to="/login">Login</Link>
                        }
                    </div>
            </div>
            <UserInfoModal modalIsOpen={modalIsOpen}  setIsOpen={ setIsOpen } />
        </div>
    );
};

export default Header;