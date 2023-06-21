import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TopSwiperJs.css";

export default function TopSwiperJs({ borderRadius, sliders }) {
  return (
    <section className="top-swiper">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 4000 }}
        className={`mySwiper top-swiper__swiper ${
          borderRadius ? "top-swiper__swiper-border" : ""
        }`}
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <img
              src={`/img/${slider.img}`}
              alt=""
              className="top-swiper__img"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
