import React from 'react';
import { useParams } from 'react-router';
import useService from '../../Hooks/useService';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { services } = useService()
    const { _id } = useParams();
    const matchService = services.find(service => service._id === _id);
    console.log(matchService)
    return (
        <div>
        </div>
    );
};

export default ServiceDetails;