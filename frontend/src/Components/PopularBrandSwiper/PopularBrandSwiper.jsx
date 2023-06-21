import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import "./PopularBrandSwiper.css";

export default function PopularBrandSwiper({ popularBrands }) {
  return (
    popularBrands.length && (
      <section className="papular-brands mt-5">
        <p className="papular-brands__title">محبوب ترین برندها</p>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1.5}
          spaceBetween={22}
          breakpoints={{
            400: {
              slidesPerView: 2.5,
            },
            576: {
              slidesPerView: 3.5,
            },
            768: {
              slidesPerView: 4.5,
            },
            992: {
              slidesPerView: 5.5,
            },
            1200: {
              slidesPerView: 6.5,
            },
          }}
          className="mySwiper papular-brands__swiper"
        >
          {popularBrands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="papular-brands__swiper-slide-content">
                <a
                  href="#"
                  className="papular-brands__swiper-slide-content-link"
                >
                  <img
                    src={`/img/${brand.img}`}
                    alt="brand"
                    className="papular-brands__swiper-content-img"
                    loading="lazy"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    )
  );
}
