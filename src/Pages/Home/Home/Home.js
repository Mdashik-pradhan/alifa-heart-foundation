import React from 'react';
import LatestServices from '../../LatestServices/LatestServices';
import Services from '../../Services/Services';
// import Carousel from '../Carousel/Carousel';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="grid-rows-3">
                {/* <Carousel /> */}
                {/* <LatestServices /> */}
                <Services />
            </div>
        </div>
    );
};

export default Home;