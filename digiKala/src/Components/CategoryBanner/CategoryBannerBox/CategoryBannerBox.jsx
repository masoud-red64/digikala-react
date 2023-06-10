import React from "react";

import "./CategoryBannerBox.css";

export default function CategoryBannerBox({ col, img }) {
  return (
    <div className={col}>
      <a href="#" className="products-categories-banner__product">
        <img
          src={img}
          alt="banner"
          className="products-categories-banner__product-img"
        />
      </a>
    </div>
  );
}
