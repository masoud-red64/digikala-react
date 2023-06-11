import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./SuggestSwiper.css";
import SuggestSwiperProduct from "./SuggestSwiperProduct/SuggestSwiperProduct";

export default function SuggestSwiper({ wonderfulProducts,color }) {
  return (
    <section className={`suggest-swiper mt-5 mt-xl-0 ${color}`}>
      <Swiper
        modules={[]}
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
        className="mySwiper suggest-swiper__swiper"
      >
        <SwiperSlide>
          <a href="#">
            <div className="suggest-swiper-slide__content-first">
              <img
                src="/images/wonderful-suggest/Amazings-title.svg"
                alt="img title"
                className="suggest-swiper-slide__content-first-img-title"
              />
              <img
                src="/images/wonderful-suggest/suggest1.png"
                alt="box"
                className="suggest-swiper-slide__content-first-img-box"
              />
              <p className="suggest-swiper-slide__content-first-show-all">
                مشاهده همه
                <svg
                  className="suggest-swiper-slide__content-first-show-all-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  id="arrow"
                >
                  <path
                    fill="#fff"
                    d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                  ></path>
                </svg>
              </p>
            </div>
          </a>
        </SwiperSlide>
        {wonderfulProducts.length
          ? wonderfulProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <SuggestSwiperProduct {...product} />
              </SwiperSlide>
            ))
          : null}
        <SwiperSlide>
          <div className="suggest-swiper-slide__content-last">
            <div className="suggest-swiper-slide__content-last-arrow">
              <svg
                className="suggest-swiper-slide__content-last-arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                id="arrow-left"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="216"
                  x2="40"
                  y1="128"
                  y2="128"
                  fill="none"
                  stroke="#26c3d6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <polyline
                  fill="none"
                  stroke="#26c3d6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                  points="112 56 40 128 112 200"
                ></polyline>
              </svg>
            </div>
            <p className="suggest-swiper-slide__content-last-show-all">
              مشاهده همه
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
