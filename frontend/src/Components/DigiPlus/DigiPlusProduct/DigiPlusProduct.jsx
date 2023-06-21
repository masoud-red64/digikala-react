import React from "react";

import "./DigiPlusProduct.css";
import { Link } from "react-router-dom";

export default function DigiPlusProduct({ img,shortName }) {
  return (
    <Link to={`/product-info/${shortName}`} className="digiplus__left-bottom-product-link">
      <img
        src={`/img/${img}`}
        alt="product"
        className="digiplus__left-bottom-img"
        loading="lazy"
      />
    </Link>
  );
}
