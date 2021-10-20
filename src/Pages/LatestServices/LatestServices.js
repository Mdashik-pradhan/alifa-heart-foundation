import React from 'react';
import useService from '../../Hooks/useService';
import './LatestServices.css';

const LatestServices = () => {
    const { services, handleDetails } = useService();
    const latestServices = services.slice(4, 10);

    return (
        <div className = "container  mx-auto grid grid-rows-1  md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-60 mb-60 " >
            {
                latestServices.map(latestService => (

                
                    <div className="border-2 border-gray-100 mt-6 text-center rounded hover:shadow-2xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-30" >
                        <img className="h-80 mx-auto w-full rounded mb-3" src={latestService.img} alt="" />
                        <h2 className="text-2xl font-medium">{latestService.serviceName}</h2>
                        <h3 className="text-xl font-medium">{latestService.doctor}</h3>
                        <button onClick={() => handleDetails(latestService._id)} className="border-4 rounded-full border-pink-700 hover:border-gray-700 transition duration-500 ease-in-out hover:text-white  hover:bg-red-700 px-3 py-2 m-5">Appointment</button>
                    </div>

                ))
            }
        </div>
    );
};

export default LatestServices;