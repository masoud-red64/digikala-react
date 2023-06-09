import React from "react";

import "./CategoryItem.css";

export default function CategoryItem() {
  return (
    <div className="col-4 col-lg-2">
      <a href="#" className="categories__content">
        <img
          src="./images/categories/category1.webp"
          alt="category"
          className="categories__content-img"
        />
        <p className="categories__content-text">ابزار،لوازم ساختمانی و صنعتی</p>
      </a>
    </div>
  );
}
