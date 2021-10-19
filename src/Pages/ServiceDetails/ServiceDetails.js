import React from 'react';
import { useParams } from 'react-router';
import useService from '../../Hooks/useService';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { services } = useService();
    const { _id } = useParams();
    const matchId = parseFloat(_id)
    const service = services.map(service => service);
    const matchService = service.find(service => service._id === matchId);
    console.log(matchService)
    return (
        <div>

        </div>
    );
};
export default ServiceDetails;