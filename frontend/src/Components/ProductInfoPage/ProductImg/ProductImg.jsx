import React from "react";

import "./ProductImg.css";

export default function ProductImg({ img }) {
  return (
    <li className="product-content__right-product-photos-item">
      <img
        src={`/img/${img}`}
        alt=""
        className="product-content__right-product-photos-img"
        width="60"
        height="60"
      />
    </li>
  );
}
