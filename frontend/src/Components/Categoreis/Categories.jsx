import React from "react";

import "./Categories.css";
import CategoryItem from "./CategoryItem/CategoryItem";

export default function Categories({title}) {
  return (
    <section className="categories">
      <p className="categories__title">{title}</p>
      <div className="row" id="categories-container">
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
      </div>
    </section>
  );
}
