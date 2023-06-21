import React from "react";

import "./BaseVisitedProduct.css";
import { Link } from "react-router-dom";

export default function BaseVisitedProduct({ img, shortName }) {
  return (
    <Link
      to={`/product-info/${shortName}`}
      className="categories-based-visited__content-images-wrapper"
    >
      <img
        src={`/img/${img}`}
        alt="product"
        className="categories-based-visited__content-img-wrapper-img"
        loading="lazy"
      />
    </Link>
  );
}
