import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const UserInfoModal = (props) => {
    const {toggle, setToggle} = props;
    const { user, logout } = useAuth()
    const history = useHistory();



    const redirectToLogin = () => {
        history.push('/login')
    }

    return (
        <div className="absolute flex justify-end items-center mx-auto top-38 right-5 text-black">
            {
                toggle?

                <div className="w-60 p-3 rounded-md  bg-green-100 z-50">
                <div className="text-right">
                    <button className="bg-red-500 w-8 h-8 rounded text-white font-semibold" onClick={() => setToggle(false)}>X</button>
                </div>
                <div className="flex justify-center text-center">
                    <div className="divide-y-2 divide-gray-500 divide-solid w-full">
                        <img className="rounded-full mx-auto mb-2 border-4 border-white" src={user.photoURL} alt="" />
                        <div>
                            <h3 className="font-semibold m-2">{user.displayName}</h3>
                            <Link onClick={() => setToggle(false)} to="/user" className="bg-yellow-600 px-3 py-1 text-white rounded border-2 border-white">View Profile</Link>
                            <button className="block mx-auto font-bold m-3" onClick={logout}>Log Out</button>
                            {!user.email && redirectToLogin()}
                        </div>
                    </div>
                </div>
            </div> 
            : 
            
            ''}

        </div>
    );
};

export default UserInfoModal;