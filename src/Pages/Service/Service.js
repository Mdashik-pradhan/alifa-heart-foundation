import React from 'react';
import useService from '../../Hooks/useService';
import './Service.css';

const Service = ({service}) => {
    const {_id, serviceName, doctor, img } = service;
    const { handleDetails } = useService()
    // console.log(handleDetails)
    return (
        <div className = "border-2 border-gray-100 mt-6 text-center rounded bg-green-200 hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-30" >
            <img className="h-48 mx-auto w-full rounded" src={img} alt="" />
            <h2>{serviceName}</h2>
            <h3>{doctor}</h3>
            <button onClick={() => handleDetails(_id)} className="bg-red-500 hover:bg-red-700 px-5 py-2 rounded m-5 text-white">Appointment</button>
        </div>
    );
};

export default Service;