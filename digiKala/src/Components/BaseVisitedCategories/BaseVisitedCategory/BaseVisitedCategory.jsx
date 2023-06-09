import React from "react";

import "./BaseVisitedCategory.css";
import BaseVisitedProduct from "../BaseVisitedProduct/BaseVisitedProduct";

export default function BaseVisitedCategory() {
  return (
    <div className="col-12 col-lg-3">
      <div className="categories-based-visited__wrapper">
        <div className="categories-based-visited__content">
          <p className="categories-based-visited__content-title">گوشی موبایل</p>
          <p className="categories-based-visited__content-subtitle">
            براساس بازید های شما
          </p>
          <div className="categories-based-visited__content-img-wrapper">
            <BaseVisitedProduct />
            <BaseVisitedProduct />
            <BaseVisitedProduct />
            <BaseVisitedProduct />
          </div>
          <a href="#" className="categories-based-visited__content-see-link">
            مشاهده
            <svg
              className="categories-based-visited__content-see-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="arrow"
            >
              <path
                fill="#39cde5"
                d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
