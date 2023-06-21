import React from "react";

import "./CategoryItem.css";
import { Link } from "react-router-dom";

export default function CategoryItem({ img, title, shortName }) {
  return (
    <div className="col-4 col-lg-2">
      <Link to={`/main/${shortName}`} className="categories__content">
        <img
          src={`/img/${img}`}
          alt="category"
          className="categories__content-img"
          loading="lazy"
        />
        <p className="categories__content-text">{title}</p>
      </Link>
    </div>
  );
}
