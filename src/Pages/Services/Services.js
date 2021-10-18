import React from 'react';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import './Service.css';

const Services = () => {
    const { services } = useService()
    return (
        <div>
            <div className="sm:container  mx-auto grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 mb-10" >
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;