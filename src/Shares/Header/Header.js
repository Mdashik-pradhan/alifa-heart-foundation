import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import UserInfoModal from '../../Pages/Users/UserInfoModal/UserInfoModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const { user, logout } = useAuth();

    return (
        <div className="shadow-lg p-8 text-black">
            <div className="container flex items-center">
                <div>
                    <h1 className="text-2xl font-semibold hidden md:block">Alifa Heart Foundation</h1>
                    <h1 className="text-2xl font-bold sm:hidden">Alif Heart Foundation</h1>
                </div>
                <div className="flex mx-auto">
                    <Link className="p-2 hover:no-underline text-lg hidden sm:block font-semibold hover:text-red-300 hover:border-t-2 border-black" to="/">Home</Link>
                    <Link className="p-2 hover:no-underline text-lg hidden sm:block font-semibold hover:text-red-300 hover:border-t-2 border-black" to="/services">Services</Link>
                    <Link className="p-2 hover:no-underline text-lg hidden sm:block font-semibold hover:text-red-300 hover:border-t-2 border-black" to="/about">About</Link>
                    <Link className="p-2 hover:no-underline text-lg hidden sm:block font-semibold hover:text-red-300 hover:border-t-2 border-black" to="/contact">Contact</Link>
                </div>
                    <div className = "flex justify-end text-end">
                        {

                        user.photoURL? 
                        <img onClick={() => setToggle(true)} className="w-10 circle rounded-full mr-2 border-2 border-white" src={user.photoURL} alt=""/> 
                        :
                        <div onClick={
                            () => setToggle(true)
                        }
                        className="w-10 circle rounded-full mr-3 border-2 border-white text-4xl " > < FontAwesomeIcon icon = {
                            faHouseUser
                        }
                        />
                        
                        </div >

                        }
                        <div className="flex items-center">
                            {
                                user?.email? <button className="hidden sm:block" onClick={
                                    logout
                                } > <FontAwesomeIcon icon={faSignOutAlt}/> Log out</button >
                                : <Link className="text-lg font-semibold" to="/login">Login</Link>
                            }
                        </div>

                    </div>
            </div>
            <UserInfoModal  setToggle={ setToggle } toggle={toggle} />
        </div>
    );
};

export default Header;