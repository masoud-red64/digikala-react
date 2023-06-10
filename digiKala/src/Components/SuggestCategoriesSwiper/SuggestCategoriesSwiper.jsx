import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./SuggestCategoriesSwiper.css";

export default function SuggestCategoriesSwiper() {
  return (
    <section className="suggest-digikala">
      <p className="suggest-digikala__title">پیشنهاد دیجی کالا</p>
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
        className="mySwiper suggest-digikala__swiper"
      >
        <SwiperSlide>
          <div className="swiper-slide__container">
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest1.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                گوشی موبایل
              </p>
            </a>
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest7.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                کیف و کاور گوشی
              </p>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide__container">
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest1.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                گوشی موبایل
              </p>
            </a>
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest7.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                کیف و کاور گوشی
              </p>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide__container">
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest1.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                گوشی موبایل
              </p>
            </a>
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest7.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                کیف و کاور گوشی
              </p>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide__container">
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest1.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                گوشی موبایل
              </p>
            </a>
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest7.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                کیف و کاور گوشی
              </p>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide__container">
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest1.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                گوشی موبایل
              </p>
            </a>
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest7.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                کیف و کاور گوشی
              </p>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide__container">
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest1.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                گوشی موبایل
              </p>
            </a>
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest7.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                کیف و کاور گوشی
              </p>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide__container">
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest1.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                گوشی موبایل
              </p>
            </a>
            <a href="#" className="suggest-digikala__swiper-slide-content">
              <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                <img
                  src="/images/suggest-digikala/suggest7.jpg"
                  alt="suggest"
                  className="suggest-digikala__swiper-slide-content-img"
                />
              </div>
              <p className="suggest-digikala__swiper-slide-content-text">
                کیف و کاور گوشی
              </p>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
