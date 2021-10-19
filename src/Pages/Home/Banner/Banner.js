// import { Carousel } from 'bootstrap';
import React,{useState} from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner-1.png';
import banner2 from '../../../images/banner-2.png';
import banner3 from '../../../images/banner-3.png';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-2xl">Supporting Team </h3>
                    <p className="text-lg">Support groups bring together people who are going through or have gone through similar experiences. For example, this common ground might be cancer, chronic medical conditions, addiction, bereavement or caregiving.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-2xl">Our Doctors Are Friendly</h3>
                    <p className="text-lg">“Physicians should be personable, great listeners, and empathetic to the concerns of their patients,” he elaborates. “They should not be condescending or arrogant. They should treat others as they want to be treated.” "Physicians should be personable, great listeners, and empathetic to the concerns of their patients."</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="">
                        <h3 className="text-2xl text-black">Our Doctor Team</h3>
                        <p className="text-white text-lg">We are a multidisciplinary team of doctors, nurses and administrators. Together we aim to provide you with comprehensive healthcare that is tailored to your individual needs, in an environment that is caring, safe and welcoming.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;