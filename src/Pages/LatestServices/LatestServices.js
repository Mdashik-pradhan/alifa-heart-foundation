import React from 'react';
import useService from '../../Hooks/useService';
import './LatestServices.css';

const LatestServices = () => {
    const { services, handleDetails } = useService();
    const latestServices = services.slice(4, 8);

    return (
        <div className="sm:container  mx-auto grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 mb-10">
            {
                latestServices.map(latestService => (

                
                    <div className="shadow rounded text-center" >
                        <img className="h-48 w-full rounded mx-auto" src={latestService.img} alt="" />
                        <h2>{latestService.serviceName}</h2>
                        <h3>{latestService.doctor}</h3>
                        <button onClick={() => handleDetails(latestService._id)} className="bg-green-500 px-5 py-2 rounded m-5 text-white">Details</button>
                    </div>

                ))
            }
        </div>
    );
};

export default LatestServices;