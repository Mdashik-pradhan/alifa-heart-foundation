import React from 'react';
import LatestServices from '../../LatestServices/LatestServices';
import Banner from '../Banner/Banner';
import BookAppointment from '../BookAppointment/BookAppointment';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="">
                <Banner />
                <LatestServices />
                <BookAppointment />
                <Reviews />
            </div>
        </div>
    );
};

export default Home;