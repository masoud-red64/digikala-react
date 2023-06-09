import React from "react";

import "./BaseVisitedCategories.css";
import BaseVisitedCategory from "./BaseVisitedCategory/BaseVisitedCategory";

export default function BaseVisitedCategories() {
  return (
    <section className="categories-based-visited mt-5">
      <div className="row" id="categories-based-visited-container">
        <BaseVisitedCategory />
        <BaseVisitedCategory />
        <BaseVisitedCategory />
        <BaseVisitedCategory />
      </div>
    </section>
  );
}
