import React from 'react';
import { useSwiper } from 'swiper/react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="custom-swiper-navigation">
      <button type="button" aria-label="previous slide" onClick={() => swiper.slidePrev()} className="absolute p-4 bg-gray-200 hover:bg-lime-500 text-white top-1/2  z-10">
        <BiLeftArrow />
      </button>
      <button type="button" aria-label="forward slide" onClick={() => swiper.slideNext()} className="absolute p-4 bg-gray-200 hover:bg-lime-500 text-white top-1/2 right-0 z-10">
        <BiRightArrow />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
