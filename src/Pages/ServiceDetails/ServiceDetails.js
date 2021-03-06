import React,{ useState, useEffect} from 'react';
import { useParams } from 'react-router';
import BookAppointment from '../Home/BookAppointment/BookAppointment';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    const { _id } = useParams();
    const idInNumber = parseInt(_id);

     useEffect(() => {
        fetch('/fakeData.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
     }, []);

         const service = services.map(service => service)
         const serviceDetails = service.find(service => service._id === idInNumber);

    return (
        <div className="container mb-10 mt-10">
            <div className="md:flex mx-auto text-white mb-28 border border-gray-300 rounded-lg">
                <div className="">
                    <img className="w-full" src={serviceDetails?.img} alt="" />
                </div>
                <div className="bg-gray-800 w-full">
                    <h2>{serviceDetails?.serviceName}</h2>
                    <h2>{serviceDetails?.doctor}</h2>
                </div>
            </div>
            <BookAppointment />
        </div>
    );
};
export default ServiceDetails;