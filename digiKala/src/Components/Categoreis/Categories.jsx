import React from "react";

import "./Categories.css";
import CategoryItem from "./CategoryItem/CategoryItem";

export default function Categories() {
  return (
    <section className="categories">
      <p className="categories__title">دسته بندی های دیجی کالا</p>
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
