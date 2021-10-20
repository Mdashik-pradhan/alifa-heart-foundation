import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import { faFacebook, faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-gray-700 border-t-4 border-green-800 border-opacity-10">
            <div className=" p-8 text-white grid grid-rows-1 grid-cols-1 sm:grid-cols-2 ">
                <div className="mt-3 text-center sm:border-r-2  border-gray-600 p-2 pb-4">
                    <h3 className="text-2xl font-semibold mb-3">Alif Heart Foundation</h3>
                    <p className="px-5"> We work in a friendly and efficient using the latest technologies and sharing our expertise to make a diagnosis and implement cutting - edge therapies. </p>
                    <h1 className="text-2xl mb-3 mt-4">Connect with us</h1>
                    <FontAwesomeIcon className="text-2xl mx-2 text-gray-500 cursor-pointer transition duration-500 ease-in-out hover:text-gray-100" icon={faFacebook} />
                    <FontAwesomeIcon className="text-2xl mx-2 text-gray-500 cursor-pointer transition duration-500 ease-in-out hover:text-gray-100" icon={faGithub} />
                    <FontAwesomeIcon className="text-2xl mx-2 text-gray-500 cursor-pointer transition duration-500 ease-in-out hover:text-gray-100" icon={faTwitter} />
                    <FontAwesomeIcon className="text-2xl mx-2 text-gray-500 cursor-pointer transition duration-500 ease-in-out hover:text-gray-100" icon={faLinkedin} />
                    <div className="border-t-2 border-dotted border-gray-100 mt-5">
                        <h1 className="text-2xl text mt-4">REGISTER NEWSLETTER</h1>
                        <div className="flex border-2 mt-5 border-pink-900 rounded-lg">
                            <input type="text" name="email" placeholder="Enter Your Email Address" className="w-full p-3" />
                            <input type="submit" className="bg-pink-900 px-5 border-2 border-white rounded" />
                        </div>
                    </div>
                </div>
                <div className="mt-3 text-center">
                    {/* Patient Guide */}
                    <div className="">
                        <h1 className="text-2xl font-semibold mb-3">PATIENT GUIDE</h1>
                        <div className="">
                            <p className="text-gray-400 hover:text-white cursor-pointer transition duration-500 ease-in-out pt-2">Choosing a doctor</p>
                            <p className="text-gray-400 hover:text-white cursor-pointer transition duration-500 ease-in-out pt-2">Health journal</p>
                            <p className="text-gray-400 hover:text-white cursor-pointer transition duration-500 ease-in-out pt-2">Insurance converage</p>
                            <p className="text-gray-400 hover:text-white cursor-pointer transition duration-500 ease-in-out pt-2">Talking to our doctor</p>
                            <p className="text-gray-400 hover:text-white cursor-pointer transition duration-500 ease-in-out pt-2"></p>
                            <p className="text-gray-400 hover:text-white cursor-pointer transition duration-500 ease-in-out pt-2"></p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-2xl font-semibold">OPENING HOURS</h1>
                        <p className="p-2 text-gray-300">Mon to Fri 8:00 am to 7:00pm</p>
                        <p className="p-2 text-gray-300">Sun & Sat 9:00 am to 5:00pm</p>
                    </div>
                    <a href="tel:+88-92244606" className="text-red-300 text-lg hover:no-underline hover:text-red-50">Hotline: +88-92244606</a>
                </div>
            </div>
            <h2 className="text-lg text-gray-400 text-center p-3 bg-gray-900">All copy right by AHF.com.bd 2021</h2>
        </div>
    );
};

export default Footer;