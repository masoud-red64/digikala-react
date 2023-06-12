import React from "react";

import "./BestSellingProduct.css";
import { Link } from "react-router-dom";
import { enToPersianNumber } from "../../../func/utils";

export default function BestSellingProduct({
  number,
  shortName,
  img,
  title,
  numberProduct,
}) {
  return (
    <div className="best-selling-products__swiper-slide__container">
      <Link
        to={`/product-info/${shortName}`}
        className="best-selling-products__swiper-content"
      >
        <img
          className="best-selling-products__swiper-content-img"
          src={`/img/${img}`}
          alt="product"
        />
        <p className="best-selling-products__swiper-content-number">
          {Number(numberProduct).toLocaleString("fa")}
        </p>
        <p className="best-selling-products__swiper-content-text">{title}</p>
      </Link>
    </div>
  );
}
