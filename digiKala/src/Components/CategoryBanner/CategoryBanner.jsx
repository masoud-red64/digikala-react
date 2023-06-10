import React from "react";
import CategoryBannerBox from "./CategoryBannerBox/CategoryBannerBox";

import "./CategoryBanner.css";

export default function CategoryBanner({ col, img }) {
  return (
    <section className="products-categories-banner">
      <div className="row">
        <CategoryBannerBox col={col} img={img[0]} />
        <CategoryBannerBox col={col} img={img[1]} />
        <CategoryBannerBox col={col} img={img[2]} />
        <CategoryBannerBox col={col} img={img[3]} />
      </div>
    </section>
  );
}
