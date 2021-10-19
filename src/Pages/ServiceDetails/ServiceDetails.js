import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useService from '../../Hooks/useService';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const [service, setService] = useState();
    const { _id } = useParams();
    // useEffect(() => {
    //     fetch('./fakeData.JSON')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])
    // const matchService = service.map(service => service._id === _id)
    // console.log(matchService)
    return (
        <div>

        </div>
    );
};
export default ServiceDetails;