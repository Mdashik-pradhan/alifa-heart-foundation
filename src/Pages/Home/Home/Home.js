import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="">
                <Banner />
                <Services />
                <Reviews />
                <Contact />
            </div>
        </div>
    );
};

export default Home;