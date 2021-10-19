// import React from 'react';
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import 'swiper/css';

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>

      ...
    </Swiper>
  );
};

export default Carousel;