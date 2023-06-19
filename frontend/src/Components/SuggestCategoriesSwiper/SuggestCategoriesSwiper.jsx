import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./SuggestCategoriesSwiper.css";
import { Link } from "react-router-dom";

export default function SuggestCategoriesSwiper({
  title,
  suggestedCategories,
}) {
  return (
    <section className="suggest-digikala">
      <p className="suggest-digikala__title">{title}</p>
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
        {suggestedCategories &&
          suggestedCategories.map((category, index) => {
            if (index % 2 === 0) {
              let start = index;
              let end = Math.min(index + 2);
              let categories = suggestedCategories.slice(start, end);

              return (
                <SwiperSlide key={category.id}>
                  <div className="swiper-slide__container">
                    {categories.map((category) => (
                        <Link key={category.id} to={`/category-info/${category.shortName}/${category.mainID}`}
                          className="suggest-digikala__swiper-slide-content"
                        >
                          <div className="suggest-digikala__swiper-slide-content-wrapper-img">
                            <img
                              src={`/img/${category.img}`}
                              alt="suggest"
                              className="suggest-digikala__swiper-slide-content-img"
                            />
                          </div>
                          <p className="suggest-digikala__swiper-slide-content-text">
                            {category.title}
                          </p>
                        </Link>
                    ))}
                  </div>
                </SwiperSlide>
              );
            }
          })}
      </Swiper>
    </section>
  );
}
