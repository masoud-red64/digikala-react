import React from "react";

import "./CategoriesItem.css";
import { Link } from "react-router-dom";

export default function CategoriesItem({ img, title, shortName, mainID }) {
  return (
    <Link
      to={`/category-info/${shortName}/${mainID}`}
      className="category-page__categories-item"
    >
      <img
        src={`/img/${img}`}
        alt="nuts"
        className="category-page__categories-item-img"
      />
      <p className="category-page__categories-item-text">{title}</p>
    </Link>
  );
}
