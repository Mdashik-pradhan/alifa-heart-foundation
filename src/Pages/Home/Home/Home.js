import React from 'react';
import LatestServices from '../../LatestServices/LatestServices';
// import Carousel from '../Carousel/Carousel';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="grid-rows-3">
                {/* <Carousel /> */}
                <LatestServices />
            </div>
        </div>
    );
};

export default Home;