import React from "react";

import "./CategoryBannerBox.css";

export default function CategoryBannerBox() {
  return (
    <div className="col-6 col-lg-3">
      <a href="#" className="products-categories-banner__product">
        <img
          src="./images/product-banner/product1.webp"
          alt="banner"
          className="products-categories-banner__product-img"
        />
      </a>
    </div>
  );
}
