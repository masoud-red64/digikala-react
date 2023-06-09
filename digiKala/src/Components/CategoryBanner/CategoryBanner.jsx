import React from "react";
import CategoryBannerBox from "./CategoryBannerBox/CategoryBannerBox";

import "./CategoryBanner.css";

export default function CategoryBanner() {
  return (
    <section className="products-categories-banner">
      <div className="row">
        <CategoryBannerBox />
        <CategoryBannerBox />
        <CategoryBannerBox />
        <CategoryBannerBox />
      </div>
    </section>
  );
}
