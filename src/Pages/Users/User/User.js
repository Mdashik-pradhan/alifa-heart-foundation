import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const User = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <div>
            <div className="container md:w-2/3 sm:w-2/3 bg-gray-200 shadow mx-auto mt-10 mb-20">
                <div className="w-full h-40 bg-gray-500 flex items-center justify-center">
                    <h1 className="text-white">{user?.displayName?.[0]}</h1>
                </div>
                <div className="flex justify-center items-center mb-5">
                    <img className='rounded-full mt-3 border-4 border-white' src={user?.photoURL} alt="" />
                </div>
                <div className="text-center pb-5">
                    <h1 className="text-2xl">{user?.displayName}</h1>
                    <h4>{user?.email}</h4>
                </div>
            </div>
        </div>
    );
};

export default User;