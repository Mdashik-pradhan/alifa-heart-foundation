import React from 'react';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import './Service.css';

const Services = () => {
    const { services } = useService()
    return (
        <div>
            <div className="container  mx-auto grid grid-rows-1  md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-60 mb-60 " >
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;