import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import { faFacebook, faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-blue-500 text-center">
            <div className=" p-8 text-white grid grid-rows-1 grid-cols-1 sm:grid-cols-2">
                <div className="mt-3">
                    <h3 className="text-2xl">Alif Heart Foundation</h3>
                </div>
                <div className="mt-3">
                    <h1 className="text-2xl mb-5">Visit Us In Social Media</h1>
                    <FontAwesomeIcon className="text-2xl mx-2 hover:text-gray-200" icon={faFacebook} />
                    <FontAwesomeIcon className="text-2xl mx-2 hover:text-gray-200" icon={faGithub} />
                    <FontAwesomeIcon className="text-2xl mx-2 hover:text-gray-200" icon={faTwitter} />
                    <FontAwesomeIcon className="text-2xl mx-2 hover:text-gray-200" icon={faLinkedin} />
                </div>
            </div>
            <h2 className="text-lg text-blue-200 text-center pb-3">All copy right by AHF.com.bd 2021</h2>
        </div>
    );
};

export default Footer;