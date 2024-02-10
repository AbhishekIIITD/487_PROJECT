import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Carousel({items}) {
  const swiperRef = useRef(null);

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        ref={swiperRef}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute md:bottom-0 left-5 border-black md:top-1/2 transform md:-translate-y-1/2 flex md:flex-col  z-10 bg-transparent ">
        {items.map((item, index) => (
          <button key={index} className="mb-4" onClick={() => goToSlide(index)}>
            <img
              src={item}
              alt={`Button ${index + 1}`}
              className="rounded-full w-16 h-16 border-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
