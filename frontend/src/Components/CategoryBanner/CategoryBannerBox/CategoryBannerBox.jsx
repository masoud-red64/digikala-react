import React from "react";

import "./CategoryBannerBox.css";

export default function CategoryBannerBox({ col, banner }) {
  return (
    <div className={col}>
      <a href="#" className="products-categories-banner__product">
        <img
          src={`/img/${banner && banner.img}`}
          alt="banner"
          className="products-categories-banner__product-img"
        />
      </a>
    </div>
  );
}
