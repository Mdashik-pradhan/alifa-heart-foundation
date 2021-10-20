import React from 'react';
import useService from '../../Hooks/useService';
import './Service.css';

const Service = ({service}) => {
    const {_id, serviceName, doctor, img } = service;
    const { handleDetails } = useService()
    return (
        <div className = "border-2 border-gray-100 mt-6 text-center rounded hover:shadow-2xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-30" >
            <div>
                <img className="h-80 mx-auto w-full rounded mb-3" src={img} alt="" />
                <h2 className="text-2xl font-medium">{serviceName}</h2>
                <h3 className="text-xl font-medium">{doctor}</h3>
                <button onClick={() => handleDetails(_id)} className="border-4 rounded-full border-pink-700 hover:border-gray-700 transition duration-500 ease-in-out hover:text-white  hover:bg-red-700 px-3 py-2 m-5">Appointment</button>
            </div>
        </div>
    );
};

export default Service;