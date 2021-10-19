import React from 'react';

const Review = ({review}) => {
    const { name, profession, message, img} = review;
    return (
        <div>
            <div className="rounded-xl pt-3 pb-4  border-black border">
                <div className="">
                    <img className="w-60 h-60 mx-auto mb-5 rounded-full" src={img} alt="" />
                </div>
                <div className="px-4">
                    <h2 className="text-2xl font-semibold text-blue-400 text-center">{name}</h2>
                    <h3 className="text-lg font-lg p-3 text-center">{profession}</h3>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;