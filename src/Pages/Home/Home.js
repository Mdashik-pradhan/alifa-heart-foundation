import React from 'react';
import LatestServices from '../LatestServices/LatestServices';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="grid-rows-3">
                <LatestServices />
            </div>
        </div>
    );
};

export default Home;