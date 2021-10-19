import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    // const [reviews, setReviews] = useState([]);
    const customerReviews = [
        {id: 1, name: 'Ummey Shahara', profession: 'Software Engineer', message: 'This is a good hospital. My neighbor had heart attacked. After treatment at this hospital She get well.', img: 'https://i.pinimg.com/736x/81/d0/6b/81d06bb83f90f4df667809b06280c1ae.jpg'},
        {id: 2, name: 'Sajjat Yousuf', profession: 'Web Developer', message: 'Alhamdulillah, I never thought I would survive. By the grace of God, I was cured after receiving treatment in this hospital.', img: 'https://www.americanbazaaronline.com/wp-content/uploads/2016/10/Zeeshan-ul-Hassan-Usmani.jpg'},
        {id: 3, name: 'Jannatun Nesa', profession: 'House Maker', message: 'It is a wonderful hospital as far as I can see it being in front of my house so I can enjoy its beauty every day. It is very clean and tidy..', img: 'https://wallpaperaccess.com/full/1903907.jpg'}
    ]
    console.log(customerReviews)
    // useEffect(() => {
    //     fetch(customerReviews)
    //     .then(res => res.json())
    //     .then(data => setReviews(data))
    // })
    return (
        <div className="container mt-32 grid grid-rows-1  grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-4">
            {
                customerReviews.map(review => <Review key={review.id} review={review} />)
            }
        </div>
    );
};

export default Reviews;