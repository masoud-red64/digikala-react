import React from "react";

import "./BestSellingProduct.css";

export default function BestSellingProduct({ number }) {
  return (
    <div className="best-selling-products__swiper-slide__container">
      <a href="#" className="best-selling-products__swiper-content">
        <img
          className="best-selling-products__swiper-content-img"
          src="/images/best-selling-products/product1.webp"
          alt="product"
        />
        <p className="best-selling-products__swiper-content-number">
          {number[0]}
        </p>
        <p className="best-selling-products__swiper-content-text">
          هندزفری بلوتوثی مدل inpods 12
        </p>
      </a>
      <a href="#" className="best-selling-products__swiper-content">
        <img
          className="best-selling-products__swiper-content-img"
          src="/images/best-selling-products/product2.webp"
          alt="product"
        />
        <p className="best-selling-products__swiper-content-number">
          {number[1]}
        </p>
        <p className="best-selling-products__swiper-content-text">
          مايع ظرفشويی پريل لوندر - 3750 گم
        </p>
      </a>
      <a href="#" className="best-selling-products__swiper-content">
        <img
          className="best-selling-products__swiper-content-img"
          src="/images/best-selling-products/product3.webp"
          alt="product"
        />
        <p className="best-selling-products__swiper-content-number">
          {number[2]}
        </p>
        <p className="best-selling-products__swiper-content-text">
          پفک نمکی مینو - 170 گرم
        </p>
      </a>
    </div>
  );
}
