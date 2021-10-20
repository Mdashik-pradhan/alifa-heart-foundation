import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const BookAppointment = () => {
     const { register, handleSubmit,  formState: { errors } } = useForm();
    const history = useHistory();
     const onSubmit = data => {
        history.push('/')
     };

    const { user } = useAuth();
    const { displayName, phone, email } = user;
    return (
        <div className="container">
            <div className="border-2  rounded  text-center mx-auto md:w-2/3 w--full p-5">
                <h1 className="text-sm font-semibold md:text-2xl">WE ALWAYS READY TO HELPS YOU</h1>
                <h1 className="text-2xl md:text-5xl  font-semibold mb-3"><span className="text-red-800">Book An</span> Appointment</h1>
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <div className="md:flex pt-16">
                            <input name="name" defaultValue={displayName} {...register("name", {required: true})}  placeholder="Name" className="w-full border-2  rounded-full p-2 mt-3 md:m-2 border-gray-300 text-gray-900 pl-4"/> <br/>
                            <input name="email" defaultValue={email} {...register("email", { required: true })} placeholder="Email" className="w-full border-2  rounded-full p-2 mt-3 md:m-2  border-gray-300 text-gray-900 pl-4"/><br/>
                        </div>
                        <div className="md:flex md:pt-10">
                            <input name="phone" defaultValue={phone} {...register("phone", { required: true })} placeholder="Phone" className="w-full border-2  rounded-full p-2 mt-3 md:m-2  border-gray-300 text-gray-900 pl-4"/> <br/>
                            <input name="address" {...register("address", { required: true })} placeholder="Address" className="w-full border-2  rounded-full p-2 mt-3 md:m-2  border-gray-300 text-gray-900 pl-4"/> <br/>
                        </div>
                        <textarea name="message" id="" rows="5" className="rounded-2xl border-2 border-gray-300 text-gray-900 pl-4 mt-3 w-full" placeholder="Your Message..."></textarea>
                    </div>
                    {errors.name && <span className="text-red-600">Please complete all required fields</span>}
                    <br />
                    <input type="submit"  className="px-4 py-2 rounded-xl bg-pink-800 text-white mt-5 text-lg" value="Appointment"/>
                </form>
            </div>
        </div>
    );
};

export default BookAppointment;