import React, { useEffect, useState } from "react";

import "./BaseVisitedCategory.css";
import BaseVisitedProduct from "../BaseVisitedProduct/BaseVisitedProduct";

export default function BaseVisitedCategory({
  page,
  title,
  categoryID,
  products,
}) {
  return (
    <div className={`col-12 ${page === "indexPage" ? "col-lg-3" : "col-lg-4"}`}>
      <div className="categories-based-visited__wrapper">
        <div className="categories-based-visited__content">
          <p className="categories-based-visited__content-title">{title}</p>

          <p className="categories-based-visited__content-subtitle">
            {page === "index" && " براساس بازید های شما"}
          </p>
          <div className="categories-based-visited__content-img-wrapper">
            {products.map((product) => (
              <BaseVisitedProduct key={product.id} {...product} />
            ))}
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
