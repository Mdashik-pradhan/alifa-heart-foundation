import React from 'react';
import useService from '../../Hooks/useService';
import './Service.css';

const Service = ({service}) => {
    const {_id, serviceName, doctor, img } = service;
    const { handleDetails } = useService()
    // console.log(handleDetails)
    return (
        <div className = "shadow mt-6 text-center rounded" >
            <img className="h-48 mx-auto w-full rounded" src={img} alt="" />
            <h2>{serviceName}</h2>
            <h3>{doctor}</h3>
            <button onClick={() => handleDetails(_id)} className="bg-red-500 hover:bg-red-700 px-5 py-2 rounded m-5 text-white">Details</button>
        </div>
    );
};

export default Service;