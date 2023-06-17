import React from "react";

import "./CommentsMobile.css";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import CommentMobile from "./CommentMobile/CommentMobile";

export default function CommentsMobile() {
  return (
    <div className="product-comments-mobile d-block d-lg-none">
      <div className="product-comments-mobile__top">
        <p className="product-comments-mobile__top-title">دیدگاه‌ها</p>
        <p className="product-comments-mobile__top-num">۱۶ دیدگاه</p>
      </div>
      <Swiper
        slidesPerView={2}
        grabCursor={true} 
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper product-comments-mobile__swiper"
      >
        <SwiperSlide>
          <CommentMobile />
        </SwiperSlide>
        <SwiperSlide>
          <CommentMobile />
        </SwiperSlide>
        <SwiperSlide>
          <CommentMobile />
        </SwiperSlide>
        <SwiperSlide>
          <CommentMobile />
        </SwiperSlide>
      </Swiper>

      <div className="product-comments-mobile__photos">
        <img
          src="/images/product-page/comment/630fd5fed0083604042cb4bf3064f8d86b30dccb_1633421782.jpg"
          alt="product"
          width="57"
          height="57"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </div>

      <div className="product-comments-mobile__submit-comment">
        <div className="">
          <svg
            id="comment"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ width: "20px", height: "20px", fill: "#3f4064" }}
          >
            <path
              fillRule="evenodd"
              d="M10 21a1 1 0 001.6.8l6.92-5.198A8 8 0 0014 2h-4a8 8 0 100 16v3zm7.373-6.037l-.037.027L12 18.998V17a1 1 0 00-1-1h-1a6 6 0 010-12h4a6 6 0 013.373 10.963z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="flex-grow-1">
          <p className="product-comments-mobile__submit-comment-title">
            دیدگاه خود را درباره این کالا بنویسید
            <svg
              id="chevronLeft"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{ width: "20px", height: "20px", fill: "#9e9fb1" }}
            >
              <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
            </svg>
          </p>
          <p className="product-comments-mobile__submit-comment-text">
            ۵ امتیاز دیجی‌کلاب
          </p>
          <p className="product-comments-mobile__submit-comment-text">
            پس از تایید شدن دیدگاه، با رفتن به صفحه ماموریت‌های دیجی‌کلاب
            امتیازتان را دریافت کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
