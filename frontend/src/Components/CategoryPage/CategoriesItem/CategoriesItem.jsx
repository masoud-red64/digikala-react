import React from "react";

import "./CategoriesItem.css";

export default function CategoriesItem() {
  return (
    <a href="#" className="category-page__categories-item">
      <img
        src="/images/category/nuts.png"
        alt="nuts"
        className="category-page__categories-item-img"
      />
      <p className="category-page__categories-item-text">آجیل خوری سنتی</p>
    </a>
  );
}
