import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import UserInfoModal from '../../Pages/Users/UserInfoModal/UserInfoModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const { user, logout } = useAuth();

    return (
        <div className="shadow-lg p-8 text-black">
            <div className="container flex items-center">
                <div>
                    <h1 className="text-2xl font-semibold">Alifa Heart Foundation</h1>
                </div>
                <div className="flex mx-auto">
                    <Link className="p-2 hover:no-underline text-lg font-semibold hover:text-red-300 hover:border-t-2 border-black" to="/">Home</Link>
                    <Link className="p-2 hover:no-underline text-lg font-semibold hover:text-red-300 hover:border-t-2 border-black" to="/services">Services</Link>
                    <Link className="p-2 hover:no-underline text-lg font-semibold hover:text-red-300 hover:border-t-2 border-black" to="/about">About</Link>
                    <Link className="p-2 hover:no-underline text-lg font-semibold hover:text-red-300 hover:border-t-2 border-black" to="/contact">Contact</Link>
                </div>
                    <div className = "flex justify-end text-end">
                        {

                        user?.photoURL ?
                        <img onClick={() => setToggle(true)} className="w-10 circle rounded-full mr-2 border-2 border-white" src={user.photoURL} alt=""/> 
                        :
                        user.photoURL === false &&
                        <div className="bg-gray-200 text-green-500 w-10 h-10 flex items-center text-xl mr-2 justify-center rounded-full">{user.displayName[0]}</div>}

                        {
                            user?.email? <button onClick={
                                logout
                            } > <FontAwesomeIcon icon={faSignOutAlt}/> Log out</button >
                            : <Link to="/login">Login</Link>
                        }
                    </div>
            </div>
            <UserInfoModal  setToggle={ setToggle } toggle={toggle} />
        </div>
    );
};

export default Header;