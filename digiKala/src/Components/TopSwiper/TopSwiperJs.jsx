import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './TopSwiperJs.css'

export default function TopSwiperJs() {
  return (
    <section className="top-swiper">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 4000 }}
        className="mySwiper top-swiper__swiper"
      >
        <SwiperSlide>
          <img src="/images/slide1.webp" alt="" className="top-swiper__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide2.webp" alt="" className="top-swiper__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide2.webp" alt="" className="top-swiper__img" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
