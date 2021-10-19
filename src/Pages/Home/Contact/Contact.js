import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="container grid grid-rows-1 grid-cols-1 h-80 md:grid-cols-2 mt-32 mb-32">
                <div className="">
                    < img className="h-80" src = "https://image.freepik.com/free-vector/telehealth-abstract-concept-vector-illustration-virtual-medical-care-remote-admission-doctor-advice-telehealth-appointment-coronavirus-pandemic-lockdown-social-distancing-abstract-metaphor_335657-4157.jpg"
                    alt = "" />
                </div>
                <div className = "flex justify-center items-center bg-red-300 rounded text-center p-5" >
                    <div className="mx-auto">
                        <form>
                            <input type="text" name="name" className="border-b-2 field-none border-blue-500 w-80 mb-2 p-2 rounded" placeholder="Name"/>
                            <input type="email" name="email" className="border-b-2 field-none border-blue-500 w-80 mb-2 p-2 rounded" placeholder="Email Address"/>
                            <input type="phone" name="phone" className="border-b-2 field-none border-blue-500 w-80 mb-2 p-2 rounded" placeholder="Phone"/><br />
                            <button className="mt-5 bg-red-400 border-2 border-white px-10 py-2 rounded-full text-white" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;